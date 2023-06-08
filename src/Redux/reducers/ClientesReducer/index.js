import { createSlice } from '@reduxjs/toolkit'

export const clientesSlice = createSlice({
  name: 'clientes',
  initialState: {
    clientes: [],
    filterClientes: [],
    cliente: {}
  },
  reducers: {
    ObtenerClientesxDia: (state, action) => {
      state.clientes = action.payload
      state.filterClientes = action.payload
      state.cliente = {}
    },
    ObtenerDetalleCliente: (state, action) => {
        state.cliente = action.payload
        state.clientes = []
      },
    ObtenerClientexNombre: (state, action) => {
      // console.log('state', + state)
      // console.log('payload', + action.payload)
      
      let clientes
      if(action.payload) clientes = state.filterClientes.filter((c) => c.DCliente.toLowerCase().includes(action.payload.toLowerCase()))
      
      return {
        ...state,
        clientes: !action.payload ? state.clientes : clientes 
      }
      // state.clientes = 
    }
  }
})

export const { ObtenerClientesxDia, ObtenerDetalleCliente, ObtenerClientexNombre } = clientesSlice.actions
export default clientesSlice.reducer