import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { buscaClientexNombre } from '../Redux/reducers/ClientesReducer/reducers.js'

function SearchBar() {
  const dispatch = useDispatch()

  const [nombre, setNombre] = useState('')

  const handleSearchChange = (e) => {
    e.preventDefault()
    setNombre(e.target.value)
    // console.log(nombre)
  }
  useEffect(() => {
    dispatch(buscaClientexNombre(nombre))
  }, [nombre]);

  return (
    <div className='flex justify-center items-center'>
      <input className='justify-center items-center text-center p-1 m-1 rounded-lg w-80 border-2 border-sky-600 border-solid' type='text' value={nombre} placeholder='Buscar ...' onChange={handleSearchChange}/>
    </div>
  )
}

export default SearchBar
