import React from 'react'
import ReactDOM from 'react-dom'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <Login />,
    <GlobalStyles />
  </>,
  document.getElementById('root')
)