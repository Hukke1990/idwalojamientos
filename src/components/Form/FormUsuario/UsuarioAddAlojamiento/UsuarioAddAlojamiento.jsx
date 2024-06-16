import React, { useState, useEffect } from 'react';
import './UsuarioAddAlojamiento.css';
import { TipoAlojamientoDetail } from '../../TipoAlojamientoDetail/TipoAlojamientoDetail';
import { ServiciosDetail } from '../../FromServicios/ServicioDetail/ServicioDetail';
import { Alert } from '../../../Alert/Alert';

export const UsuarioAddAlojamiento = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const { tiposAlojamiento } = TipoAlojamientoDetail();
    const { servicios } = ServiciosDetail();
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData, setFormData] = useState({
        Titulo: '',
        Descripcion: '',
        idTipoAlojamiento: '',
        Latitud: '',
        Longitud: '',
        PrecioPorDia: '',
        CantidadDormitorios: '',
        CantidadBanios: '',
        Estado: 'Disponible'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedServices([...selectedServices, value]);
        } else {
            setSelectedServices(selectedServices.filter(service => service !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const alojamientoResponse = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (alojamientoResponse.ok) {
                const alojamientoData = await alojamientoResponse.json();
                console.log('Alojamiento agregado:', alojamientoData);

                const idAlojamiento = alojamientoData.id;
                console.log('ID del Alojamiento:', idAlojamiento);

                // Agregar servicios al alojamiento
                for (const idServicio of selectedServices) {
                    console.log('Agregando servicio:', idServicio, 'al alojamiento:', idAlojamiento);
                    const servicioResponse = await fetch('http://localhost:3001/alojamientosServicios/createAlojamientoServicio', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            idAlojamiento: idAlojamiento,  // Utiliza el id del alojamiento creado
                            idServicio: idServicio
                        })
                    });

                    if (!servicioResponse.ok) {
                        throw new Error('Error al agregar el servicio al alojamiento');
                    } else {
                        console.log('Servicio agregado correctamente:', idServicio);
                    }
                }

                setAlertMessage('Alojamiento y servicios agregados con éxito.');
                setAlertType('success');
            } else {
                const errorData = await alojamientoResponse.json();
                console.error('Error al agregar el alojamiento:', errorData);
                setAlertMessage('Error al agregar el alojamiento.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error al agregar el alojamiento:', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };

    if (!tiposAlojamiento || !servicios) {
        return <div>Cargando...</div>; // Puedes mostrar un spinner de carga o un mensaje aquí
    }

    return (
        <div>
            <form className='contenedorAgregarAlojamiento' onSubmit={handleSubmit}>
                <fieldset className='fieldset'>
                    <legend>Agregar</legend>
                    <input
                        type="text"
                        name="Titulo"
                        placeholder="Título"
                        value={formData.Titulo}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="Descripcion"
                        placeholder="Descripcion"
                        value={formData.Descripcion}
                        onChange={handleInputChange}>
                    </textarea>
                    <select
                        name="idTipoAlojamiento"
                        value={formData.idTipoAlojamiento}
                        onChange={handleInputChange}>
                        <option value="">Seleccione un tipo de alojamiento</option>
                        {tiposAlojamiento.map(alojamiento => (
                            <option key={alojamiento.idTipoAlojamiento} value={alojamiento.idTipoAlojamiento}>
                                {alojamiento.Descripcion}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="Latitud"
                        placeholder="Latitud"
                        value={formData.Latitud}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="Longitud"
                        placeholder="Longitud"
                        value={formData.Longitud}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="PrecioPorDia"
                        placeholder="Precio por día"
                        value={formData.PrecioPorDia}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="CantidadDormitorios"
                        placeholder="Cantidad de dormitorios"
                        value={formData.CantidadDormitorios}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="CantidadBanios"
                        placeholder="Cantidad de baños"
                        value={formData.CantidadBanios}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="Estado"
                        value={formData.Estado}
                        onChange={handleInputChange}>
                        <option value="">Seleccione un estado</option>
                        <option value="Disponible">Disponible</option>
                        <option value="Reservado">Reservado</option>
                    </select>
                    <div className='fieldsetServiciosAlojamiento'>
                        Servicios:
                        {servicios.map(servicio => (
                            <label className='serviciosAlojamientoLabel' key={servicio.idServicio}>
                                <div className='checkbox'>
                                    <input
                                        type="checkbox"
                                        value={servicio.idServicio}
                                        onChange={handleServiceChange}
                                    />
                                </div>
                                <span>{servicio.Nombre}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                <button
                    className='btn btnAgregarAlojamiento'
                    type="submit">
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                    Agregar Alojamiento
                </button>
            </form>
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}
        </div>
    );
};
