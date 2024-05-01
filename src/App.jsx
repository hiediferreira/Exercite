import './App.css'

import { Outlet } from 'react-router-dom'
import { UsuariosContextProvider } from './Context/UsuariosContext'

function App() {
  return (
    <UsuariosContextProvider>
     
      <Outlet />  

    </UsuariosContextProvider>
  )
}

export default App
