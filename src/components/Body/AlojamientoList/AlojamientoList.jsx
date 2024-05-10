import React from 'react'
import { AlojamientoCard } from '../AlojamientoCard/AlojamientoCard'

export const AlojamientoList = ({ alojamientoInfo }) => {
    console.log(alojamientoInfo, "componenete alojaminetoLost")
    return (
        <>
            {alojamientoInfo.map(alojamiento => <AlojamientoCard key={alojamiento.idAlojamiento} card={alojamiento} />)}
        </>
    )
}

