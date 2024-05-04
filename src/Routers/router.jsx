import App from '../App.jsx'
import Login from '../Pages/PaginaLogin/Login.jsx'
import NovoUsuario from '../Pages/PaginaNovoUsuario/NovoUsuario.jsx'
import PaginaErro from '../Pages/Erro/PaginaErro.jsx'
import Dashboard from '../Pages/Dashboard/Dashboard.jsx'
import Lista from '../Pages/Lista/Lista.jsx'
import NovoLocal from '../Pages/CadastroLocal/NovoLocal.jsx'
import Edicao from '../Pages/Edicao/Edicao.jsx'

import { createBrowserRouter, Navigate } from 'react-router-dom'

let usuarioAutenticado = JSON.parse(localStorage.getItem("usuarioAutenticado")) || false
//Vou procurar no localStorage se o usuário está autenticado ou não.
// Se não estiver, usuarioAutenticado será falso.

const PrivateRoute = ({ children }) => {
  return usuarioAutenticado ? children : <Navigate to="/login" />  
}
//Se o usuário estiver autenticado, será mostrado a página filho
//Caso contrário, o usuário será redirecionado para a tela de login

const rotas = createBrowserRouter ([
  {
    path: "/login",
    element: <Login />,
    errorElement: <PaginaErro />,
  },
  {
    path: "/novoUsuario",
    element: <NovoUsuario />,
    errorElement: <PaginaErro />,
  },
  {
    path: "/",
    element: (<PrivateRoute> <App /> </PrivateRoute>),
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/lista",
        element: <Lista />
      },
      {
        path: "/novoLocal",
        element: <NovoLocal />
      },
      {
        path: "editar/:id",
        element: <Edicao />
      }
    ]
  }
])

export default rotas