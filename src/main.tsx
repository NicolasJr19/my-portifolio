import { StrictMode } from 'react'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </StrictMode>
)