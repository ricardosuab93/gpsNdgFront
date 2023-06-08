import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiPositionMarker } from 'react-icons/gi';


const Detail = (props) => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-row justify-between bg-blue-300 p-4 m-2 rounded-lg'>
      {/* <h5>{props.id}</h5> */}
      <div className='text-center'>
        <h3 className='font-semibold'>{props.nombre.split('-')[2]}</h3>
        <h5>{props.direccion}</h5>
      </div>
      <div className='flex justify-center items-center'>
        <button
          className='font-bold bg-transparent flex justify-center items-center'
          onClick={() =>
            navigate('/ubiCliente', {
              state: {
                clientId: props.id,
                nombre: props.nombre,
                latitud: props.latitud,
                longitud: props.longitud,
                vendedor: props.vendedor
              }
            })
          }
        >
          <GiPositionMarker />
        </button>
      </div>
    </div>
  )
}

export default Detail
