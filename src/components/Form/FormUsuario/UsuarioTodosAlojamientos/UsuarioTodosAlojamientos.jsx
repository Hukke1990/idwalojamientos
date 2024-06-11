import React from 'react';
import './UsuarioTodosAlojamientos.css';
import { GetAllAlojamientosDetail } from '../GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const UsuarioTodosAlojamientos = () => {

    return (
        <GetAllAlojamientosDetail render={({ alojamientos, alertMessage, alertType }) => (
            <div className='contenedorGetAlojamientos'>
                <h1>{alojamientos.length} Alojamientos encontrados</h1>
                <ul>
                    {alojamientos.map((alojamiento) => (
                        <li key={alojamiento.idAlojamiento}>
                            <h2>{alojamiento.Titulo}</h2>
                            <p><span className='label'>ID:</span> {alojamiento.idAlojamiento}</p>
                            <p><span className='label'>Descripcion:</span> {alojamiento.Descripcion}</p>
                            <p><span className='label'>Tipo alojamiento:</span> {alojamiento.TipoAlojamiento}</p>
                            <p><span className='label'>Latitud:</span> {alojamiento.Latitud}</p>
                            <p><span className='label'>Longitud:</span> {alojamiento.Longitud}</p>
                            <p><span className='label'>Precio por día:</span> ${alojamiento.PrecioPorDia}</p>
                            <p><span className='label'>Cantidad dormitorios:</span> {alojamiento.CantidadDormitorios}</p>
                            <p><span className='label'>Cantidad baños:</span> {alojamiento.CantidadBanios}</p>
                            <p><span className='label'>Estado:</span> <span className={alojamiento.Estado === 'Disponible' ? 'estadoDisponible' : 'estadoReservado'}>{alojamiento.Estado}</span></p>
                        </li>
                    ))}
                </ul>
                {alertMessage && (
                    <div className={`alert ${alertType}`}>{alertMessage}</div>
                )}
            </div>
        )} />
    );
};
