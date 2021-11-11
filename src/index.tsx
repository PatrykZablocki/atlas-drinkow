import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

ReactDOM.render(
  <Auth0Provider
    domain="dev-yhq06ztc.us.auth0.com"
    clientId="C1HIv3qKRh8OIADyix4nAgKhwNTtQxNT"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
