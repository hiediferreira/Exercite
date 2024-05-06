import styles from './erro.module.css'
function PaginaErro(){
    
    return(
        <div className={styles.containerErro}>
            <img src="/Logo/logo.png" alt="logo" />
            <h1 className={styles.logo}>Exercite</h1>
            <h1 className={styles.erro}>Ops! Algo deu errado!</h1>
        </div>
    )

}

export default PaginaErro