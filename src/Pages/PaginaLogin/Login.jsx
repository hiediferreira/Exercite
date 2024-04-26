import NavbarInicio from "../../Components/Navbar/NavbarInicio"
import { Link } from "react-router-dom"
import { TextField, Button } from '@mui/material'

import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

import styles from './login.module.css'

function Login(){   

    return(
        <div>
            <NavbarInicio />

            <div className={styles.containerLogin}>
                <h1 className={styles.center}>Seja bem vinda(o) ao</h1>
                <div className={styles.logoLogin}>
                    <h2>Exercite</h2>
                    <img src="./src/assets/Logo/logo2.png" alt="" width={"80px"} />
                </div>

                <form className={styles.formLogin}>
                    <TextField 
                        sx={{width: 243, "my":2}}
                        type="email"
                        variant="standard"
                        color="success"                            
                        label="E-mail" 
                        placeholder="Digite o e-mail"
                    />
                    
                    <ThemeProvider theme={theme}>
                        <Button 
                            type="submit" 
                            variant="contained"
                            color="primary"
                            sx={{"my":2}}>
                                Login
                        </Button>  
                    </ThemeProvider>      
                </form>

                <p className={styles.center}  >Não possui uma conta? <Link to='/novoUsuario' className={styles.linkLogin}>Cadastre-se</Link></p>
            </div>
        </div>
    )
}

export default Login