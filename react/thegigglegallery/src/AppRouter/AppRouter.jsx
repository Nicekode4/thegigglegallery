import React from 'react'
import Home from "../Pages/Home/Home";
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import ProductList from '../Pages/ProductList/ProductList';
function AppRouter() {
  return (


<Routes>
    <Route index element={<Home/>}></Route>
    <Route path='/list' element={<ProductList />} ></Route>
</Routes>

  )
}

export default AppRouter