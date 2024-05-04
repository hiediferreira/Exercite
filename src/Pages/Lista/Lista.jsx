import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

import CardLista from '../../Components/CardLista/CardLista'

function Lista(){
    const { usuarios, lerUsuarios, locais, lerLocais, apagarLocal } = useContext(UsuariosContext)
    useEffect(() => {lerUsuarios(), lerLocais()}, []) //Quando carrega a página, mostra os lugares cadastrados atualizados.

    function editar(id){
        debugger
        window.location.href = `/editar/${id}` 
    }

    function excluir(id){
        apagarLocal(id)
    }

    return(
        <div>
            {/* <h2>Usuarios cadastrados</h2>*/}
            {/* {!!locais && locais.map(local => (
            <h3 key={local.id}>{local.id} - {local.nomeLocal}</h3>
            ))}  */}

            {!!locais && locais.map(dados => (
                <CardLista dadosLista={dados} key={dados.id} 
                onClickEditar={() => editar(dados.id)} 
                onClickExcluir={() => excluir(dados.id)}
                />
            ))}

        </div>
    )
}

export default Lista