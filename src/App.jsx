import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import MapVendedor from './components/MapVendedor'
import MapCliente from './components/MapCliente'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/ubiCliente' element={<MapCliente />} />
        <Route path='/ubiVendedor' element={<MapVendedor />} />
      </Routes>
    </>
  )
}

export default App
