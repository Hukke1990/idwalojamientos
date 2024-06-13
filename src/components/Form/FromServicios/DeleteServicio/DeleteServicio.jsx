import React, { useState } from 'react';
import './DeleteServicio.css';
import { Alert } from '../../../Alert/Alert';

export const DeleteServicio = () => {
    const [servicioId, setServicioId] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        setServicioId(e.target.value);
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const eliminarServicio = async () => {
        try {
            const response = await fetch(`http://localhost:3001/servicio/deleteServicio/${servicioId}`, {
                method: 'DELETE',
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                setAlertMessage('Servicio eliminado con éxito.');
                setAlertType('success');
            } else {
                const errorText = await response.text();
                console.error('Error al eliminar el servicio:', errorText);
                setAlertMessage('Error al eliminar el servicio');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
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
                    value={servicioId}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del servicio"
                    className='inputDeleteAlojamiento'
                />
            </fieldset>
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}

            <button className='btn btnDeleteAlojamiento' onClick={eliminarServicio}>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                Eliminar Servicio
            </button>
        </div>
    );
}