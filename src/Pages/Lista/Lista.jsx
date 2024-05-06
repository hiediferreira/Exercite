import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

import CardLista from '../../Components/CardLista/CardLista'

function Lista(){
    const { locais, lerLocais, apagarLocal } = useContext(UsuariosContext)
    useEffect(() => {lerLocais()}, []) //Quando carrega a página, mostra os lugares cadastrados atualizados.

    function editar(id){
        window.location.href = `/editar/${id}` 
    }

    function excluir(id){
        apagarLocal(id)
    }

    return(
        <div>
            
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