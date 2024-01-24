import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/Theme'
import ResetStyles from '@/styles/Reset'
import GlobalStyles from '@/styles/Global'
import AppRoutes from '@/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ResetStyles />
            <GlobalStyles />
            <AppRoutes />
        </ThemeProvider>
    </React.StrictMode>
)
