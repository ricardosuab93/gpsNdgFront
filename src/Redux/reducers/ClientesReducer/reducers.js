import axios from 'axios'
import { ObtenerClientesxDia, ObtenerDetalleCliente } from './index.js'

const serverUrl = 'https://gpsback.onrender.com'
// const serverUrl = 'http://localhost:3001'

export const getClientesxDia = (userId) => (dispatch) => {
  // console.log('reducer' + userId)
  axios
    .get(
      `${serverUrl}/NORDIGESAServices/api/Clientes/RutaClientexUsuario?Usuario=${userId}`
    )
    .then((response) => {
      dispatch(ObtenerClientesxDia(response.data))
    })
    .catch((error) => console.error(error))
}

export const getDetalleCliente = (clientId) => (dispatch) => {
  axios
    .get(
      `${serverUrl}/NORDIGESAServices/api/Clientes/RutaDetalleClientexId?clientId=${clientId}`
    )
    .then((response) => {
      dispatch(ObtenerDetalleCliente(response.data[0]))
    })
    .catch((error) => console.error(error))
}

export const updateGpsCliente = (clientId, lat, long) => () => {
  axios
    .put(
      `${serverUrl}/NORDIGESAServices/api/Clientes/ActualizaGpsCliente?cpv=${clientId}&lat=${lat}&long=${long}`
    )
    .catch((error) => console.error(error))
}
