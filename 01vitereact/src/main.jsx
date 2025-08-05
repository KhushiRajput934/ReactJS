import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const ReactElement = React.createElement(
//   'a', //tagname
//   {herf: 'https://google.com', target: '_blank'}, //object -> in which the props are declared 
//   'Click me to visit google' // text
// )

createRoot(document.getElementById('root')).render(
<App />
)
