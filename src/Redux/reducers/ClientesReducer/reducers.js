import axios from 'axios'
import {
  ObtenerClientesxDia,
  ObtenerDetalleCliente,
  ObtenerClientexNombre
} from './index.js'

const serverUrl = 'https://gpsback.onrender.com'
// const serverUrl = 'http://localhost:3001'

export const getClientesxDia = (userId) => (dispatch) => {
  // console.log('reducer' + userId)

  let Ruta = ''

  if (
    userId === 19 ||
    userId === 24 ||
    userId === 29 ||
    userId === 36 ||
    userId === 42 ||
    userId === 43 ||
    userId === 54 ||
    userId === 108
  ) {
    Ruta = `${serverUrl}/NORDIGESAServices/api/Clientes/RutaClientexSupervisor?Usuario=${userId}`
  } else {
    Ruta = `${serverUrl}/NORDIGESAServices/api/Clientes/RutaClientexUsuario?Usuario=${userId}`
  }
  axios
    .get(Ruta)
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

export const updateGpsCliente = (clientId, lat, long, vendedor, date) => () => {
  axios
    .put(
      `${serverUrl}/NORDIGESAServices/api/Clientes/ActualizaGpsCliente?cpv=${clientId}&lat=${lat}&long=${long}&date=${date}&user=${vendedor}`
    )
    .catch((error) => console.error(error))
}

export const buscaClientexNombre = (nombre) => (dispatch) => {
  // console.log('reducer '+nombre)
  dispatch(ObtenerClientexNombre(nombre))
}
