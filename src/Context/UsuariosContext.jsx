import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UsuariosContext = createContext()    //Cria o contexto
export const UsuariosContextProvider = ({ children }) => {  //Cria o provider

    //Navigate
    const navigate = useNavigate()
    function goLogin(){
        navigate('/')   //tela de login
    }

    function cadastrarUsuario(novoUsuario){
        fetch("http://localhost:3000/usuarios", {
            method: 'POST',  //adicionar usuário à API
            body: JSON.stringify(novoUsuario),            //converte para Json        
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            goLogin(),  //redirecionar usuário para tela de login
            console.log('Usuário cadastrado com sucesso!')
        })
        .catch(() => console.log('erro'))
    }

    return(
        <UsuariosContext.Provider value={{ cadastrarUsuario }}>
            { children }
        </UsuariosContext.Provider>
    )
}