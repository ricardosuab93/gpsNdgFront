import axios from 'axios'
import { ObtenerUsuario } from './index.js'

const serverUrl = 'https://gpsback.onrender.com'
//const serverUrl = 'http://localhost:3001'

export const getUsuarioByLogin = (user) => (dispatch) => {
  console.log('reducer' + user)
  axios
    .get(
      `${serverUrl}/NORDIGESAServices/api/Usuarios/GetUsuarioLogin?Login=${user}`
    )
    .then((response) => {
      dispatch(ObtenerUsuario(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
}
