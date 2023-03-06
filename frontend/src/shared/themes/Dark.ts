import { createTheme } from '@mui/material/styles'
import { typography } from '@mui/system'
export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#000'
    },
    background: {
      default: '#292738',
      paper: '#363447'
    },
    text: {
      primary: '#fff'
    }
  }
})
