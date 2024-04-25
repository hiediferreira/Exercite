import NavbarInicio from "../../Components/Navbar/NavbarInicio"
import { Link } from "react-router-dom"

function Login(){   

    return(
        <div>
            <NavbarInicio />

            <div>
                <h1>Seja bem vinda(o) ao Exercite!</h1>
                <img src="./src/assets/Logo/logo2.png" alt="" width={'80px'}  />
                <form>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder="Digite o e-mail"/>
                    <br />
                    <label htmlFor="senha">Senha</label><br />
                    <input type="password" placeholder="Digite a senha"/>
                    <br />
                    <button type="submit">Login</button>               
                </form>
                <p>Não possui uma conta? <Link to='/novoUsuario'>Cadastre-se</Link></p>
            </div>
        </div>
    )
}

export default Login