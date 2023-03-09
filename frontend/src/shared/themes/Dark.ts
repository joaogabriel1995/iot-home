import { createTheme } from '@mui/material/styles'
import { typography } from '@mui/system'
export const DarkTheme = createTheme({
  palette: {
    background: {
      default: '#121212',
      paper: '#1E1E1E'
    },
    primary: {
      main: '#90CAF9',
      light: '#BBDEFB'
    },
    secondary: {
      main: '#CFD8DC',
      light: '#ECEFF1'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5'
    }
  }
})
