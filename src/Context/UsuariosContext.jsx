import { useState, useEffect, createContext } from "react";

export const UsuariosContext = createContext()    //Cria o contexto
export const UsuariosContextProvider = ({ children }) => {  //Cria o provider

    /////////////   REFERENTE AOS USUÁRIOS   /////////////
    ///// Função para redirecinar o usuário paratela de login /////
    function goLogin(){
        window.location.href = "/login"  
    }

    const usuarioLogado = async (user, id) =>{
        user.usuarioAtivo = true

        fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            console.log('Editado com sucesso!')
        })
        .catch(() => console.log('Erro ao editar!'))
    }

    ///// Login /////
    async function login(email, senha){
        try{
            const response = await fetch("http://localhost:3000/usuarios")
            const dados = await response.json()

            let usuarioExiste = false      //Até então, usuário não existe

            dados.map(user => {
                if(user.email == email){   //Existe um usuário com esse e-mail??
                    usuarioExiste = true   //Se sim, agora o usuário existe e vamos verificar a senha
                    
                    if(user.senha == senha){ //se a senha bater
                        
                        localStorage.setItem("usuarioAutenticado", true)  //Salvar no localStorage
                        localStorage.setItem("idUsuario", user.id) //Salvar no localStorage o id do usuario
                        localStorage.setItem("nomeUsuario", user.nomeUsuario) //Salvar no localStorage o nome do usuario para eu pegar quando mostrar os cards

                        usuarioLogado(user, user.id)

                        window.location.href = "/"  //Redirecionamos usuário para dashboard
                        return
                    }
                    alert('Verifique os dados!')  //Não vamos falar que a senha está incorreta!
                    return
                }
            })
            if(!usuarioExiste){ //se nenhuma informação bateu
                alert('Usuário não encontrado!')
            }
        } catch {
            alert('Erro!')
        }
    }

    const usuarioLogout = async (user, id) =>{
        user.usuarioAtivo = false

        fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            console.log('Editado com sucesso!')
        })
        .catch(() => console.log('Erro ao editar!'))
    }

    ///// Logout /////
    async function logout(id){
        try{
            debugger
            const response = await fetch(`http://localhost:3000/usuarios/${id}`)
            const dados = await response.json()

            usuarioLogout(dados, id)
            goLogin()
            localStorage.clear()

        } catch {
            alert('Erro!')
        }
    }

    //// CADASTRAR ////
    function cadastrarUsuario(novoUsuario){
        novoUsuario.usuarioAtivo = false //Inicia com o usuário inativo

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

    /////////////   REFERENTE AOS LOCAIS   /////////////
     ///// Função para redirecinar o usuário para dashboard /////
    function goHome(){
        window.location.href = "/"  
    }

    //// CADASTRAR ////
    function cadastrarLocal(novoLocal){
        novoLocal.idUsuario = localStorage.getItem("nomeUsuario")
        //Passando para idUsuario o nome do usuário que está cadastrando o local!
        fetch("http://localhost:3000/locais", {
            method: 'POST',  //adicionar lugar à API
            body: JSON.stringify(novoLocal),   //converte para Json        
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            goHome(),  //redirecionar usuário para dashboard
            console.log('Usuário cadastrado com sucesso!')
        })
        .catch(() => console.log('erro'))
    }

    //// MOSTRAR ////
    //locais é a lista que contém os usuários cadastrados;     
    const [locais, setLocais] = useState([])    
    function lerLocais(){ 
        fetch("http://localhost:3000/locais")    //GET
        .then((response) => response.json())
        .then((dados) => setLocais(dados))
        .catch((erro) => console.log(erro))
    }

    //// APAGAR ////
    function apagarLocal(id){
        fetch(`http://localhost:3000/locais/${id}`, {
            method: 'DELETE'
        })
        .then(() => lerLocais())
        .catch(() => console.log('erro'))
    }

    return(
        <UsuariosContext.Provider value={{ usuarios, cadastrarUsuario, lerUsuarios, login, logout, 
        locais, cadastrarLocal, lerLocais, apagarLocal }}>
            { children }
        </UsuariosContext.Provider>
    )
}