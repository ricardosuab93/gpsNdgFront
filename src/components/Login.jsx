import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsuarioByLogin } from '../Redux/reducers/UsuariosReducer/reducers.js'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { usuario } = useSelector((state) => state.usuarios)
  const isLoggedIn = usuario.length > 0

  const [login, setLogin] = useState({
    user: '',
    password: ''
  });


  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    });
  }

  const handleIngresar = (e) => {
    e.preventDefault();
    if(!login.user || !login.password){
      return alert("Completa los campos de login")
    }
    console.log(login.user)
    dispatch(getUsuarioByLogin(login.user))
  }

  console.log(usuario)

  return (
    <div>
      <form >
        <label >Usuario: </label>
        <input type='text' placeholder='Usuario' name='user' value={login.user} onChange={handleChange} />

        <label >Password: </label>
        <input type='password' name='password' value={login.password} onChange={handleChange} />

        <button onClick={handleIngresar} >Ingresar</button>
      </form>
      {
        isLoggedIn ? (
          navigate('/dashboard', {state: usuario})
        ):(
          <p>Ingresa tus credenciales</p>
        )
      }
    </div>
  )
}

export default Login
