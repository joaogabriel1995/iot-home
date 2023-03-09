import React from 'react'
import * as d3 from 'd3'
import { Typography } from '@mui/material'

export function NumberDisplay(props) {
  const { number, color } = props

  const formatter = d3.format('.2s')
  const formattedNumber = formatter(number).replace('G', 'B')

  return (
    <Typography
      variant="h1"
      component="span"
      style={{ color: color, fontWeight: 'bold' }}
    >
      {formattedNumber} °C
    </Typography>
  )
}
