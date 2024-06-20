import React from 'react';
import './GetAllTiposAlojamiento.css';
import { TipoAlojamientoDetail } from '../TipoAlojamientoDetail/TipoAlojamientoDetail';

export const GetAllTiposAlojamiento = () => {
    const { tiposAlojamiento } = TipoAlojamientoDetail();

    return (
        <div className='contenedorGetTipoAlojamientos'>
            {tiposAlojamiento && tiposAlojamiento.length > 0 ? (
                <ul>
                    <div className='contenedorAlojamientos'>
                        {tiposAlojamiento.map(alojamiento => (
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
