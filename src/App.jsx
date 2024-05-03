import './App.css'
import { Outlet } from 'react-router-dom'
import NavbarComum from './Components/Navbar/NavbarComum.jsx'

//NavbarComum é o que vai aparecer nas rotas privadas, porisso, esta sendo importado no App.	
//NavbarInicial aparece somente na tela de login e tela de cadastro! São importadas na própria página.

function App() {
  return (
    <>
      <NavbarComum />  
      <Outlet /> 
    </>
  )
}

export default App
