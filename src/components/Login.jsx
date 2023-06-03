import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUsuarioByLogin } from '../Redux/reducers/UsuariosReducer/reducers.js'

function validate(login) {
  let errors = {}

  if (!login.user) errors.user = 'Campo Necesario'
  else if (/[^A-Za-z]+/g.test(login.user))
    errors.user = 'Usuario solo puede tener letras'

  if (!login.password) errors.password = 'Campo Necesario'
  else if (/[^0-9]+/g.test(login.password))
    errors.password = 'Debe ser solo números'

  return errors
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { usuario } = useSelector((state) => state.usuarios)
  const isLoggedIn = usuario.length > 0

  const [login, setLogin] = useState({
    user: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...login,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleIngresar = (e) => {
    e.preventDefault()
    if (!login.user || !login.password) {
      return alert('Completa los campos de login')
    }
    console.log(login.user)
    dispatch(getUsuarioByLogin(login.user, login.password))
  }

  console.log(usuario)

  return (
    <div className='flex flex-col items-center justify-center m-60 bg-slate-300'>
      <form className='flex flex-col rounded-lg'>
        <div className='m-2'>
          <label className='text-center text-2xl text-slate-900'>
            Usuario:{' '}
          </label>
          <input
            type='text'
            placeholder='calcalde'
            name='user'
            value={login.user}
            onChange={handleChange}
            className='text-center text-2xl border-teal-500 border-solid rounded-lg'
          />
          {errors.user && <p className='text-red-600'>{errors.user}</p>}
        </div>

        <div className='m-2'>
          <label className='text-2xl text-slate-900'>Password: </label>
          <input
            type='password'
            placeholder='••••••••'
            name='password'
            value={login.password}
            onChange={handleChange}
            className='text-center text-2xl border-teal-500 hover:border-solid rounded-lg'
          />
          {errors.password && <p className='text-red-600'>{errors.password}</p>}
        </div>
        <div className=' flex flex-col'>
          <button
            className='text-center text-2xl border-solid border-teal-500 hover:text-red-500'
            onClick={handleIngresar}
            disabled={Object.keys(errors).length === 0 ? false : true}
          >
            Ingresar
          </button>
        </div>
      </form>
      {isLoggedIn ? (
        navigate('/dashboard', { state: usuario })
      ) : (
        <p className='text-black'>POR FAVOR INGRESA TUS CREDENCIALES VALIDAS</p>
      )}
    </div>
  )
}

export default Login
