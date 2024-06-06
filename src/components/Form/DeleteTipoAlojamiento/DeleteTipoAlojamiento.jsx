import React, { useState } from 'react';
import './DeleteTipoAlojamiento.css';
import { Alert } from '../../Alert/Alert';

export const DeleteTipoAlojamiento = () => {
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

    const eliminarAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${alojamientoId}`, {
                method: 'DELETE',
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                setAlertMessage('Alojamiento eliminado con éxito.');
                setAlertType('success');
            } else {
                const errorText = await response.text();
                console.error('Error al eliminar el alojamiento:', errorText);
                setAlertMessage('Error al eliminar el alojamiento');
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
}

export default DeleteTipoAlojamiento;
