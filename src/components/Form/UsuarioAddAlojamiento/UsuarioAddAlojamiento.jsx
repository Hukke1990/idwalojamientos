// src/components/AgregarAlojamiento/AgregarAlojamiento.js
import React, { useState } from 'react';
import './UsuarioAddAlojamiento.css';
import { TipoAlojamientoDetail } from '../TipoAlojamientoDetail/TipoAlojamientoDetail';
import { Alert } from '../../Alert/Alert';

export const UsuarioAddAlojamiento = () => {
    const { alojamientos } = TipoAlojamientoDetail();
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipoAlojamiento, setTipoAlojamiento] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [precioPorDia, setPrecioPorDia] = useState('');
    const [dormitorios, setDormitorios] = useState('');
    const [banos, setBanos] = useState('');
    const [estado, setEstado] = useState('Disponible');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'titulo':
                setTitulo(value);
                break;
            case 'descripcion':
                setDescripcion(value);
                break;
            case 'tipoAlojamiento':
                setTipoAlojamiento(value);
                break;
            case 'latitud':
                setLatitud(value);
                break;
            case 'longitud':
                setLongitud(value);
                break;
            case 'precioPorDia':
                setPrecioPorDia(value);
                break;
            case 'dormitorios':
                setDormitorios(value);
                break;
            case 'banos':
                setBanos(value);
                break;
            case 'estado':
                setEstado(value);
                break;
            default:
                break;
        }

        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const agregarAlojamiento = async () => {
        try {
            const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Titulo: titulo,
                    Descripcion: descripcion,
                    TipoAlojamiento: tipoAlojamiento,
                    Latitud: latitud,
                    Longitud: longitud,
                    'Precio por día': precioPorDia,
                    'Cantidad de dormitorios': dormitorios,
                    'Cantidad de baños': banos,
                    Estado: estado,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                setAlertMessage('Alojamiento agregado con éxito.');
                setAlertType('success');
            } else {
                const errorText = await response.text();
                console.error('Error al agregar el alojamiento:', errorText);
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
        <div className='contenedorAgregarAlojamiento'>
            <h2>Agregar Alojamiento</h2>
            <input
                type="text"
                name="titulo"
                value={titulo}
                onChange={handleInputChange}
                placeholder="Ingrese el título del alojamiento"
                className='inputAgregarAlojamiento'
            />
            <input
                type="text"
                name="descripcion"
                value={descripcion}
                onChange={handleInputChange}
                placeholder="Ingrese la descripción del alojamiento"
                className='inputAgregarAlojamiento'
            />
            <select
                name="tipoAlojamiento"
                value={tipoAlojamiento}
                onChange={handleInputChange}
                className='selectAgregarAlojamiento'
            >
                <option value="">Seleccione el tipo de alojamiento</option>
                {alojamientos.map(alojamiento => (
                    <option key={alojamiento.idTipoAlojamiento} value={alojamiento.idTipoAlojamiento}>
                        {alojamiento.Descripcion}
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="latitud"
                value={latitud}
                onChange={handleInputChange}
                placeholder="Ingrese la latitud"
                className='inputAgregarAlojamiento'
            />
            <input
                type="text"
                name="longitud"
                value={longitud}
                onChange={handleInputChange}
                placeholder="Ingrese la longitud"
                className='inputAgregarAlojamiento'
            />
            <input
                type="number"
                name="precioPorDia"
                value={precioPorDia}
                onChange={handleInputChange}
                placeholder="Ingrese el precio por día"
                className='inputAgregarAlojamiento'
            />
            <input
                type="number"
                name="dormitorios"
                value={dormitorios}
                onChange={handleInputChange}
                placeholder="Ingrese la cantidad de dormitorios"
                className='inputAgregarAlojamiento'
            />
            <input
                type="number"
                name="banos"
                value={banos}
                onChange={handleInputChange}
                placeholder="Ingrese la cantidad de baños"
                className='inputAgregarAlojamiento'
            />
            <select
                name="estado"
                value={estado}
                onChange={handleInputChange}
                className='selectAgregarAlojamiento'
            >
                <option value="">Seleccione el estado del alojamiento</option>
                <option value="Disponible">Disponible</option>
                <option value="Reservado">Reservado</option>
            </select>
            {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}

            <button className='btn btnAgregarAlojamiento' onClick={agregarAlojamiento}>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                Agregar Alojamiento
            </button>
        </div>
    );
};