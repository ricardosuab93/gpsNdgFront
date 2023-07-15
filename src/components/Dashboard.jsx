import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { getClientesxDia } from '../Redux/reducers/ClientesReducer/reducers.js'
import Detail from './Detail.jsx'
import { GiPositionMarker } from 'react-icons/gi'
import SearchBar from './SearchBar.jsx'

const Dashboard = () => {
  const { state } = useLocation()
  const { Usuario, Nombre } = state[0]

  const { clientes } = useSelector((state) => state.clientes)
  const dispacth = useDispatch()
  // console.log(Usuario, Nombre)

  const nombreVendedor = Nombre.split(' ')[2]
  const nombreVendedor2 = Nombre.split(' ')[2]+Nombre.split(' ')[0]

  useEffect(() => {
    dispacth(getClientesxDia(Usuario))
  }, [])

  // console.log(clientes)

  return (
    <div className='h-screen p-7'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-xl font-bold'>
          Bienvenid@, {nombreVendedor}
        </h1>
        <Link to='/ubiVendedor'>
          <button className=' flex flex-col justify-center items-center bg-white rounded-lg'>
            <GiPositionMarker />
            Mostrar mi ubicacion
          </button>
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className='mb-5'>
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <Detail
              key={cliente.ClientePuntoVenta}
              id={cliente.ClientePuntoVenta}
              nombre={cliente.DCliente}
              direccion={cliente.Direccion}
              latitud={cliente.Latitud}
              longitud={cliente.Longitud}
              vendedor={nombreVendedor2}
            />
          ))
        ) : (
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          >
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Loading...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
