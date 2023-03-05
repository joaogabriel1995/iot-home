import { ApolloProvider } from '@apollo/client'
import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { client } from './shared/services'
import { DarkTheme } from './shared/themes'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={DarkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}
export default App
