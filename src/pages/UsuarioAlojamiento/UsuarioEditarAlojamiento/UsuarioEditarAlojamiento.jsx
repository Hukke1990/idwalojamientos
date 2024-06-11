import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './UsuarioEditarAlojamiento.css';
import { Alert } from '../../../components/Alert/Alert';
import { TipoAlojamientoDetail } from '../../../components/Form/TipoAlojamientoDetail/TipoAlojamientoDetail';

export const UsuarioEditarAlojamiento = () => {
    const { id } = useParams();
    const [alojamientoData, setAlojamientoData] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const { alojamientos } = TipoAlojamientoDetail();

    useEffect(() => {
        const fetchAlojamiento = async () => {
            try {
                const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setAlojamientoData(data);
                } else {
                    console.error('Error al obtener el alojamiento');
                    setAlertMessage('Error al obtener el alojamiento.');
                    setAlertType('error');
                }
            } catch (error) {
                console.error('Error: ', error);
                setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
                setAlertType('error');
            }
        };
        fetchAlojamiento();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAlojamientoData({ ...alojamientoData, [name]: value });
        if (alertMessage) {
            setAlertMessage('');
            setAlertType('');
        }
    };

    const actualizarAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/alojamiento/putAlojamiento/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(alojamientoData),
            });
            if (response.ok) {
                setAlertMessage('Alojamiento actualizado con éxito.');
                setAlertType('success');
            } else {
                console.error('Error al actualizar el alojamiento');
                setAlertMessage('Error al actualizar el alojamiento.');
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlertType('error');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actualizarAlojamiento();
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
                                placeholder={alojamientoData.Titulo}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Descripcion:
                            <textarea
                                type="number"
                                name="Descripcion"
                                placeholder={alojamientoData.Descripcion}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Tipo alojamiento:
                            <select
                                name="TipoAlojamiento"
                                value={alojamientoData.TipoAlojamiento}
                                onChange={handleInputChange}
                                className='labelSelect'
                            >
                                {alojamientos.map((tipo) => (
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
                                placeholder={alojamientoData.Latitud}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Longitud:
                            <input
                                type="number"
                                name="Latitud"
                                placeholder={alojamientoData.Longitud}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Precio por día:
                            <input
                                type="number"
                                name="PrecioPorDia"
                                placeholder={alojamientoData.PrecioPorDia}
                                // value={alojamientoData.PrecioPorDia}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Cantidad de dormitorios:
                            <input
                                type="number"
                                name="Latitud"
                                placeholder={alojamientoData.CantidadDormitorios}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label>
                            Cantidad de baños:
                            <input
                                type="number"
                                name="Latitud"
                                placeholder={alojamientoData.CantidadBanios}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            />
                        </label>
                        <label className='labelSelect'>
                            Estado:
                            <select
                                name="Estado"
                                value={alojamientoData.Estado}
                                onChange={handleInputChange}
                                className='inputEditAlojamiento'
                            >
                                <option value="Disponible">Disponible</option>
                                <option value="Reservado">Reservado</option>
                            </select>
                        </label>

                        {/* Añadir otros campos según sea necesario */}
                    </fieldset>
                    {alertMessage && <Alert message={alertMessage} type={alertType} className="custom-style" />}
                    <button type='submit' className='btn btnEditAlojamiento'>
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>
                        Actualizar Alojamiento
                    </button>
                </form>
            ) : (
                <p>Cargando datos del alojamiento...</p>
            )}

            <button className='btnVolver'>
                <NavLink to="/ListaAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    );
};
