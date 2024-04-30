import NavbarInicio from '../../Components/Navbar/NavbarInicio'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Button }from '@mui/material'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';

import styles from './novoUsuario.module.css'

function NovoUsuario(){
    //Função para o input senha com opção de mostrar ou ocultar a senha
    //toda vez que clicar o botão recebe o estado oposto!
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show); 

    //Formulário
    const {
        register,      //registra os campos de entrada do formulário
        handleSubmit,  //lida com a submissão do formulário
        setValue,      //qual nome do input que desejo setar e qual valor vou passar para ele
        getValues,     //qual nome do input que quero pegar os valores naquele momento
        formState: {errors}  //lida com os erros de validação
    } = useForm()

    const [novoUsuario, setNovoUsuario] = useState({
        nomeUsuario:"",
        sexo: "",
        cpf: "",
        dataNasc: "",
        email: "",
        senha: "",
        cepUsuario: "",
        ruaUsuario: "",
        numeroUsuario: "",
        complementoUsuario: "",
        bairroUsuario: "",
        cidadeUsuario: "",
        estadoUsuario: "",
        usuarioAtivo: "false"
    })

    function testaForm(formValue){       
        console.log('formvalue',formValue)   //apenas testando se os valores foram recebidos corretamente

        setNovoUsuario((d) => ({...d, ...formValue}))

        console.log('novoUsuario', novoUsuario) 
        
        cadastrarUsuario(novoUsuario)
    }

    function cadastrarUsuario(novoUsuario){
        fetch("http://localhost:3000/usuarios", {
            method: "POST",  //adicionar usuário à API
            body: JSON.stringify(novoUsuario),                    
            headers: {
                'Contente-Type': 'application/json'
            },
        })
        .then(() => console.log('OK'))
        .catch((erro) => console.log(erro))
    }


    //ViaCep
    const buscarCep = async () => {
        let cep = getValues("cepUsuario")
        if(!!cep && cep.length === 8){ //se o cep for válido e tiver 8 digitos
            try{
                let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                let dados = await response.json()
                setValue('ruaUsuario', dados.logradouro)
                setValue('bairroUsuario', dados.bairro)
                setValue('cidadeUsuario', dados.localidade)
                setValue('estadoUsuario', dados.uf)
            } catch (err){
                console.log(err)
            }
        }
    }


    ///////////////////////////////////////////////////////
    /*
        usuarios é a lista que contém os usuários cadastrados;
        setUsuarios nos garente que os dados estão atualizados, pois, 
        ele nos mostra o estado atual da variável usuarios 
    */
    // const [usuarios, setUsuarios] = useState([])  
    // useEffect(() => {
    //     fetch("http://localhost:3000/usuarios")
    //     .then(response => response.json())
    //     .then(data => setUsuarios(data))
    //     .catch(error => console.log(error))
    // }, [])


 

    return(
        <div>
            <NavbarInicio/>

            <div className={styles.containerNovoUsuario}>
                <h3>Preencha os campos abaixo para cadastrar-se!</h3>

                <form className={styles.formNovoUsuario} onSubmit={handleSubmit(testaForm)}>

                    <label htmlFor="nomeUsuario">Nome</label>
                    <input  type="text" placeholder="Informe o nome" name="nomeUsuario"
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
                    <input  type="text" placeholder="Informe o CPF (somente dígitos)" maxLength={11} name="cpf"
                        {...register("cpf", {
                            required: "Campo obrigatório!",
                            minLength: {value:11, message:"Deve possuir 11 caracteres"}
                        })}                                                   
                    />
                    {errors?.cpf && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cpf.message}</p>}

                    <label htmlFor="dataNasc">Data de nascimento</label>
                    <input  type="date" name="dataNasc"
                        {...register("dataNasc", {
                            required: "Campo obrigatório!"
                        })}                                                   
                    />
                    {errors?.dataNasc && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.dataNasc.message}</p>}

                    <label htmlFor="email">E-mail</label>
                    <input  type="email" placeholder="Informe o e-mail" name="email"
                        {...register("email", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.email && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.email.message}</p>}

                    <label htmlFor="senha">Senha</label>
                    <div className={styles.containerSenha}>
                        <input type={showPassword ? 'text' : 'password'}
                        placeholder="Informe uma senha" name="senha"
                            {...register("senha", {
                                required: "Campo obrigatório!",
                                minLength: {value:6, message:"Deve possuir no mínimo 6"}
                            })}
                        />
                        <div onClick={handleClickShowPassword} className={styles.iconeSenha}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </div>
                    </div>
                    {errors?.senha && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.senha.message}</p>}

                    <label htmlFor="cepUsuario">CEP</label>
                    <input  type="text" placeholder="Informe o CEP (somente dígitos)" maxLength={8} name="cepUsuario"
                        {...register("cepUsuario", {
                            required: "Campo obrigatório!",
                            minLength: {value:8, message:"Deve possuir 8 caracteres"},
                            onBlur: () => buscarCep()
                        })}                                                   
                    />
                    {errors?.cepUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cepUsuario.message}</p>}

                    <label htmlFor="ruaUsuario">Rua</label>
                    <input  type="text" placeholder="Informe a rua" name="ruaUsuario"
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
                    <input  type="number" placeholder="Informe o número" min={0}
                        {...register("numeroUsuario", {
                            required: "Campo obrigatório!",
                        })}                                                   
                    />
                    {errors?.numeroUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.numeroUsuario.message}</p>}

                    <label htmlFor="complementoUsuario">Complemento</label>
                    <input  type="text" placeholder="Complemento (se houver)" 
                        {...register("complementoUsuario", {
                            required: false,
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
                    
                    <div className={styles.botaoCadastrar}>
                        <ThemeProvider theme={theme}>
                            <Button                                
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{"my":2}}>
                                    Cadastrar
                            </Button>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NovoUsuario