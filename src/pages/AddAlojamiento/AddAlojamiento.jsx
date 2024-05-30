import React, { useState } from 'react';
import './AddAlojamiento.css';

export const AddAlojamiento = () => {

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
        <div className='contenedorAddAlojamientos'>
            <h2>Agregar Alojamiento</h2>
            <p>Ingresa los datos del alojamiento que desea registrar</p>
            <form onSubmit={enviar}>
                <div>
                    <label htmlFor="descripcion">Descripcion: </label>
                    <input
                        type="text"
                        id='descripcion'
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    />
                </div>
                <button type='submit'>Enviar</button>

            </form>
        </div>
    );

};
