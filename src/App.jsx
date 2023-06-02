import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import MapsAct from './components/MapsAct'
import MapsUpd from './components/MapsUpd'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/ubiActual' element={<MapsAct />} />
        <Route path='/ubiUpdate' element={<MapsUpd />} />
      </Routes>
    </>
  )
}

export default App
