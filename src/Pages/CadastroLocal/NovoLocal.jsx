import styles from './novoLocal.module.css'

import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Button }from '@mui/material'

import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';

import { UsuariosContext } from '../../Context/UsuariosContext'

function NovoLocal(){
    //Formulário
    const {
        register,      //registra os campos de entrada do formulário
        handleSubmit,  //lida com a submissão do formulário
        setValue,      //qual nome do input que desejo setar e qual valor vou passar para ele
        getValues,     //qual nome do input que quero pegar os valores naquele momento
        formState: {errors}  //lida com os erros de validação
    } = useForm()

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


    return(
        <div>
            <form>
                <label htmlFor="nomeExercicio">Nome da atividade física</label>
                <input  type="text" placeholder="Informe o nome" name="nomeExercicio"
                    {...register("nomeExercicio", {
                        required: "Campo obrigatório!",
                        maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                    })}                                                   
                />
                {errors?.nomeExercicio && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.nomeExercicio.message}</p>}

                <label htmlFor="latitude">Latitude</label>
                <input  type="text" placeholder="Informe a latitude" name="latitude"
                    {...register("latitude", {
                        required: "Campo obrigatório!",
                        minLength: {value:19, message:"Deve possuir 19 caracteres"}
                    })}                                                   
                />
                {errors?.latitude && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.latitude.message}</p>}

                <label htmlFor="longitude">Longitude</label>
                <input  type="text" placeholder="Informe a longitude" name="longitude"
                    {...register("longitude", {
                        required: "Campo obrigatório!",
                        minLength: {value:19, message:"Deve possuir 19 caracteres"}
                    })}                                                   
                />
                {errors?.longitude && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.longitude.message}</p>}

                <label htmlFor="cepLocal">CEP</label>
                    <input  type="text" placeholder="Informe o CEP (somente dígitos)" maxLength={8} name="cepLocal"
                        {...register("cepLocal", {
                            required: "Campo obrigatório!",
                            minLength: {value:8, message:"Deve possuir 8 caracteres"},
                            onBlur: () => buscarCep()
                        })}                                                   
                    />
                    {errors?.cepLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cepLocal.message}</p>}

                    <label htmlFor="ruaLocal">Rua</label>
                    <input  type="text" placeholder="Informe a rua" name="ruaLocal"
                        {...register("ruaLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.ruaLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.ruaLocal.message}</p>}
Local
                    <label htmlFor="bairroLocal">Bairro</label>
                    <input  type="text" placeholder="Informe o bairro" 
                        {...register("bairroLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.bairroLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.bairroLocal.message}</p>}

                    <label htmlFor="numeroLocal">Número</label>
                    <input  type="number" placeholder="Informe o número" min={0}
                        {...register("numeroLocal", {
                            required: "Campo obrigatório!",
                        })}                                                   
                    />
                    {errors?.numeroLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.numeroLocal.message}</p>}

                    <label htmlFor="complementoLocal">Complemento</label>
                    <input  type="text" placeholder="Complemento (se houver)" 
                        {...register("complementoLocal", {
                            required: false,
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.complementoLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.complementoLocal.message}</p>}

                    <label htmlFor="cidadeLocal">Cidade</label>
                    <input  type="text" placeholder="Informe a cidade" 
                        {...register("cidadeLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                                   
                    />
                    {errors?.cidadeLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cidadeLocal.message}</p>}

                    <label htmlFor="estadoLocal">Estado</label>
                    <input  type="text" placeholder="Informe o estado" 
                        {...register("estadoLocal", {
                            required: "Campo obrigatório!"
                        })}                                                   
                    />
                    {errors?.estadoLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.estadoLocal.message}</p>}

                    <label htmlFor="descricao">Breve descrição</label>
                    <textarea  type="text" placeholder="Descreva brevemente o lugar e a atividade física que pode ser praticada nesse local" name='descricao'
                        {...register("descricao", {
                            required: "Campo obrigatório!",
                            maxLength: {value:100, message:"Máximo 100 caracteres"}
                        })}>                                             
                    </textarea>
                    {errors?.descricao && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.descricao.message}</p>}

                    <label htmlFor="tipo">Tipos de atividade física</label>

                    <label htmlFor="alongamento">Alongamento</label>
                    <input type="checkbox" name='alongamento' value={true}
                        {...register("alongamento")}
                    />

                    <label htmlFor="caminhada">Caminhada</label>
                    <input type="checkbox" name='caminhada' value={true}
                        {...register("caminhada")}
                    />

                    <label htmlFor="ciclismo">Ciclismo</label>
                    <input type="checkbox" name='ciclismo' value={true}
                        {...register("ciclismo")}
                    />  

                    <label htmlFor="Corrida">Corridao</label>
                    <input type="checkbox" name='Corrida' value={true}
                        {...register("Corrida")}
                    />   

                    <label htmlFor="musculacao">Musculacao</label>
                    <input type="checkbox" name='musculacao' value={true}
                        {...register("musculacao")}
                    />    

                    <label htmlFor="skate">Skate</label>
                    <input type="checkbox" name='skatef' value={true}
                        {...register("skate")}
                    /> 

                    <label htmlFor="surf">Surf</label>
                    <input type="checkbox" name='surf' value={true}
                        {...register("surf")}
                    />

                    <label htmlFor="yoga">Yoga</label>
                    <input type="checkbox" name='yoga' value={true}
                        {...register("yoga")}
                    />
            </form>
        </div>
    )
    
}

export default NovoLocal