import React from 'react';
import './UsuarioTodosAlojamientos.css';
import { GetAllAlojamientosDetail } from '../GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const UsuarioTodosAlojamientos = () => {
    const { alojamientos, alertMessage, alertType } = GetAllAlojamientosDetail();

    return (
        <div className='contenedorGetAlojamientos'>
            <h1>{alojamientos.length} Alojamientos encontrados</h1>
            <ul>
                {alojamientos.map((alojamiento) => (
                    <li key={alojamiento.idAlojamiento}>
                        <h2>{alojamiento.Titulo}</h2>
                        <p><span>ID:</span> {alojamiento.idAlojamiento}</p>
                        <p><span>Descripcion:</span> {alojamiento.Descripcion}</p>
                        <p><span>Tipo:</span> {alojamiento.TipoAlojamiento}</p>
                        <p><span>Latitud:</span> {alojamiento.Latitud}</p>
                        <p><span>Longitud:</span> {alojamiento.Longitud}</p>
                        <p><span>Precio por día:</span> ${alojamiento.PrecioPorDia}</p>
                        <p><span>Cantidad dormitorios:</span> {alojamiento.CantidadDormitorios}</p>
                        <p><span>Cantidad baños:</span> {alojamiento.CantidadBanios}</p>
                        <p><span>Estado:</span> {alojamiento.Estado}</p>
                    </li>
                ))}
            </ul>
            {alertMessage && (
                <div className={`alert ${alertType}`}>{alertMessage}
                </div>
            )}
        </div>
    );
};
