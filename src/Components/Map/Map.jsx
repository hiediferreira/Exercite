import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

import styles from './map.module.css'

import MarkerClusterGroup from "react-leaflet-cluster";

import {UsuariosContext}  from '../../Context/UsuariosContext'
import { useEffect, useContext } from 'react'

function Mapa(){
    // Referência: https://www.youtube.com/watch?v=jD6813wGdBA&t=210s //

    const {locais, lerLocais} = useContext(UsuariosContext)

    useEffect(() => {lerLocais()}, [])

    const markers = locais.map(item => {
        return {
            lat: Number(item.latitude),
            long: Number(item.longitude),
            popUp: `${item.tipo}`
        }
    })
    
    console.log(markers);

    return(
        <MapContainer center={[-27.59344, -48.56159]} zoom={13} className={styles.containerMap}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup>

                {markers.map((marker, index) => (
                    <Marker position={[marker.lat, marker.long]} key={index}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}

            </MarkerClusterGroup>

        </MapContainer>
    )
}

export default Mapa