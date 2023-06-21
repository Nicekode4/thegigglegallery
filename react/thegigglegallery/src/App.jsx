import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import AppRouter from './root/AppRouter/AppRouter'
import Footer from './Components/Footer/Footer'
import GlobalStyle from './root/Global.style'

function App() {


  return (
    <>
    <GlobalStyle />
    <Header />
     <AppRouter />
    <Footer />
    </>
  )
}

export default App
