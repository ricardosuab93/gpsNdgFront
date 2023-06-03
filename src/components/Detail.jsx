import React from 'react'
import { useNavigate } from 'react-router-dom'

const Detail = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <h5>{props.id}</h5> */}
      <h3>{props.nombre.split('-')[2]}</h3>
      <h5>{props.direccion}</h5>
      <button onClick={() => navigate('/ubiCliente', {state: { clientId: props.id, nombre: props.nombre, latitud: props.latitud, longitud: props.longitud} })}>Ver ubicacion del cliente</button>

    </div>
  )
}

export default Detail
