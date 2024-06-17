import React from 'react';
import { AlojamientoCard } from '../AlojamientoCard/AlojamientoCard';

export const AlojamientoList = ({ alojamientoInfo }) => {
    console.log(alojamientoInfo, "componente AlojamientoList");
    return (
        <>
            {alojamientoInfo.map(alojamiento => <AlojamientoCard key={alojamiento.idAlojamiento} card={alojamiento} />)}
        </>
    );
};
