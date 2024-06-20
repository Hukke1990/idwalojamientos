import React, { useState } from 'react';
import './AddTipoAlojamiento.css';
import { NavLink } from 'react-router-dom';
import { Alert } from '../../Alert/Alert';

export const AddTipoAlojamiento = () => {
    const [descripcion, setDescripcion] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        setDescripcion(e.target.value);
        // Borra el mensaje de alerta al escribir en el input
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const enviar = async (e) => {
        e.preventDefault();

        try {
            const obtenerResponse = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (obtenerResponse.ok) {
                const alojamientos = await obtenerResponse.json();


                const existeAlojamiento = alojamientos.some(alojamiento => alojamiento.Descripcion.toLowerCase() === descripcion.toLowerCase());

                if (existeAlojamiento) {
                    setAlertMessage('El tipo de alojamiento ya se encuentra registrado');
                    setAlertType('warning');
                    return;
                }
            } else {
                console.error('Error al obtener los tipos de alojamientos');
                setAlertMessage('Error al verificar el tipo de alojamiento');
                setAlertType('error');
                return;
            }

            // Si no existe, agrega el nuevo tipo de alojamiento
            const newAlojamiento = { Descripcion: descripcion };

            const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAlojamiento)
            });

            if (response.ok) {
                setAlertMessage('Alojamiento agregado');
                setAlertType('success');
            } else {
                console.error('Error al agregar el alojamiento');
                setAlertMessage('Error al agregar el alojamiento');
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
                    <label htmlFor="descripcion"></label>
                    <input
                        type="text"
                        id='descripcion'
                        name='descripcion'
                        placeholder='Descripción'
                        className='inputTipoAlojamiento'
                        required
                        value={descripcion}
                        onChange={handleInputChange} // utiliza la funcion para borrar el alert al escribir
                    />
                </div>
            </fieldset>
            <div>
                {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}
            </div>
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

export default AddTipoAlojamiento;
