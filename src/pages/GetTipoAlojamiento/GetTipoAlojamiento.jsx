import React, { useState } from 'react';
import './GetTipoAlojamiento.css';
import { NavLink } from 'react-router-dom';

export const GetTipoAlojamiento = () => {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [alojamientoData, setAlojamientoData] = useState(null);

    const obtenerAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${alojamientoId}`);
            if (response.ok) {
                const data = await response.json();
                setAlojamientoData(data);
            } else {
                console.error('Error al obtener el alojamiento');
                alert('Error al obtener el alojamiento');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    }

    return (
        <div className='contenedorGetAlojamiento'>
            <h2>Obtener Alojamiento por ID</h2>
            <input
                type="text"
                value={alojamientoId}
                onChange={e => setAlojamientoId(e.target.value)}
                placeholder="Ingrese el ID del alojamiento"
                className='inputGetAlojamiento'
            />
            <button className='btn btnGetAlojamiento' onClick={obtenerAlojamiento}>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                Obtener Alojamiento
            </button>

            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>

            {alojamientoData && (
                <div className='contenedorAlojamientoInfo'>
                    <h3>Información del Alojamiento</h3>
                    {console.log('Renderizando datos:', alojamientoData)}
                    <p>ID: <span>{alojamientoData.idTipoAlojamiento}</span></p>
                    <p>Descripción: <span>{alojamientoData.Descripcion}</span></p>
                </div>
            )}

        </div>
    );
}