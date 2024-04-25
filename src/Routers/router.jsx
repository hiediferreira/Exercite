import App from '../App.jsx'
import Login from '../Pages/PaginaLogin/Login.jsx'
import NovoUsuario from '../Pages/PaginaNovoUsuario/NovoUsuario.jsx'
import PaginaErro from '../Pages/Erro/PaginaErro.jsx'

import { createBrowserRouter } from 'react-router-dom'

const routers = createBrowserRouter ([
    {
      path:'/',
      element: <App />,
      errorElement: <PaginaErro />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/novoUsuario',
          element: <NovoUsuario />
        }
      ]
    }
])

export default routers