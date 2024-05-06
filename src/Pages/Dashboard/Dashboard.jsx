import { Link } from "react-router-dom"
import Map from "../../Components/Map/Map"

import styles from './dashboard.module.css'

import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

function Dashboard() {
    const {locais, lerLocais, usuarios, lerUsuarios} = useContext(UsuariosContext)

    useEffect(() => {lerLocais(), lerUsuarios()}, [])

    const numUsuarios = usuarios.length
    const numLocais = locais.length

    const markers = locais.map(item => {
        return {
            lat: Number(item.latitude),
            long: Number(item.longitude),
            popUp: `${item.descricao}`
        }
    })

    const ativos = usuarios.filter(value =>{
        return value.usuarioAtivo == true
    })

    return(
        <div>
            <div className={styles.logo} >
                <img src="/Logo/logo.png" alt="" width={"80px"} />
                <h1>Exercite</h1>
            </div>
            <h1 className={styles.textoInicial}>Aqui você pode encontrar e compartilhar dicas de locais para prática de alguma atividade física!</h1>
            
            <Map />

            <table>
                 {/* 
                    thead = cabeçalho da tabela
                    th = título do cabeçalho
                    tbody = corpo da tabela
                    tr = linhas
                    td= dados 
                */}

                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Cidade/UF</th>
                        <th>Usuário</th>
                    </tr>
                </thead>

                <tbody> 
                    {locais ? locais.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nomeLocal}</td>
                            <td>{item.cidadeLocal}/{item.estadoLocal}</td>
                            <td>{item.idUsuario}</td>
                        </tr>
                    )) : 
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                </tbody>     
            </table>

            <div className={styles.divTexto}>
                <h2>Venha contribuir você também!!</h2>
                <h3>Atualmente, somos {numUsuarios} usuários cadastrados. Dos quais, {ativos.length} estão ativos nesse momento!</h3>
                <h3>Contamos com {numLocais} locais cadastrados!</h3>
                <p style={{marginTop: "1em"}}>
                    <Link to={'/novoLocal'} className={styles.link}>Cadastrar Novo Local!</Link>
                </p>
            </div>
        </div>
    )
}

export default Dashboard