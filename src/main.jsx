import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import rotas from './Routers/router.jsx'

import { RouterProvider} from 'react-router-dom'

import { UsuariosContextProvider } from './Context/UsuariosContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UsuariosContextProvider>
    <RouterProvider router={rotas}>      
    </RouterProvider>
  </UsuariosContextProvider>

)
