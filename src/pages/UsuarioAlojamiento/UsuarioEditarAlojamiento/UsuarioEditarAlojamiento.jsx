import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './UsuarioEditarAlojamiento.css';
import { Alert } from '../../../components/Alert/Alert';
import { TipoAlojamientoDetail } from '../../../components/Form/TipoAlojamientoDetail/TipoAlojamientoDetail';

export const UsuarioEditarAlojamiento = () => {
    const { id } = useParams();
    const [alojamientoData, setAlojamientoData] = useState(null);
    const [serviciosDisponibles, setServiciosDisponibles] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const { tiposAlojamiento } = TipoAlojamientoDetail();
    const fetchUrl = "http://localhost:3001"; // Ajusta la URL base según sea necesario

    useEffect(() => {
        const fetchAlojamiento = async () => {
            try {
                const response = await fetch(`${fetchUrl}/alojamiento/getAlojamiento/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setAlojamientoData(data);
                } else {
                    throw new Error('Error al obtener el alojamiento');
                }
            } catch (error) {
                console.error('Error al obtener el alojamiento:', error);
                setAlertMessage('Error al obtener el alojamiento.');
                setAlertType('error');
            }
        };

        const obtenerServiciosDisponibles = async () => {
            try {
                const response = await fetch(`${fetchUrl}/servicio/getAllServicios`);
                if (response.ok) {
                    const data = await response.json();
                    setServiciosDisponibles(data);
                } else {
                    throw new Error('Error al obtener los servicios disponibles');
                }
            } catch (error) {
                console.error('Error al obtener los servicios disponibles:', error);
            }
        };

        const obtenerServiciosAlojamiento = async () => {
            try {
                const response = await fetch(`${fetchUrl}/alojamientosServicios/getAlojamientoServicio/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setSelectedServices(data.map(service => service.idServicio));
                } else {
                    throw new Error('Error al obtener los servicios del alojamiento');
                }
            } catch (error) {
                console.error('Error al obtener los servicios del alojamiento:', error);
            }
        };

        fetchAlojamiento();
        obtenerServiciosDisponibles();
        obtenerServiciosAlojamiento();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAlojamientoData({ ...alojamientoData, [name]: value });
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const serviceId = parseInt(name);
        if (checked) {
            setSelectedServices([...selectedServices, serviceId]);
        } else {
            setSelectedServices(selectedServices.filter(id => id !== serviceId));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            try {
                // Actualizar alojamiento
                const response = await fetch(`${fetchUrl}/alojamiento/putAlojamiento/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(alojamientoData),
                });

                if (!response.ok) {
                    throw new Error('Error al actualizar el alojamiento');
                }

                // Obtener servicios asociados inicialmente
                const initialSelectedServices = await fetch(
                    `${fetchUrl}/alojamientosServicios/getAlojamientoServicio/${id}`
                ).then((res) => res.json());

                // Guardar los idAlojamientoServicios
                const initialServiceIds = initialSelectedServices.map(
                    (service) => service.idServicio
                );

                // Encontrar los servicios que se han desmarcado (eliminar)
                const servicesToDelete = initialSelectedServices.filter(
                    (service) => !selectedServices.includes(service.idServicio)
                );

                // Encontrar los nuevos servicios que se han marcado (agregar)
                const servicesToAdd = selectedServices.filter(
                    (serviceId) => !initialServiceIds.includes(serviceId)
                );

                // Eliminar las asociaciones de servicios desmarcados (por idAlojamientoServicio)
                const deleteRequests = servicesToDelete.map((service) =>
                    fetch(
                        `${fetchUrl}/alojamientosServicios/deleteAlojamientoServicio/${service.idAlojamientoServicio}`,
                        { method: 'DELETE' }
                    )
                );

                // Crear nuevas asociaciones de servicios marcados (post)
                const addRequests = servicesToAdd.map((idServicio) => {
                    const servicioSeleccionado = {
                        idAlojamiento: parseInt(id),
                        idServicio: parseInt(idServicio),
                    };
                    return fetch(
                        `${fetchUrl}/alojamientosServicios/createAlojamientoServicio`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(servicioSeleccionado),
                        }
                    );
                });

                // Esperar a que todas las solicitudes se completen
                await Promise.all([...deleteRequests, ...addRequests]);

                setAlertMessage('Alojamiento y servicios actualizados con éxito');
                setAlertType('success');
            } catch (error) {
                setAlertMessage('Ocurrió un error al actualizar el alojamiento y servicios');
                setAlertType('error');
                console.error("Hubo un error al realizar la solicitud PUT:", error);
            }
        } else {
            try {
                const response = await fetch(`${fetchUrl}/alojamiento/createAlojamiento`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(alojamientoData),
                });

                if (!response.ok) {
                    throw new Error('Error al crear el alojamiento');
                }

                const res = await response.json();
                // El ID del alojamiento se devuelve en la respuesta
                const alojamientoId = res.id;

                // Crear servicios asociados
                const requests = selectedServices.map((idServicio) => {
                    const servicioSeleccionado = {
                        idAlojamiento: parseInt(alojamientoId),
                        idServicio: parseInt(idServicio),
                    };

                    return fetch(
                        `${fetchUrl}/alojamientosServicios/createAlojamientoServicio`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(servicioSeleccionado),
                        }
                    );
                });

                await Promise.all(requests);

                setAlertMessage('Alojamiento y servicios creados con éxito');
                setAlertType('success');
            } catch (error) {
                setAlertMessage('Ocurrió un error al crear el alojamiento y servicios');
                setAlertType('error');
                console.error("Hubo un error:", error);
            }
        }
    };

    return (
        <div className='contenedorEditAlojamiento'>
            <h2>Editar Alojamiento</h2>
            {alojamientoData ? (
                <form className='formEditAlojamiento' onSubmit={handleSubmit}>
                    <fieldset className='fieldset'>
                        <legend>Información del Alojamiento</legend>
                        <label>
                            Título:
                            <input
                                type="text"
                                name="Titulo"
                                placeholder="Título del alojamiento"
                                value={alojamientoData.Titulo}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Descripción:
                            <textarea
                                name="Descripcion"
                                placeholder="Descripción del alojamiento"
                                value={alojamientoData.Descripcion}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Tipo alojamiento:
                            <select
                                name="idTipoAlojamiento"
                                value={alojamientoData.idTipoAlojamiento}
                                onChange={handleInputChange}
                                className='labelSelect'
                            >
                                {tiposAlojamiento.map((tipo) => (
                                    <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                                        {tipo.Descripcion}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Latitud:
                            <input
                                type="number"
                                name="Latitud"
                                placeholder="Latitud"
                                value={alojamientoData.Latitud}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Longitud:
                            <input
                                type="number"
                                name="Longitud"
                                placeholder="Longitud"
                                value={alojamientoData.Longitud}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Precio por día:
                            <input
                                type="number"
                                name="PrecioPorDia"
                                placeholder="Precio por día"
                                value={alojamientoData.PrecioPorDia}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Cantidad de dormitorios:
                            <input
                                type="number"
                                name="CantidadDormitorios"
                                placeholder="Cantidad de dormitorios"
                                value={alojamientoData.CantidadDormitorios}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Cantidad de baños:
                            <input
                                type="number"
                                name="CantidadBanios"
                                placeholder="Cantidad de baños"
                                value={alojamientoData.CantidadBanios}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Disponibilidad:
                            <select
                                name="Estado"
                                value={alojamientoData.Estado}
                                onChange={handleInputChange}
                                className='labelSelect'
                            >
                                <option value="Disponible">Disponible</option>
                                <option value="Reservado">Reservado</option>
                            </select>
                        </label>
                        <div>
                            <label>Servicios:</label>
                            <div className='fieldsetServiciosAlojamiento'>
                                {serviciosDisponibles.map((servicio) => (
                                    <div className='serviciosAlojamientoLabel EditarServicio' key={servicio.idServicio}>
                                        <div className='checkboxEditarServicio'>
                                            <input
                                                type="checkbox"
                                                id={servicio.idServicio}
                                                name={servicio.idServicio}
                                                checked={selectedServices.includes(servicio.idServicio)}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <label htmlFor={servicio.idServicio}><span>{servicio.Nombre}</span></label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" className='btn'>
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>
                        Guardar cambios</button>
                    {alertMessage && <Alert message={alertMessage} type={alertType} />}
                    <NavLink to="/ListaAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
                </form>
            ) : (
                <p>Cargando datos del alojamiento...</p>
            )}
        </div>
    );
};
