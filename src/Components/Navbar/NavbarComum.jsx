import Header from '../HeaderEstrutura/Header.jsx'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function NavbarComum(){
    return(
        <Header>
            <nav className={styles.navbar}>
                <Link to='/lista'>Lista</Link>
                <Link to='/lista'>Lista</Link>
                <Link to='/'>Dasboard</Link>
            </nav>
        </Header>
    )
}

export default NavbarComum
