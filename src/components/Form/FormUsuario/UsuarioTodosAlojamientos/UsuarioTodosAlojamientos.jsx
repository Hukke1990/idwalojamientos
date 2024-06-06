import React from 'react';
import './UsuarioTodosAlojamientos.css';
import { GetAllAlojamientosDetail } from '../GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const UsuarioTodosAlojamientos = () => {
    const { alojamientos, alertMessage, alertType } = GetAllAlojamientosDetail();

    return (
        <div className='contenedorGetAlojamientos'>
            {alertMessage && (
                <div className={`alert ${alertType}`}>{alertMessage}
                </div>
            )}
            <h1>{alojamientos.length} Alojamientos encontrados</h1>
            <ul>
                {alojamientos.map((alojamiento) => (
                    <li key={alojamiento.idAlojamiento}>
                        <h2>{alojamiento.Titulo}</h2>
                        <p>{alojamiento.Descripción}</p>
                        <p>Tipo: {alojamiento.TipoAlojamiento}</p>
                        <p>Precio por día: ${alojamiento.PrecioPorDia}</p>
                        <p>Dormitorios: {alojamiento.CantidadDormitorios}</p>
                        <p>Baños: {alojamiento.CantidadBanios}</p>
                        <p>Estado: {alojamiento.Estado}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
