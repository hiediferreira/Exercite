import './App.css'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>      
      <h1>Iniciando o projeto final do módulo 1!</h1>
      <Outlet />
    </div>
  )
}

export default App
