import { marker } from "leaflet"
import Map from "../../Components/Map/Map"

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
            
            <h1>{locais.length} lugares cadastrados</h1>

            <Map />

        </div>
    )
}

export default Dashboard