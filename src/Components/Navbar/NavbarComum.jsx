import Header from '../HeaderEstrutura/Header.jsx'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function NavbarComum(){
    return(
        <Header>
            <nav className={styles.navbar}>
                <Link to='/'>Dasboard</Link>
                <Link to='/novoLocal'>Cadastrar</Link>
                <Link to='/lista'>Explorar</Link>
                <Link to='/'>Logout</Link>
            </nav>
        </Header>
    )
}

export default NavbarComum
