import React, { useState } from 'react';
import '..GetTipoAlojamiento/GetTipoAlojamiento.css';
import { NavLink } from 'react-router-dom';
import { Alert } from '../../components/Alert/Alert';

export const GetTipoAlojamiento = () => {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [alojamientoData, setAlojamientoData] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
        // Borra el mensaje de alerta al escribir en el input
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const obtenerAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${alojamientoId}`);
            if (response.ok) {
                const data = await response.json();
                setAlojamientoData(data);
                setAlertMessage('Alojamiento obtenido con éxito.');
                setAlertType('success');
            } else {
                console.error('Error al obtener el alojamiento');
                setAlertMessage('Error al obtener el alojamiento.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    }

    return (
        <div className='contenedorGetAlojamiento'>
            <h2>Obtener Alojamiento por ID</h2>
            <input
                type="text"
                value={alojamientoId}
                onChange={handleInputChange} // Usar la nueva función para manejar el cambio
                placeholder="Ingrese el ID del alojamiento"
                className='inputGetAlojamiento'
            />
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}

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
                    <p>ID: <span>{alojamientoData.idTipoAlojamiento}</span></p>
                    <p>Descripción: <span>{alojamientoData.Descripcion}</span></p>
                </div>
            )}
        </div>
    );
}

export default GetTipoAlojamiento;
