import Header from '../HeaderEstrutura/Header.jsx'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function NavbarInicio(){
    return(
        <Header>
            <nav className={styles.navbar}>
                <Link to='/login'>Login</Link>
                <Link to='/novoUsuario'>Cadastrar</Link>
            </nav>
        </Header>
    )
}

export default NavbarInicio