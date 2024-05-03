import styles from "./header.module.css"

/*Header contém a estrutura da barra de navegação:
    Altura;
    Cor de fundo;
    Logo.

    A props.children vai permitir que eu tenha 2 barras de navegação diferentes. 
    Criei essa estrutura apenas para fixar a estilização e o logo.
    Como vou ter 2 modelos de navbar basta eu chamar essa estrutura e estilizar conforme a barra de navegação desejada.
*/

function Header(props){
    return(
        <header className={styles.header}>
            <div className={styles.headerLogo}>              
                <img src="./src/assets/Logo/logo.png" alt="logotipo" width={'40px'}  />
                <h2>Exercite</h2>
            </div>
            {props.children}
        </header>
    )
}

export default Header