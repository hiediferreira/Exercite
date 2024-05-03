import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

import CardLista from '../../Components/CardLista/CardLista'

function Lista(){
    const { lerUsuarios, usuarios, lerLocais, locais, apagarLocal } = useContext(UsuariosContext)
    useEffect(() => {lerUsuarios(), lerLocais()}, []) //Quando carrega a página, mostra os lugares cadastrados atualizados.

    function botaoEditar(){
        alert('Editar')
    }

    function excluir(id){
        apagarLocal(id)
    }

    return(
        <div>
            {/* <h2>Usuarios cadastrados</h2>
            {!!usuarios && usuarios.map(user => (
            <h3 key={user.id}>{user.nomeUsuario} === {user.cidadeUsuario}/{user.estadoUsuario}</h3>
            ))} */}

            {!!locais && locais.map(dados => (
                <CardLista dadosLista={dados} key={dados.id} 
                onClickEditar={botaoEditar} 
                onClickExcluir={() => excluir(dados.id)}
                />
            ))}
        </div>
    )
}

export default Lista