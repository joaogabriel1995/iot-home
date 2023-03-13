import { useMutation, useQuery, useSubscription } from '@apollo/client'
import {
  Button,
  Box,
  Typography,
  useTheme,
  IconButton,
  Card,
  CardContent,
  SvgIcon
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { useEffect, useRef, useState } from 'react'
import {
  Dht11getData,
  Dht11getMeanBytime,
  dht11Gql
} from '../../graphql/dht11.gql'
import { relayGql } from '../../graphql/relay.gql'
import { CardInfo, Donuts } from '../../shared/components/index'
import {
  LightOnIcon,
  LightOffIcon
} from '../../shared/components/SvgIcon/svgIcon'

import { NumberDisplay } from '../../shared/components/NumberDisplay/numberdisplay'
import { LineChart } from '../../shared/components/LineChart/lineChart'

interface getLastData {
  _value: number
  __typename: string
}
// type statusRelayType = { getLastData }

export const Dashboard = () => {
  const [humidity, setHumidity] = useState<number>()
  const [temperature, setTemperature] = useState<string>('')
  const [text, setText] = useState<string>('')
  const refButton = useRef<HTMLButtonElement>(null)

  const [statusRelay, setStatusRelay] = useState<number>()

  //query temp
  const queryResultTemp = useQuery<Dht11getMeanBytime>(
    dht11Gql.getMeanByTimeWindow,
    {
      pollInterval: 5000,
      variables: {
        timeRangeStartCalc: '1h',
        field: 'Temperature',
        windowPeriod: '10m'
      }
    }
  )

  //query Relay
  const {
    data: lastStatusRelay,
    loading,
    error
  } = useQuery(relayGql.getRelayLastData)

  // Subscription dht11 temperatura e umidade
  const { data: dht11, loading: dataMachineLoading } =
    useSubscription<Dht11getData>(dht11Gql.getData)

  const [updateStatusRelay] = useMutation(relayGql.switchStatusRelay)
  const theme = useTheme()

  useEffect(() => {
    // setStatusRelay(lastStatusRelay._value)
    if (lastStatusRelay) {
      const status = lastStatusRelay.getLastData[0]
        ? lastStatusRelay.getLastData[0]._value
        : 0
      refButton.current!.textContent = status === 0 ? 'Ligar' : 'Desligar'
      setStatusRelay(status)
    }
  }, [lastStatusRelay])

  useEffect(() => {
    const humidadeData = dht11?.getTempAndHumidity?.Humidity
    const temperatureData = dht11?.getTempAndHumidity?.Temperature

    if (humidadeData !== undefined) {
      setHumidity(humidadeData)
      setText(String(humidadeData))
    }
    if (temperatureData !== undefined) {
      setTemperature(temperatureData.toFixed(1).toString())
    }
  }, [dht11?.getTempAndHumidity])

  const switchStatus = () => {
    updateStatusRelay({ variables: { onOff: statusRelay === 0 ? 1 : 0 } }).then(
      result => {
        refButton.current!.textContent =
          statusRelay === 0 ? 'DESLIGAR' : 'LIGAR'
        statusRelay === 0 ? setStatusRelay(1) : setStatusRelay(0)
      }
    )
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Box height={'800px'} width="1142px" sx={{ overflow: 'hidden' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardInfo title={'Umidade'}>
              <Donuts humidity={humidity} stringValue={text}></Donuts>
            </CardInfo>
          </Grid>
          <Grid item xs={4}>
            <CardInfo title={'Temperatura'}>
              <Box
                height={'100%'}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography color={'#fff'} variant="h1" textAlign={'center'}>
                  <NumberDisplay number={temperature} />
                </Typography>
              </Box>
            </CardInfo>
          </Grid>
          <Grid item xs={4}>
            <CardInfo title={'Relay'}>
              <Box
                height={'80%'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                {statusRelay === 0 ? (
                  <Box
                    marginLeft={'50px'}
                    width="300px"
                    height="300px"
                    paddingTop={'16px'}
                  >
                    <SvgIcon sx={{ fontSize: 300 }}>
                      <LightOffIcon></LightOffIcon>
                    </SvgIcon>
                  </Box>
                ) : (
                  <Box marginLeft={'50px'} width="300px" height="300px">
                    <SvgIcon sx={{ fontSize: 300 }}>
                      <LightOnIcon></LightOnIcon>
                    </SvgIcon>
                  </Box>
                )}
                {
                  <Button
                    variant="contained"
                    ref={refButton}
                    onClick={switchStatus}
                  ></Button>
                }
              </Box>
            </CardInfo>
          </Grid>
          <Grid item xs={12}>
            <CardInfo title={'Gráfico de Temperatura'}>
              <LineChart queryResult={queryResultTemp}></LineChart>
            </CardInfo>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
