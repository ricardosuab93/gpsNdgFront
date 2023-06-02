import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getClientesxDia } from '../Redux/reducers/ClientesReducer/reducers.js'
import Detail from './Detail.jsx'


const Dashboard = () => {
  const { state } = useLocation()
  const { Usuario, Nombre } = state[0]

  const { clientes } = useSelector((state) => state.clientes)
  const dispacth = useDispatch()
  console.log(Usuario, Nombre)

  useEffect(() => {
    dispacth(getClientesxDia(Usuario))
  }, [])

  console.log(clientes)

  return (
    <div>
      <h1>Bienvenido, {Nombre.split(' ')[2]}</h1>
      <div>
      {
        clientes.length > 0 
        ? clientes.map((cliente) => (
          <Detail
            key={cliente.ClientePuntoVenta}
            id={cliente.ClientePuntoVenta}
            nombre={cliente.DCliente}
            direccion={cliente.Direccion}
          />
        ))
        :
        <h2>Loading</h2>
      }
      </div>
    </div>
  )
}

export default Dashboard
