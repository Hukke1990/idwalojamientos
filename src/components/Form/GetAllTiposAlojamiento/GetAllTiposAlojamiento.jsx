// src/components/GetAllTiposAlojamiento/GetAllTiposAlojamiento.js
import React from 'react';
import './GetAllTiposAlojamiento.css';
import { TipoAlojamientoDetail } from '../TipoAlojamientoDetail/TipoAlojamientoDetail';

export const GetAllTiposAlojamiento = () => {
    const { alojamientos } = TipoAlojamientoDetail();

    return (
        <div className='contenedorGetAlojamientos'>
            {alojamientos.length > 0 ? (
                <ul>
                    <div className='contenedorAlojamientos'>
                        {alojamientos.map(alojamiento => (
                            <li className='AllTipoAlojamiento' key={alojamiento.idTipoAlojamiento}>
                                <p>ID: <span>{alojamiento.idTipoAlojamiento}</span></p>
                                <p>Descripción: <span>{alojamiento.Descripcion}</span></p>
                            </li>
                        ))}
                    </div>
                </ul>
            ) : (
                <p className='noTipoAlojamientos'>No hay tipos de alojamientos disponibles.</p>
            )}
        </div>
    );
}
