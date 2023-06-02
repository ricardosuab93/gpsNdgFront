import dotenv from 'dotenv'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import GoogleMaps from 'simple-react-google-maps'
import { getDetalleCliente } from '../Redux/reducers/ClientesReducer/reducers.js'
// import { Map, GoogleApiWraper, Marker } from 'google-maps-react'

const MapsAct = () => {
  const { state } = useLocation()
  const { clientId } = state
  console.log(clientId)

  const { cliente } = useSelector((state) => state.clientes)
  const dispatch = useDispatch()

  const Latitud = +cliente.Latitud
  const Longitud = +cliente.Longitud
  console.log(Latitud, Longitud)

  useEffect(() => {
    dispatch(getDetalleCliente(clientId))
  }, [])

  return (
    <div>
      <h1>mapa</h1>
      <GoogleMaps
        apiKey={ 'AIzaSyCvWflBR0PydhiLEPUv517clMCPHtWiRm4' }
        style={{ height: '400px', width: '100%' }}
        zoom={18}
        center={{ lat: Latitud, lng: Longitud }}
        markers={{ lat: Latitud, lng: Longitud }} //optional
      />
    </div>
  )
}

export default MapsAct