import App from '../App.jsx'
import Login from '../Pages/PaginaLogin/Login.jsx'
import NovoUsuario from '../Pages/PaginaNovoUsuario/NovoUsuario.jsx'
import PaginaErro from '../Pages/Erro/PaginaErro.jsx'
import Dashboard from '../Pages/Dashboard/Dashboard.jsx'
import Lista from '../Pages/Lista/Lista.jsx'

import { createBrowserRouter } from 'react-router-dom'

const rotas = createBrowserRouter ([
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
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/lista',
          element: <Lista />
        }
      ]
    }
])

export default rotas