import React, { useEffect, useState } from 'react'
import GoogleMaps from 'simple-react-google-maps'

const MapVendedor = () => {
  const [latitud, setLatitud] = useState(0)
  const [longitud, setLongitud] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Verificar si el navegador soporta la geolocalización
    if (navigator.geolocation) {
      // Obtener la ubicación actual del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitud(position.coords.latitude)
          setLongitud(position.coords.longitude)
        },
        (error) => {
          setError(error.message)
        }
      )
    } else {
      setError('La geolocalización no está soportada en este navegador.')
    }
  }, [])

  return (
    <div className='w-full h-screen flex flex-col justify-center m-5'>
      <h1 className='text-center text-lg font-bold'>Tu te encuentras aqui actualmente:</h1>
      {latitud && longitud ? (
        <div>
          <GoogleMaps
            apiKey={'AIzaSyCvWflBR0PydhiLEPUv517clMCPHtWiRm4'}
            style={{ height: '400px', width: '100%' }}
            zoom={17}
            center={{ lat: latitud, lng: longitud }}
            markers={{ lat: latitud, lng: longitud }} //optional
          />
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  )
}

export default MapVendedor
