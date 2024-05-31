import React, { useState } from 'react';
import './AddTipoAlojamiento.css';
import { NavLink } from 'react-router-dom';

export const AddTipoAlojamiento = () => {
    const [descripcion, setDescripcion] = useState('');

    const enviar = async (e) => {
        e.preventDefault();

        try {
            // Obtener todos los tipos de alojamientos para verificar si ya existe
            const obtenerResponse = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (obtenerResponse.ok) {
                const alojamientos = await obtenerResponse.json();

                // Verificar si la descripción ya existe
                const existeAlojamiento = alojamientos.some(alojamiento => alojamiento.Descripcion.toLowerCase() === descripcion.toLowerCase());

                if (existeAlojamiento) {
                    alert('El tipo de alojamiento ya se encuentra registrado');
                    return;
                }
            } else {
                console.error('Error al obtener los tipos de alojamientos');
                alert('Error al verificar el tipo de alojamiento');
                return;
            }

            // Si no existe, proceder a agregar el nuevo tipo de alojamiento
            const newAlojamiento = { Descripcion: descripcion };

            const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAlojamiento)
            });

            if (response.ok) {
                alert('Alojamiento agregado');
            } else {
                console.error('Error al agregar el alojamiento');
                alert('Error al agregar el alojamiento');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    }

    return (
        <form className='contenedorForm' onSubmit={enviar}>
            <div>
                <label htmlFor="descripcion"></label>
                <input
                    type="text"
                    id='descripcion'
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                />
            </div>
            <div>
                <button className='btn enviarForm' type='submit'>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                    Enviar
                </button>
            </div>
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </form>
    );
};

export default AddTipoAlojamiento;
