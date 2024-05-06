import { marker } from "leaflet"
import Map from "../../Components/Map/Map"

import styles from './dashboard.module.css'

import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

function Dashboard() {
    const {locais, lerLocais} = useContext(UsuariosContext)

    useEffect(() => {lerLocais()}, [])

    const markers = locais.map(item => {
        return {
            geocode: `${item.latitude}, ${item.longitude}`,
            popUp: `${item.descricao}`
        };
    });
    
    console.log(markers)

    return(
        <div>
            <div className={styles.logo} >
                <img src="/Logo/logo.png" alt="" width={"80px"} />
                <h1>Exercite</h1>
            </div>
            <h1 className={styles.textoInicial}>É uma comunidade onde você pode encontrar e compartilhar dicas de locais para prática de alguma atividade física!</h1>
            

            <Map />

        </div>
    )
}

export default Dashboard