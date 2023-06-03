import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import GoogleMaps from 'simple-react-google-maps'
import { getDetalleCliente,updateGpsCliente } from '../Redux/reducers/ClientesReducer/reducers.js'
// import { Map, GoogleApiWraper, Marker } from 'google-maps-react'

const MapCliente = () => {
  const navigate = useNavigate()
  const { cliente } = useSelector((state) => state.clientes)
  const dispatch = useDispatch()
  const { state } = useLocation()
  const { clientId, nombre, latitud, longitud } = state
  const Latitud = +latitud
  const Longitud = +longitud

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [error, setError] = useState(null)
  console.log(lat, long)

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

  const handleCheckboxChange = (e) => {
    setIsButtonDisabled(!e.target.checked)
    getCurrentPosition()
  }

  const handleButtonClick = (e) => {
    console.log(clientId, lat, long)
    dispatch(updateGpsCliente(clientId, lat, long))
    alert("GPS ACTUALIZADO")
    navigate(-1)
  }

  useEffect(() => {
    dispatch(getDetalleCliente(clientId))
  }, [])

  return (
    <div>
      <div>
        <h1>mapa</h1>
        <h4>{nombre}</h4>
        <h4>{cliente.Direccion}</h4>
        <div>
          <label>
            <input
              type='checkbox'
              checked={!isButtonDisabled}
              onChange={handleCheckboxChange}
            />
            Editar
          </label>
          <button disabled={isButtonDisabled} onClick={handleButtonClick}>
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
