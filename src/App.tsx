import { ThemeProvider } from '@mui/material'
import Home  from './page/Home'
import { theme } from './style/Temes'


const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
    
    <Home/>
    
    </ThemeProvider>
  )
}

export default App
