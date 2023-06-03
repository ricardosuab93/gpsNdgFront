import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './src/Redux/index'

import './src/index.css'

import App from './src/App'

ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App className='justify-center items-center'/>
    </Provider>
  </BrowserRouter>
)
