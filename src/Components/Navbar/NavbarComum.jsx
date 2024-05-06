import Header from '../HeaderEstrutura/Header.jsx'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

import { useContext, useState } from 'react';
import { UsuariosContext } from '../../Context/UsuariosContext'

import { Button }from '@mui/material'

import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

function NavbarComum(){

    const { logout } = useContext(UsuariosContext)

    return(
        <Header>
            <nav className={styles.navbar}>
                <Link to='/'>Dasboard</Link>
                <Link to='/novoLocal'>Cadastrar</Link>
                <Link to='/lista'>Explorar</Link>
                <button onClick={() => logout(localStorage.getItem("idUsuario"))} className={styles.botaoLogout}>Logout</button>
            </nav>
        </Header>
    )
}

export default NavbarComum
