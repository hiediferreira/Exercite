import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

import CardLista from '../../Components/CardLista/CardLista'

import { Button } from '@mui/material'
import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

function Lista(){
    const { lerUsuarios, usuarios, lerLocais, locais } = useContext(UsuariosContext)
    useEffect(() => {lerUsuarios(), lerLocais()}, [])

    function botaoEditar(){
        alert('Editar')
    }

    function botaoExcluir(){
        alert('Excluir')
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
                onClickExcluir={botaoExcluir}
                />
            ))}
        </div>
    )
}

export default Lista