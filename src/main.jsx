import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import routers from './Routers/router.jsx'

import { RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>  
    
  </RouterProvider>
)
