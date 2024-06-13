import React from 'react';
import './GetAllServicios.css';
import { ServiciosDetail } from '../ServicioDetail/ServicioDetail';

export const GetAllServicios = () => {
    const { servicios } = ServiciosDetail();

    return (
        <div className='contenedorGetTipoAlojamientos'>
            {servicios.length > 0 ? (
                <ul>
                    <div className='contenedorAlojamientos'>
                        {servicios.map(servicio => (
                            <li className='AllTipoAlojamiento' key={servicio.idServicio}>
                                <p>ID: <span>{servicio.idServicio}</span></p>
                                <p>Nombre: <span>{servicio.Nombre}</span></p>
                            </li>
                        ))}
                    </div>
                </ul>
            ) : (
                <p className='noTipoAlojamientos'>No hay servicios disponibles.</p>
            )}
        </div>
    );
}
