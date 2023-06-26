import React from 'react'
import Home from '../Pages/Home/Home.jsx'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
function AppRouter() {
  return (


<Routes>
    <Route index element={<Home/>}></Route>
</Routes>

  )
}

export default AppRouter