import React, { useEffect, useState } from 'react';
import './GetAllTiposAlojamiento.css';

export const GetAllTiposAlojamiento = () => {
    const [alojamientos, setAlojamientos] = useState([]);

    const obtenerAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (response.ok) {
                const data = await response.json();
                console.log('Datos recibidos:', data);
                setAlojamientos(data);
            } else {
                console.error('Error al obtener los alojamientos');
                alert('Error al obtener los alojamientos');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    }

    useEffect(() => {
        obtenerAlojamientos();
    }, []);

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