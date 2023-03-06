import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

interface DonutsProps {
  humidity?: number
  stringValue?: string
}

export const Donuts = ({ humidity, stringValue }: DonutsProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const calc = humidity ? 100 - humidity : 0
  const data = {
    labels: [''],
    options: {
      responsive: true
    },
    datasets: [
      {
        label: '% Umidade',
        data: [calc, humidity ? humidity : 0],
        backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(54, 162, 235, 0.8)'],
        borderColor: ['rgba(255, 255, 255, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }
    ]
  }

  const ref = useRef('')

  useEffect(() => {
    ref.current = stringValue! + '%'
  }, [stringValue])

  const labelPercentil = stringValue

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx, data } = chart
      ctx.save()
      ctx.font = 'bolder 30px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'center'
      ctx.fillStyle = 'black'
      ctx.fillText(
        ref.current,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      )
    }
  }

  return <Doughnut data={data} plugins={[textCenter]} />
}
