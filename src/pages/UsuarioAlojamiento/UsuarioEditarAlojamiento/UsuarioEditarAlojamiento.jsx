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
    const [imagenes, setImagenes] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const { tiposAlojamiento } = TipoAlojamientoDetail();
    const fetchUrl = "http://localhost:3001";

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

        const obtenerImagenesAlojamiento = async () => {
            try {
                const response = await fetch(`${fetchUrl}/imagen/getAllImagenes`);
                if (response.ok) {
                    const data = await response.json();
                    const imagenesAlojamiento = data.filter(img => img.idAlojamiento === parseInt(id));
                    setImagenes(imagenesAlojamiento);
                } else {
                    throw new Error('Error al obtener las imágenes');
                }
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        fetchAlojamiento();
        obtenerServiciosDisponibles();
        obtenerServiciosAlojamiento();
        obtenerImagenesAlojamiento();
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

    const handleImageChange = (e, imageId) => {
        const file = e.target.files[0];
        if (file) {
            const updatedImages = imagenes.map(img =>
                img.idImagen === imageId ? { ...img, file } : img
            );
            setImagenes(updatedImages);
        }
    };

    const handleNewImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setNewImages(files);
    };

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=971a1f0fa405d96967977102289517a9`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.url;
        } else {
            throw new Error('Error al subir la imagen');
        }
    };

    const handleDeleteImage = async (imageId) => {
        try {
            const response = await fetch(`${fetchUrl}/imagen/deleteImagen/${imageId}`, { method: 'DELETE' });
            if (response.ok) {
                setImagenes(imagenes.filter(img => img.idImagen !== imageId));
                setAlertMessage('Imagen eliminada con éxito');
                setAlertType('success');
            } else {
                throw new Error('Error al eliminar la imagen');
            }
        } catch (error) {
            setAlertMessage('Ocurrió un error al eliminar la imagen');
            setAlertType('error');
            console.error("Hubo un error al eliminar la imagen:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            try {
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

                const initialSelectedServices = await fetch(`${fetchUrl}/alojamientosServicios/getAlojamientoServicio/${id}`).then(res => res.json());
                const initialServiceIds = initialSelectedServices.map(service => service.idServicio);
                const servicesToDelete = initialSelectedServices.filter(service => !selectedServices.includes(service.idServicio));
                const servicesToAdd = selectedServices.filter(serviceId => !initialServiceIds.includes(serviceId));

                const deleteRequests = servicesToDelete.map(service => fetch(`${fetchUrl}/alojamientosServicios/deleteAlojamientoServicio/${service.idAlojamientoServicio}`, { method: 'DELETE' }));
                const addRequests = servicesToAdd.map(idServicio => {
                    const servicioSeleccionado = { idAlojamiento: parseInt(id), idServicio: parseInt(idServicio) };
                    return fetch(`${fetchUrl}/alojamientosServicios/createAlojamientoServicio`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(servicioSeleccionado),
                    });
                });

                await Promise.all([...deleteRequests, ...addRequests]);

                const imageUploadRequests = imagenes.map(async img => {
                    if (img.file) {
                        const imageUrl = await handleImageUpload(img.file);
                        return fetch(`${fetchUrl}/imagen/updateImagen/${img.idImagen}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ RutaArchivo: imageUrl, idAlojamiento: parseInt(id) }),
                        });
                    }
                });

                await Promise.all(imageUploadRequests);

                if (newImages.length > 0) {
                    const newImageUrls = await Promise.all(newImages.map(img => handleImageUpload(img)));
                    const newImageRequests = newImageUrls.map(url => fetch(`${fetchUrl}/imagen/createImagen`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ RutaArchivo: url, idAlojamiento: parseInt(id) }),
                    }));
                    await Promise.all(newImageRequests);
                }

                setAlertMessage('Alojamiento, servicios e imágenes actualizados con éxito');
                setAlertType('success');
            } catch (error) {
                setAlertMessage('Ocurrió un error al actualizar el alojamiento, servicios o imágenes');
                setAlertType('error');
                console.error("Hubo un error al realizar la solicitud PUT:", error);
            }
        } else {
            try {
                const response = await fetch(`${fetchUrl}/alojamiento/createAlojamiento`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(alojamientoData),
                });

                if (!response.ok) {
                    throw new Error('Error al crear el alojamiento');
                }

                const res = await response.json();
                const alojamientoId = res.id;

                const serviceRequests = selectedServices.map(idServicio => {
                    const servicioSeleccionado = { idAlojamiento: parseInt(alojamientoId), idServicio: parseInt(idServicio) };
                    return fetch(`${fetchUrl}/alojamientosServicios/createAlojamientoServicio`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(servicioSeleccionado),
                    });
                });

                await Promise.all(serviceRequests);

                const imageUploadRequests = imagenes.map(async img => {
                    if (img.file) {
                        const imageUrl = await handleImageUpload(img.file);
                        return fetch(`${fetchUrl}/imagen/createImagen`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ RutaArchivo: imageUrl, idAlojamiento: parseInt(alojamientoId) }),
                        });
                    }
                });

                await Promise.all(imageUploadRequests);

                if (newImages.length > 0) {
                    const newImageUrls = await Promise.all(newImages.map(img => handleImageUpload(img)));
                    const newImageRequests = newImageUrls.map(url => fetch(`${fetchUrl}/imagen/createImagen`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ RutaArchivo: url, idAlojamiento: parseInt(alojamientoId) }),
                    }));
                    await Promise.all(newImageRequests);
                }

                setAlertMessage('Alojamiento, servicios e imágenes creados con éxito');
                setAlertType('success');
            } catch (error) {
                setAlertMessage('Ocurrió un error al crear el alojamiento, servicios o imágenes');
                setAlertType('error');
                console.error("Hubo un error al realizar la solicitud POST:", error);
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
                    <fieldset className='fieldset'>
                        <legend>Imágenes</legend>
                        <div>
                            <div className='fieldsetImagenesAlojamiento'>
                                {imagenes.map((imagen) => (
                                    <div key={imagen.idImagen} className='imagenAlojamiento'>
                                        <img src={imagen.RutaArchivo} alt={`Imagen ${imagen.idImagen}`} className='imagenEditar' />
                                        <div className='botonesImagenesAlojamiento'>
                                            <button type="button" onClick={() => handleDeleteImage(imagen.idImagen)}>Eliminar</button>
                                            <input type="file" onChange={(e) => handleImageChange(e, imagen.idImagen)} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label>Agregar nuevas imágenes:</label>
                            <input type="file" multiple onChange={handleNewImagesChange} />
                        </div>
                    </fieldset>
                    <button type="submit" className='btn'>
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>
                        Guardar cambios
                    </button>
                    {alertMessage && <Alert message={alertMessage} type={alertType} />}
                    <NavLink to="/ListaAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
                </form>
            ) : (
                <p>Cargando datos del alojamiento...</p>
            )}
        </div>
    );
};
