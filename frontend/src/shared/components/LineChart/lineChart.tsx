import { useState, useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { Box, Paper, useTheme } from '@mui/material'
import { bgcolor } from '@mui/system'
import { QueryResult, useQuery } from '@apollo/client'
import { dht11Gql, Dht11getMeanBytime } from '../../../graphql/dht11.gql'
import { LineChartService } from '../../services/lineChartServices'

interface LineChartProps {
  queryResult?: QueryResult
}

export const LineChart = ({ queryResult }: LineChartProps) => {
  const chartRef = useRef(null)
  const [chart, setChart] = useState(null)
  const theme = useTheme()
  const lineChartService = new LineChartService()
  const { data, loading, error } = queryResult

  useEffect(() => {
    if (data !== undefined) {
      const array = []
      const array_data = []
      data.getMeanByTimeWindow.map(resp => {
        array.push(lineChartService.formatDatetime(String(resp._time)))
        array_data.push(resp._value)
      })

      updateData(array_data, array)
    }
  }, [data])

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChart = new Chart(chartRef.current, {
        type: 'line',
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                color: 'rgba(255, 255, 255, 1)'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.5)' // cinza claro com 10% de opacidade
              }
            },
            x: {
              ticks: {
                color: 'rgba(255, 255, 255, 1)'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.5)' // cinza claro com 10% de opacidade
              }
            }
          }
        },
        data: {
          labels: [],
          datasets: [
            {
              label: 'Temperatura',
              data: [],
              borderColor: String(theme.palette.primary.main),
              backgroundColor: '#fff',
              tension: 0.1
            }
          ]
        }
      })
      setChart(newChart)
      return () => {
        newChart.destroy()
      }
    }
  }, [chartRef])

  const updateData = (data: number[], label: string[]) => {
    const newData = data
    const newLabel = label

    if (chart) {
      chart.data.datasets[0].data = newData
      chart.data.labels = newLabel
      chart.update()
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <canvas width="75%" height="100%" ref={chartRef} />
    </Box>
  )
}
