import React, { useEffect, useState } from 'react';
import './GetAllTiposAlojamiento.css';

export const GetAllTiposAlojamiento = () => {
    const [alojamientos, setAlojamientos] = useState([]);

    const obtenerAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/getTipoAlojamiento');
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
            <h2>Todos los Tipos de Alojamientos</h2>
            {alojamientos.length > 0 ? (
                <ul>
                    {alojamientos.map(alojamiento => (
                        <li key={alojamiento.id}>
                            <p>ID: {alojamiento.id}</p>
                            <p>Descripción: {alojamiento.Descripcion}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay tipos de alojamientos disponibles.</p>
            )}
        </div>
    );
}