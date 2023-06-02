import React from 'react'
import { useNavigate } from 'react-router-dom'

const Detail = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <h5>{props.id}</h5> */}
      <h3>{props.nombre.split('-')[2]}</h3>
      <h5>{props.direccion}</h5>
      <button onClick={() => navigate('/ubiActual', {state: { clientId: props.id, nombre: props.nombre} })}>Ubicacion actual</button>
      <button onClick={() => navigate('/ubiUpdate', {state: { clientId: props.id } }) }>Actualizar GPS</button>
    </div>
  )
}

export default Detail
