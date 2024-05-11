import React from 'react';
import { useParams } from 'react-router-dom';

export const AlojamientoDetalles = ({ card }) => {
    const { idAlojamiento } = useParams();
    const alojamiento = card.find(a => a.idAlojamiento === Number(idAlojamiento));

    if (!alojamiento) {
        return <p>No se encontró el alojamiento</p>;
    }

    return (
        <div>
            <h2>{alojamiento.titulo}</h2>
            <p>{alojamiento.descripcion}</p>
            {/* Mostrar otros detalles del alojamiento según tus necesidades */}
        </div>
    );
};
