import { useQuery, useSubscription } from '@apollo/client'
import { Box, Paper, Typography } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect } from 'react'
import { pageGql } from '../../../graphql/Page.gql'

interface PropsCards {
  children?: React.ReactNode
  title: String
}

export const CardInfo = ({ children, title }: PropsCards) => {
  const { loading, error, data: pageData } = useQuery(pageGql.hello)

  return (
    <Paper
      sx={{
        height: '400px',
        display: 'block',
        overflow: 'hidden'
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="40px"
        margin="0"
      >
        <Typography variant="h5" textAlign={'center'}>
          {' '}
          {title}
        </Typography>
      </Box>
      <Box
        height={'100%'}
        display="block"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Paper>
  )
}
