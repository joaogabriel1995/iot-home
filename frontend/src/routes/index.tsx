import { Routes, Route } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { Dashboard } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  )
}
