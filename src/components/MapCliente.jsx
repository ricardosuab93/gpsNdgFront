import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import GoogleMaps from 'simple-react-google-maps'
import {
  getDetalleCliente,
  updateGpsCliente
} from '../Redux/reducers/ClientesReducer/reducers.js'
import { BsPencilFill } from 'react-icons/bs'
// import { Map, GoogleApiWraper, Marker } from 'google-maps-react'

const MapCliente = () => {
  const navigate = useNavigate()
  const { cliente } = useSelector((state) => state.clientes)
  const dispatch = useDispatch()
  const { state } = useLocation()
  const { clientId, nombre, latitud, longitud, vendedor } = state
  const Latitud = +latitud
  const Longitud = +longitud

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [error, setError] = useState(null)
  // console.log(lat, long)

  function getCurrentPosition() {
    // Verificar si el navegador soporta la geolocalización
    if (navigator.geolocation) {
      // Obtener la ubicación actual del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        },
        (error) => {
          setError(error.message)
        }
      )
    } else {
      setError('La geolocalización no está soportada en este navegador.')
    }
  }

  // var today = new Date().toISOString()
  // var now = today.toLocaleDateString()
  // console.log(today)
  // console.log(now)

  const date = moment()
    .tz('America/Lima')
    .format('YYYY-MM-DD HH:mm:ss.SSS')
    console.log(date)
  
  const handleCheckboxChange = (e) => {
    setTimeout(() => {
      console.log(clientId, lat, long, vendedor, date)      
    }, 2000);
    setIsButtonDisabled(!e.target.checked)
    getCurrentPosition()
  }

  const handleButtonClick = (e) => {
    getCurrentPosition()
    console.log(clientId, lat, long, vendedor, date)
    dispatch(updateGpsCliente(clientId, lat, long, vendedor, date))
    alert('GPS ACTUALIZADO')
    // window.location.replace('');
    navigate(-1)
  }

  useEffect(() => {
    dispatch(getDetalleCliente(clientId))
  }, [])

  return (
    <div className='w-full h-screen flex flex-col justify-center m-5'>
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className='text-xl font-bold'>Ubicacion actual del cliente</h1>
          <h4 className='text-lg font-semibold'>{nombre}</h4>
          <h4 className='text-lg font-semibold'>{cliente.Direccion}</h4>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <label className='flex flex-row'>
            <input
              className='hidden'
              type='checkbox'
              checked={!isButtonDisabled}
              onChange={handleCheckboxChange}
            ></input>
            <BsPencilFill />
          </label>
          <button
            className='bg-green-600 hover:scale-[1.01] ease-in-out rounded-lg disabled:bg-transparent disabled:text-white p-1 m-2'
            disabled={isButtonDisabled}
            onClick={handleButtonClick}
          >
            Actualizar ubicacion
          </button>
        </div>
      </div>
      <GoogleMaps
        apiKey={'AIzaSyCvWflBR0PydhiLEPUv517clMCPHtWiRm4'}
        style={{ height: '400px', width: '100%' }}
        zoom={18}
        center={{ lat: Latitud, lng: Longitud }}
        markers={{ lat: Latitud, lng: Longitud }} //optional
      />
    </div>
  )
}

export default MapCliente
