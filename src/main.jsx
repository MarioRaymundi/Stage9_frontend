import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "styled-components"
import GlobalStyle from "./pastaEstilos/global"
import tema from './pastaEstilos/tema'
import {Rotas} from "./pastaRotas"
import {AuthProvider} from "./pastaHooks/auth"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
