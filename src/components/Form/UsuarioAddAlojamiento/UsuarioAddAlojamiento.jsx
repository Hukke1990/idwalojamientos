import React, { useState } from 'react';
import './UsuarioAddAlojamiento.css';
import { TipoAlojamientoDetail } from '../TipoAlojamientoDetail/TipoAlojamientoDetail';
import { Alert } from '../../Alert/Alert';

export const UsuarioAddAlojamiento = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const { alojamientos } = TipoAlojamientoDetail();
    const [formData, setFormData] = useState({
        Titulo: '',
        Descripcion: '',
        TipoAlojamiento: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        agregarAlojamiento();
    };

    const agregarAlojamiento = async () => {
        try {
            const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Alojamiento agregado:', data);
                setAlertMessage('Alojamiento agregado con éxito.');
                setAlertType('success');
            } else {
                const errorData = await response.json();
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

    return (
        <div>
            <form className='contenedorAgregarAlojamiento' onSubmit={handleSubmit}>
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
                    name="TipoAlojamiento"
                    value={formData.TipoAlojamiento}
                    onChange={handleInputChange}>
                    <option value="">Seleccione un tipo de alojamiento</option>
                    {alojamientos.map(alojamiento => (
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
}
