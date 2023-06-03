import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUsuarioByLogin } from '../Redux/reducers/UsuariosReducer/reducers.js'
import ndg from '../images/ndg.png'

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
    // console.log(login.user)
    dispatch(getUsuarioByLogin(login.user, login.password))
  }

  // console.log(usuario)

  return (
    <div className='flex flex-col items-center justify-center bg-white rounded-2xl'>
      <img src={ndg} alt='logo' />
      <h3 className='text-2xl font-semibold text-gray-700 mt-4 mb-2'>
        Actualizacion GPS de Clientes
      </h3>
      <form className='m-2'>
        <div className=''>
          <label className='text-lg font-medium'>Usuario</label>
          <input
            type='text'
            placeholder='usuario'
            name='user'
            value={login.user}
            onChange={handleChange}
            className='w-full border-2 rounded-lg text-center p-1 mt-1 bg-transparent'
          />
          {errors.user && <p className='text-red-600'>{errors.user}</p>}
        </div>

        <div className=''>
          <label className='text-lg font-medium'>Password</label>
          <input
            type='password'
            placeholder='••••••••'
            name='password'
            value={login.password}
            onChange={handleChange}
            className='w-full border-2 rounded-lg text-center p-1 mt-1 bg-transparent'
          />
          {errors.password && <p className='text-red-600'>{errors.password}</p>}
        </div>
        <div className='m-2 flex justify-center items-center'>
          <button
            className='bg-green-600 disabled:bg-gray-600 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out mt-2 pt-1 pb-2 pl-5 pr-5 rounded-lg'
            onClick={handleIngresar}
            disabled={Object.keys(errors).length !== 0 || !login.user || !login.password  ? true : false  }
            act
          >
            Ingresar
          </button>
        </div>
      </form>
      {isLoggedIn ? (
        navigate('/dashboard', { state: usuario })
      ) : (
        <p className='text-black'>POR FAVOR INGRESA CREDENCIALES VALIDAS</p>
      )}
    </div>
  )
}

export default Login
