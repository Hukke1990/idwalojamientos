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

    const obtenerImagenesAlojamiento = async (idAlojamiento) => {
        try {
            const response = await fetch(`http://localhost:3001/imagen/getAllImagenes`);

            if (!response.ok) {
                console.error('Error al obtener las imágenes:', response.statusText);
                return [];
            }

            const imagenes = await response.json();
            console.log('Imágenes obtenidas del servidor:', imagenes);

            const idAlojamientoNumber = Number(idAlojamiento);
            const imagenesFiltradas = imagenes.filter(imagen => {
                console.log(`Comparando idAlojamiento de la imagen: ${imagen.idAlojamiento} con idAlojamiento proporcionado: ${idAlojamientoNumber}`);
                return imagen.idAlojamiento === idAlojamientoNumber;
            });

            console.log('Imágenes filtradas por idAlojamiento:', imagenesFiltradas);
            return imagenesFiltradas;
        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
            return [];
        }
    };

    const eliminarImagen = async (idImagen) => {
        try {
            const response = await fetch(`http://localhost:3001/imagen/deleteImagen/${idImagen}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                console.error('Error al eliminar la imagen:', response.statusText);
                return false;
            }

            console.log(`Imagen con id ${idImagen} eliminada correctamente.`);
            return true;
        } catch (error) {
            console.error('Error al eliminar la imagen:', error);
            return false;
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

            console.log('Servicios asociados eliminados correctamente.');
            return true;
        } catch (error) {
            console.error('Error al obtener o eliminar servicios asociados:', error);
            return false;
        }
    };

    const eliminarAlojamiento = async () => {
        try {
            const imagenes = await obtenerImagenesAlojamiento(alojamientoId);
            console.log('Imágenes obtenidas:', imagenes);

            if (imagenes.length === 0) {
                setAlertMessage('No se encontraron imágenes asociadas al alojamiento.');
                setAlertType('warning');
                return;
            }

            for (const imagen of imagenes) {
                const eliminacionImagen = await eliminarImagen(imagen.idImagen);
                if (!eliminacionImagen) {
                    setAlertMessage('Error al eliminar las imágenes asociadas.');
                    setAlertType('error');
                    return;
                }
            }

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
                setAlertMessage('Alojamiento y todos los datos asociados eliminados con éxito.');
                setAlertType('success');
                console.log(`Alojamiento con id ${alojamientoId} eliminado correctamente.`);
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
