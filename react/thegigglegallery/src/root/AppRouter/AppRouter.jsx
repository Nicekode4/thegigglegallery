import React from 'react'
import Home from "../../Pages/Home/Home";

function AppRouter() {
  return (

<Routes>
    <Route index element={<Home/>}></Route>
</Routes>

  )
}

export default AppRouter