import { useSubscription } from '@apollo/client'
import { Button, Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useEffect, useRef, useState } from 'react'
import { Dht11getData, dht11Gql } from '../../graphql/relay.gql'
import { CardInfo, Donuts } from '../../shared/components/index'

export const Dashboard = () => {
  const [humidity, setHumidity] = useState<number>()
  const [temperature, setTemperature] = useState<string>('')

  const [text, setText] = useState<string>('')

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
            <CardInfo title={'Humidade'}>
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
                <Typography variant="h1" textAlign={'center'}>
                  {temperature} °C
                </Typography>
              </Box>
            </CardInfo>
          </Grid>
          <Grid item xs={4}>
            <CardInfo title={'Relay'} />
          </Grid>
          <Grid item xs={12}>
            <CardInfo title={'Gráfico'}></CardInfo>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
