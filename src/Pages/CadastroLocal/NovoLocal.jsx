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

    const { cadastrarLocal } = useContext(UsuariosContext)

    function dadosForm(formValue){
        cadastrarLocal({...formValue})
    }

    // ViaCep
    const buscarCep = async () => {
        let cep = getValues("cepLocal")
        if(!!cep && cep.length === 8){ //se o cep for válido e tiver 8 digitos
            try{
                let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                let dados = await response.json()
                setValue('ruaLocal', dados.logradouro)
                setValue('bairroLocal', dados.bairro)
                setValue('cidadeLocal', dados.localidade)
                setValue('estadoLocal', dados.uf)
            } catch (err){
                console.log(err)
            }
        }
    }

    return(
        <div>
            <div className={styles.containerCadastroLugar}>
                <h3>Contribua com nossa comunidade, preenchendo os campos abaixo!</h3>

                <form className={styles.formCadastroLugar} onSubmit={handleSubmit(dadosForm)}>
                    <label htmlFor="nomeLocal" >Nome do local </label>
                    <input  type="text" placeholder="Informe o nome do local" name="nomeLocal" 
                        {...register("nomeLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                          
                    />
                    {errors?.nomeLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.nomeLocal.message}</p>}

                    <label htmlFor="latitude" >Latitude</label>
                    <input  type="text" placeholder="Informe a latitude" name="latitude" 
                        {...register("latitude", {
                            required: "Campo obrigatório!"
                        })}                                                   
                    />
                    {errors?.latitude && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.latitude.message}</p>}

                    <label htmlFor="longitude" >Longitude</label>
                    <input  type="text" placeholder="Informe a longitude" name="longitude" 
                        {...register("longitude", {
                            required: "Campo obrigatório!"
                        })}                                        
                    />
                    {errors?.longitude && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.longitude.message}</p>}

                    <label htmlFor="cepLocal" >CEP</label>
                    <input  type="text" placeholder="Informe o CEP (somente dígitos)" maxLength={8} name="cepLocal" 
                        {...register("cepLocal", {
                            required: "Campo obrigatório!",
                            minLength: {value:8, message:"Deve possuir 8 caracteres"},
                            onBlur: () => buscarCep()
                        })}                                         
                    />
                    {errors?.cepLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cepLocal.message}</p>}

                    <label htmlFor="ruaLocal" >Rua</label>
                    <input  type="text" placeholder="Informe a rua" name="ruaLocal" 
                        {...register("ruaLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                         
                    />
                    {errors?.ruaLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.ruaLocal.message}</p>}

                    <label htmlFor="bairroLocal" >Bairro</label>
                    <input  type="text" placeholder="Informe o bairro" name="bairroLocal" 
                        {...register("bairroLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                         
                    />
                    {errors?.bairroLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.bairroLocal.message}</p>}

                    <label htmlFor="numeroLocal" >Número</label>
                    <input  type="number" placeholder="Informe o número" min={0} name="numeroLocal"
                        {...register("numeroLocal", {
                            required: false
                        })}                                         
                    />
                    {errors?.numeroLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.numeroLocal.message}</p>}

                    <label htmlFor="complementoLocal" >Complemento</label>
                    <input  type="text" placeholder="Complemento (se houver)" name="complementoLocal"
                        {...register("complementoLocal", {
                            required: false,
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                       
                    />
                    {errors?.complementoLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.complementoLocal.message}</p>}

                    <label htmlFor="cidadeLocal" >Cidade</label>
                    <input  type="text" placeholder="Informe a cidade" name="cidadeLocal"
                        {...register("cidadeLocal", {
                            required: "Campo obrigatório!",
                            maxLength: {value:50, message:"Deve possuir no máximo 50 caracteres"}
                        })}                                          
                    />
                    {errors?.cidadeLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.cidadeLocal.message}</p>}

                    <label htmlFor="estadoLocal" >Estado</label>
                    <input  type="text" placeholder="Informe o estado" name="estadoLocal"
                        {...register("estadoLocal", {
                            required: "Campo obrigatório!"
                        })}                                          
                    />
                    {errors?.estadoLocal && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.estadoLocal.message}</p>}

                    <label htmlFor="descricao" >Breve descrição</label>
                    <textarea  type="text" placeholder="Descreva brevemente o lugar e a atividade física que pode ser praticada nesse local." name='descricao'
                        {...register("descricao", {
                            required: false,
                            maxLength: {value:100, message:"Máximo 100 caracteres"}
                        })}>                                         
                    </textarea>
                    {errors?.descricao && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/>{errors.descricao.message}</p>}

                    <p className={styles.pForm}>
                        Tipos de atividade física
                    </p>
                           
                    <div className={styles.gridLayout}>
                        <div>
                            <input type="checkbox" name="alongamento" value="Alongamento"
                                {...register("tipo")}
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Alongamento</label>
                        </div>
                        <div>
                            <input type="checkbox" name="caminhada"value="Caminhada"
                                {...register("tipo")}
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Caminhada</label>
                        </div>
                        <div>
                            <input type="checkbox" name="ciclismo"value="Ciclismo"
                                {...register("tipo")}                     
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Ciclismo</label>
                        </div>
                        <div>
                            <input type="checkbox" name="corrida" value="Corrida"
                                {...register("tipo")}
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Corrida</label>
                        </div>
                        <div>
                            <input type="checkbox" name="musculacao"value="Musculação"
                                {...register("tipo")}
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Musculacao</label>
                        </div>
                        <div>
                            <input type="checkbox" name="skate"value="Skate"
                                {...register("tipo")}
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Skate</label>
                        </div>
                        <div>
                            <input type="checkbox" name="surf" value="Surf"
                                {...register("tipo")}
                            />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Surf</label>
                        </div>
                        <div>
                            <input type="checkbox" name="yoga"value="Yoga"
                                {...register("tipo")}
                                />
                            <label htmlFor="tipo" className={styles.labelCheckbox}>Yoga</label>
                        </div>
                    </div>

                    <div className={styles.botaoCadastrar}>
                        <ThemeProvider theme={theme}>
                            <Button  
                                onClick={handleSubmit(dadosForm)}                         
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

export default NovoLocal