// Import of a JavaScript module
// Импорт модуля JavaScript
import example from './js/example'

// Import of a SVG
// Импорт SVG
import webpackLogo from './images/webpack-logo.svg'

// Import of styles
// Импорт стилей
import './styles/index.scss'

// Appending to the DOM
// Добавление в DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.innerHTML = example

const app = document.querySelector('#root')
app.append(logo, heading)
