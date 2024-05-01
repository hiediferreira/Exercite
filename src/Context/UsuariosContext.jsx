import { useState, useEffect, createContext } from "react";

export const UsuariosContext = createContext()    //Cria o contexto
export const UsuariosContextProvider = ({ children }) => {  //Cria o provider

    function goLogin(){
        window.location.href = "/login"  //tela de login
    }

    //// CADASTRAR ////
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

    //// MOSTRAR ////
    /*
        usuarios é a lista que contém os usuários cadastrados;
        setUsuarios nos garente que os dados estão atualizados, pois, 
        ele nos mostra o estado atual da variável usuarios 
    */
    const [usuarios, setUsuarios] = useState([])    
    function lerUsuarios(){ 
        fetch("http://localhost:3000/usuarios")    //GET
        .then((response) => response.json())
        .then((dados) => setUsuarios(dados))
        .catch((erro) => console.log(erro))
    }

    return(
        <UsuariosContext.Provider value={{ cadastrarUsuario, usuarios, lerUsuarios }}>
            { children }
        </UsuariosContext.Provider>
    )
}