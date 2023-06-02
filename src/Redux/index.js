import { configureStore } from '@reduxjs/toolkit'
import usuarios from './reducers/UsuariosReducer/index.js'
import clientes from './reducers/ClientesReducer/index.js'

const store = configureStore({
  reducer: {
    usuarios,
    clientes
  }
})

export default store
