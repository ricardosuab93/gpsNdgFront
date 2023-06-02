import { createSlice } from '@reduxjs/toolkit'

export const clientesSlice = createSlice({
  name: 'clientes',
  initialState: {
    clientes: [],
    cliente: {}
  },
  reducers: {
    ObtenerClientesxDia: (state, action) => {
      state.clientes = action.payload
      state.cliente = {}
    },
    ObtenerDetalleCliente: (state, action) => {
        state.cliente = action.payload
      },
  }
})

export const { ObtenerClientesxDia, ObtenerDetalleCliente } = clientesSlice.actions
export default clientesSlice.reducer