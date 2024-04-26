import NavbarInicio from '../../Components/Navbar/NavbarInicio'
import BotaoSenha from '../../Components/atoms/BotaoSenha/BotaoSenha'
import { TextField, Button, MenuItem }from '@mui/material'

import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

import styles from './novoUsuario.module.css'

function NovoUsuario(){
    
    return(
        <div>
            <NavbarInicio/>

            <div className={styles.containerNovoUsuario}>
                <h3>Preencha os campos abaixo para cadastrar-se!</h3>
                <form className={styles.formNovoUsuario}>
                    <TextField 
                        sx={{width: 243, "mb":2, "mt":1}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="Nome" 
                        placeholder="Digite o nome"
                    />

                    <TextField 
                        select
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"

                        label="Sexo" >

                        <MenuItem value={"Feminino"}>
                            Feminino              
                        </MenuItem>
                        <MenuItem value={"Masculino"}>
                            Masculino              
                        </MenuItem>
                    </TextField>

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="CPF (somente dígitos)" 
                        placeholder="Digite o CPF"
                    />

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="date"
                        label="Data de nascimento" 
                    />

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="email"
                        label="E-mail" 
                        placeholder="Digite o e-mail"
                    />

                    <BotaoSenha />

                    <TextField 
                        sx={{width: 243, "my":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="CEP (somente dígitos)" 
                        placeholder="Digite o CEP"
                    />

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="Logradouro" 
                        placeholder="Digite o logradouro"
                    />  

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="bairro" 
                        placeholder="Digite o bairro"
                    />

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="number"
                        label="Número" 
                        placeholder="Digite o número"
                    />      

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="Complemento" 
                        placeholder="Digite o complemento se houver"
                    />

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="Cidade" 
                        placeholder="Digite a cidade"
                    />

                    <TextField 
                        sx={{width: 243, "mb":2}}
                        variant="standard"
                        color="success"     
                        
                        type="text"
                        label="Estado" 
                        placeholder="Digite o estado"
                    />

                    <ThemeProvider theme={theme}>
                        <Button 
                            type="submit" 
                            variant="contained"
                            color="primary"
                            sx={{"my":2}}>
                                Cadastrar
                        </Button>  
                    </ThemeProvider>
                </form>
            </div>
        </div>
    )
}

export default NovoUsuario