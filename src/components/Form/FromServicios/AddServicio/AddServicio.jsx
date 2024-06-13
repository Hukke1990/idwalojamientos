import React, { useState } from 'react';
import './AddServicio.css';
import { NavLink } from 'react-router-dom';
import { Alert } from '../../../Alert/Alert';

export const AddServicio = () => {
    const [nombre, setNombre] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        setNombre(e.target.value);
        // Borra el mensaje de alerta al escribir en el input
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const enviar = async (e) => {
        e.preventDefault();

        try {
            const obtenerResponse = await fetch('http://localhost:3001/servicio/getAllServicios');
            if (obtenerResponse.ok) {
                const servicio = await obtenerResponse.json();


                const existeServicio = servicio.some(servicio => servicio.Nombre.toLowerCase() === nombre.toLowerCase());

                if (existeServicio) {
                    setAlertMessage('El servicio ya se encuentra registrado');
                    setAlertType('warning');
                    return;
                }
            } else {
                console.error('Error al obtener los servicios');
                setAlertMessage('Error al verificar el servicio');
                setAlertType('error');
                return;
            }

            // Si no existe, agrega el nuevo tipo de alojamiento
            const newServicio = { Nombre: nombre };

            const response = await fetch('http://localhost:3001/servicio/createServicio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newServicio)
            });

            if (response.ok) {
                setAlertMessage('Servicio agregado');
                setAlertType('success');
            } else {
                console.error('Error al agregar el servicio');
                setAlertMessage('Error al agregar el servicio');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };

    return (
        <form className='contenedorForm' onSubmit={enviar}>
            <fieldset className='fieldset'>
                <legend>Agregar</legend>
                <div>
                    <label htmlFor="nombre"></label>
                    <input
                        type="text"
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        className='inputTipoAlojamiento'
                        required
                        value={nombre}
                        onChange={handleInputChange} // utiliza la funcion para borrar el alert al escribir
                    />
                </div>
                <div>
                    {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}
                </div>
            </fieldset>
            <div>
                <button className='btn enviarForm' type='submit'>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                    Enviar</button>
            </div>
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </form>
    );
};