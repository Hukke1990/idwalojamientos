import React, { useState } from 'react';
import './EditarServicio.css';
import { Alert } from '../../../components/Alert/Alert';
import { NavLink } from 'react-router-dom';
import { AllServicios } from '../AllServicios/AllServicios';

export const EditarServicio = () => {
    const [servicioId, setServicioId] = useState('');
    const [nombre, setNombre] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'servicioId') {
            setServicioId(value);
        } else if (name === 'nombre') {
            setNombre(value);
        }
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const editarServicio = async () => {
        try {
            const response = await fetch(`http://localhost:3001/servicio/updateServicio/${servicioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Nombre: nombre }),
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const result = await response.json();
                console.log('Result:', result);
                if (result.success) {
                    setAlertMessage('Servicio actualizado con éxito.');
                    setAlertType('success');
                } else {
                    setAlertMessage(result.message || 'Error al actualizar el servicio.');
                    setAlertType('error');
                }
            } else {
                const errorText = await response.text();
                console.error('Error al actualizar el servicio:', errorText);
                setAlertMessage(`Error al actualizar el servicio`);
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
            <h2>Editar Servicio</h2>
            <div className='moduloAllTipoAlojamiento'>
                <AllServicios />
            </div>
            <fieldset className='fieldset'>
                <legend>Editar</legend>
                <input
                    type="text"
                    name="servicioId"
                    value={servicioId}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del tipo alojamiento"
                    className='inputEditAlojamiento'
                />
                <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                    placeholder="Ingrese la nueva descripción"
                    className='inputEditAlojamiento'
                />
            </fieldset>
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}

            <button className='btn btnEditAlojamiento' onClick={editarServicio}>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                Editar Servicio
            </button>
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    );
}
