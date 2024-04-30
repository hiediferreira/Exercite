import { createContext } from 'react'

export const UsuariosContext = createContext()   //1º criar contexto
export const UsuariosContextProvider = ({children}) => { //2º criar provider
    // const [users, setUsers] = useState([])    //minha lista de usuários

    // async function cadastrarUsuario(novoUsuario){
    //     try{
    //         const response = await fetch("http://localhost:3000/usuarios", {
    //             method: "POST",  //adicionar usuário à API
    //             headers: {
    //                 'Contente-Type': 'application/json'
    //             },
    //             body: JSON.stringify(novoUsuario)
    //         })
    //         console.log('OK')
    //     }catch{erro => console.log(erro)}
    // }
}

//cadastrarUsuario é a função que vai adicionar à API cada novo usuário cadastrado
//user contém a minha lista de usuários cadastrados

return(
    <UsuariosContext.Provider
        value={{user, cadastrarUsuario}}>

    </UsuariosContext.Provider>
)

export default UsuariosContextProvider