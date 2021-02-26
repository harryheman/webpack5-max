import React, { StrictMode } from 'react'
import { render } from 'react-dom'
// components
import { App } from './App'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'

console.log(process.env.SECRET)

import logo from './assets/logo.png'

const imgStyles = {
  width: '100px',
  display: 'block',
  margin: '0.5rem auto 0'
}

const rootEl = document.getElementById('root')
render(
  <StrictMode>
    <img src={logo} alt='#' style={imgStyles} />
    <App />
  </StrictMode>,
  rootEl
)
