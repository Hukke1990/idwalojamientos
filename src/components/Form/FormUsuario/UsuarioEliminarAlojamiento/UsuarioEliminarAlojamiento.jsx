import React, { useState } from 'react';
import './UsuarioEliminarAlojamiento.css';
import { Alert } from '../../../Alert/Alert';

export const UsuarioEliminarAlojamiento = () => {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const eliminarServiciosAsociados = async (idAlojamiento) => {
        try {
            const response = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicio/${idAlojamiento}`, {
                method: 'GET',
            });

            if (!response.ok) {
                console.error('Error al obtener servicios asociados:', response.statusText);
                return false;
            }

            const servicios = await response.json();

            if (!Array.isArray(servicios)) {
                console.error('La respuesta no es un array:', servicios);
                return false;
            }

            for (const servicio of servicios) {
                const deleteResponse = await fetch(`http://localhost:3001/alojamientosServicios/deleteAlojamientoServicio/${servicio.idAlojamientoServicio}`, {
                    method: 'DELETE',
                });

                if (!deleteResponse.ok) {
                    console.error('Error al eliminar el servicio asociado:', deleteResponse.statusText);
                    return false;
                }
            }

            return true;
        } catch (error) {
            console.error('Error al obtener o eliminar servicios asociados:', error);
            return false;
        }
    };

    const eliminarAlojamiento = async () => {
        try {
            const serviciosEliminados = await eliminarServiciosAsociados(alojamientoId);
            if (!serviciosEliminados) {
                setAlertMessage('Error al eliminar los servicios asociados.');
                setAlertType('error');
                return;
            }

            const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${alojamientoId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setAlertMessage('Alojamiento y servicios asociados eliminados con éxito.');
                setAlertType('success');
            } else {
                const errorText = await response.text();
                console.error('Error al eliminar el alojamiento:', errorText);
                setAlertMessage('Error al eliminar el alojamiento.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };

    return (
        <div className='contenedorDeleteAlojamiento'>
            <fieldset className='fieldset'>
                <legend>Eliminar</legend>
                <input
                    type="text"
                    value={alojamientoId}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del alojamiento"
                    className='inputDeleteAlojamiento'
                />
            </fieldset>
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}

            <button className='btn btnDeleteAlojamiento' onClick={eliminarAlojamiento}>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                Eliminar Alojamiento
            </button>
        </div>
    );
};
