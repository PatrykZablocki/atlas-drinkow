import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ScrollingProvider } from 'react-scroll-section'
import { Notification } from './components/Notification/Notification'
import { Layout } from './layout/Layout'
import { Routes } from './routes/Routes'
import { store } from './store/store'
import { theme } from './utils/theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ScrollingProvider>
          <BrowserRouter>
            <Notification />
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ScrollingProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
