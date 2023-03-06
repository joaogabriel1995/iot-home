import { useMutation, useQuery, useSubscription } from '@apollo/client'
import { Button, Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useEffect, useRef, useState } from 'react'
import { Dht11getData, dht11Gql } from '../../graphql/dht11.gql'
import { relayGql } from '../../graphql/relay.gql'
import { CardInfo, Donuts } from '../../shared/components/index'

interface getLastData {
  _value: number
  __typename: string
}
// type statusRelayType = { getLastData }

export const Dashboard = () => {
  const [humidity, setHumidity] = useState<number>()
  const [temperature, setTemperature] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [statusRelay, setStatusRelay] = useState<number>()

  const {
    data: lastStatusRelay,
    loading,
    error
  } = useQuery(relayGql.getRelayLastData)

  if (loading) {
    console.log('carregando')
  }

  const [updateStatusRelay] = useMutation(relayGql.switchStatusRelay)

  useEffect(() => {
    // setStatusRelay(lastStatusRelay._value)
    if (lastStatusRelay) {
      const status = lastStatusRelay.getLastData[0]._value
      setStatusRelay(status)
    }
  }, [lastStatusRelay])

  // Subscription
  const { data: dht11, loading: dataMachineLoading } =
    useSubscription<Dht11getData>(dht11Gql.getData)
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
    statusRelay === 0 ? setStatusRelay(1) : setStatusRelay(0)
    updateStatusRelay({ variables: { onOff: statusRelay } }).then(result => {
      console.log('Sucess')
    })
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
                  {temperature} °C
                </Typography>
              </Box>
            </CardInfo>
          </Grid>
          <Grid item xs={4}>
            <CardInfo title={'Relay'}>
              <Box
                height={'100%'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                {statusRelay === 0
                  ? 'IMAGEM DA LAMPADA LIGADA'
                  : 'IMAGEM DA LAMPADA DESLIGADA'}
                {
                  <Button variant="contained" onClick={switchStatus}>
                    {statusRelay === 0 ? 'Desligar' : 'Ligar'}
                  </Button>
                }
              </Box>
            </CardInfo>
          </Grid>
          <Grid item xs={12}>
            <CardInfo title={'Gráfico'}></CardInfo>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
