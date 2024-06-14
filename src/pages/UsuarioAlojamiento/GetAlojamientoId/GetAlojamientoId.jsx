import React, { useState } from 'react';
import './GetAlojamientoId.css';
import { NavLink } from 'react-router-dom';
import { Alert } from '../../../components/Alert/Alert';

export const GetAlojamientoId = () => {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [alojamientoData, setAlojamientoData] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const obtenerAlojamiento = async () => {
        try {
            console.log(`Obteniendo alojamiento con ID: ${alojamientoId}`);
            const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${alojamientoId}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Datos del alojamiento:', data);
                setAlojamientoData(data);
                setAlertMessage('Alojamiento obtenido con éxito.');
                setAlertType('success');
            } else {
                console.error('Error al obtener el alojamiento:', response.statusText);
                setAlertMessage('Error al obtener el alojamiento.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ID del alojamiento:', alojamientoId);
        obtenerAlojamiento();
    }

    return (
        <div className='contenedorGetAlojamientoId'>
            <h2>Obtener Alojamiento por ID</h2>
            <form className='formGetAlojamientoId' onSubmit={handleSubmit}>
                <fieldset className='fieldset'>
                    <legend>Buscar</legend>
                    <input
                        type="text"
                        value={alojamientoId}
                        onChange={handleInputChange}
                        placeholder="Ingrese el ID del alojamiento"
                        className='inputGetAlojamiento'
                    />
                </fieldset>
                {alertMessage && <Alert message={alertMessage} type={alertType} onClick={obtenerAlojamiento} />}
                <button type='submit' className='btn btnGetAlojamiento'>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                    Obtener Alojamiento
                </button>
                {alojamientoData && (
                    <div className='contenedorAlojamientoInfo'>
                        <h3>Información del Alojamiento</h3>
                        <p>ID: <span>{alojamientoData.idAlojamiento}</span></p>
                        <p>Título: <span>{alojamientoData.Titulo}</span></p>
                        <p>Descripción: <span>{alojamientoData.Descripcion}</span></p>
                        <p>Tipo: <span>{alojamientoData.TipoAlojamiento}</span></p>
                        <p>Latitud: <span>{alojamientoData.Latitud}</span></p>
                        <p>Longitud: <span>{alojamientoData.Longitud}</span></p>
                        <p>Precio por día: <span>${alojamientoData.PrecioPorDia}</span></p>
                        <p>Cantidad dormitorios: <span>{alojamientoData.CantidadDormitorios}</span></p>
                        <p>Cantidad baños: <span>{alojamientoData.CantidadBanios}</span></p>
                        <p>Estado: <span className={alojamientoData.Estado === 'Disponible' ? 'estadoDisponible' : 'estadoReservado'}>
                            {alojamientoData.Estado}
                        </span></p>
                    </div>
                )}
            </form>

            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>


        </div>
    );
}