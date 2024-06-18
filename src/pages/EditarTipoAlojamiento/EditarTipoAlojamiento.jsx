import React, { useState } from 'react';
import './EditarTipoAlojamiento.css';
import { Alert } from '../../components/Alert/Alert';
import { NavLink } from 'react-router-dom';
import { GetAllTiposAlojamiento } from '../../components/Form/GetAllTiposAlojamiento/GetAllTiposAlojamiento';

export const EditarTipoAlojamiento = () => {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'alojamientoId') {
            setAlojamientoId(value);
        } else if (name === 'descripcion') {
            setDescripcion(value);
        }
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const editarTipoAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${alojamientoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Descripcion: descripcion }),
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const result = await response.json();
                console.log('Result:', result);
                if (result.success) {
                    setAlertMessage('Tipo alojamiento actualizado con éxito.');
                    setAlertType('success');
                } else {
                    setAlertMessage(result.message || 'Error al actualizar el tipo alojamiento.');
                    setAlertType('error');
                }
            } else {
                const errorText = await response.text();
                console.error('Error al actualizar el tipo alojamiento:', errorText);
                setAlertMessage(`Error al actualizar el tipo alojamiento`);
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };


    return (
        <div className='contenedorEditAlojamiento'>
            <h2>Editar Tipo Alojamiento</h2>
            <div className='moduloAllTipoAlojamiento'>
                <GetAllTiposAlojamiento />
            </div>
            <fieldset className='fieldset'>
                <legend>Editar</legend>
                <input
                    type="text"
                    name="alojamientoId"
                    value={alojamientoId}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del tipo alojamiento"
                    className='inputEditAlojamiento'
                />
                <input
                    type="text"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleInputChange}
                    placeholder="Ingrese la nueva descripción"
                    className='inputEditAlojamiento'
                />
            </fieldset>
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}

            <button className='btn btnEditAlojamiento' onClick={editarTipoAlojamiento}>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                Editar Tipo Alojamiento
            </button>
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    );
}
