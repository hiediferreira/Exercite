import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

import CardLista from '../../Components/CardLista/CardLista'

function Lista(){
    const { lerUsuarios, usuarios, lerLocais, locais } = useContext(UsuariosContext)
    useEffect(() => {lerUsuarios(), lerLocais()}, [])

    return(
        <div>
            <h1>Listagem</h1>
            {/* <h2>Usuarios cadastrados</h2>
            {!!usuarios && usuarios.map(user => (
            <h3 key={user.id}>{user.nomeUsuario} === {user.cidadeUsuario}/{user.estadoUsuario}</h3>
            ))} */}

            {!!locais && locais.map(dados => (
                <CardLista dadosLista={dados} key={dados.id}/>
            ))}
        </div>
    )
}

export default Lista