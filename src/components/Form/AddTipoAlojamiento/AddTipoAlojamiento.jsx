import React, { useState } from 'react';
import './AddTipoAlojamiento.css';
import { NavLink } from 'react-router-dom';

export const AddTipoAlojamiento = () => {

    const [descripcion, setDescripcion] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        const newAlojamiento = {
            Descripcion: descripcion
        }

        //conexion con API

        try {
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
                <select
                    type="text"
                    id='descripcion'
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                >
                    <option value="">Seleccione un tipo de Alojamiento</option>
                    <option value="Casa">Casa</option>
                    <option value="Cabaña">Cabaña</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Duplex">Duplex</option>
                </select>
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
