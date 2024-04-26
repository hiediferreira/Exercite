import NavbarInicio from '../../Components/Navbar/NavbarInicio'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Button }from '@mui/material'

import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

import { useForm } from 'react-hook-form'

import styles from './novoUsuario.module.css'

function NovoUsuario(){
    const {
        register,   //registra os campos de entrada do formulário
        handleSubmit, //lida com a submissão do formulário
        formState: {errors}  //lida com os erros de validação
    } = useForm()

    function testaForm(formValue){
        console.log(`Dados do formulário: ${formValue}`)  
    }

    return(
        <div>
            <NavbarInicio/>

            <div className={styles.containerNovoUsuario}>
                <h3>Preencha os campos abaixo para cadastrar-se!</h3>

                <form className={styles.formNovoUsuario} onSubmit={handleSubmit(testaForm)}>

                    <label htmlFor="nomeUsuario">Nome</label>
                    <input  type="text" placeholder="Informe o nome" 
                        {...register("nomeUsuario", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.nomeUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.nomeUsuario.message}</p>}

                    <label htmlFor="sexo">Sexo</label>
                    <select {...register("sexo")}>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                    </select>

                    <label htmlFor="cpf">CPF</label>
                    <input  type="text" placeholder="Informe o CPF (somente dígitos)" 
                        {...register("cpf", {
                            required: "Campo obrigatório!",
                            maxLength: {value:11, message:"Deve possuir no máximo 11 caracteres"}
                        })}                                                   
                    />
                    {errors?.cpf && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cpf.message}</p>}

                    <label htmlFor="dataNasc">Data de nascimento</label>
                    <input  type="date"
                        {...register("dataNasc", {
                            required: "Campo obrigatório!"
                        })}                                                   
                    />
                    {errors?.dataNasc && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.dataNasc.message}</p>}

                    <label htmlFor="email">E-mail</label>
                    <input  type="text" placeholder="Informe o e-mail" 
                        {...register("email", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.email && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.email.message}</p>}

                    <BotaoSenha />

                    <label htmlFor="cepUsuario">Nome</label>
                    <input  type="text" placeholder="Informe o CEP (somente dígitos)" 
                        {...register("cepUsuario", {
                            required: "Campo obrigatório!",
                            maxLength: {value:8, message:"Deve possuir no máximo 8 caracteres"}
                        })}                                                   
                    />
                    {errors?.cepUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cepUsuario.message}</p>}

                    <label htmlFor="ruaUsuario">Informe a rua</label>
                    <input  type="text" placeholder="Informe a rua" 
                        {...register("ruaUsuario", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.ruaUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.ruaUsuario.message}</p>}

                    <label htmlFor="bairroUsuario">Bairro</label>
                    <input  type="text" placeholder="Informe o bairro" 
                        {...register("bairroUsuario", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.bairroUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.bairroUsuario.message}</p>}

                    <label htmlFor="numeroUsuario">Número</label>
                    <input  type="text" placeholder="Informe o número" 
                        {...register("numeroUsuario", {
                            required: "Campo obrigatório!",
                        })}                                                   
                    />
                    {errors?.numeroUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.numeroUsuario.message}</p>}

                    <label htmlFor="complementoUsuario">Complemento</label>
                    <input  type="text" placeholder="Complemento (se houver)" 
                        {...register("complementoUsuario", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.complementoUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.complementoUsuario.message}</p>}

                    <label htmlFor="cidadeUsuario">Cidade</label>
                    <input  type="text" placeholder="Informe a cidade" 
                        {...register("cidadeUsuario", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.cidadeUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cidadeUsuario.message}</p>}

                    <label htmlFor="estadoUsuario">Estado</label>
                    <input  type="text" placeholder="Informe o estado" 
                        {...register("estadoUsuario", {
                            required: "Campo obrigatório!",
                        })}                                                   
                    />
                    {errors?.estadoUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.estadoUsuario.message}</p>}
                    
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