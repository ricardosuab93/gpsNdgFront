import { createSlice } from '@reduxjs/toolkit'

export const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {
    usuario: []
  },
  reducers: {
    ObtenerUsuario: (state, action) => {
        state.usuario = action.payload
    }
  }
})

export const { ObtenerUsuario } = usuariosSlice.actions
export default usuariosSlice.reducer