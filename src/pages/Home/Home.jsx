import React, { useState } from 'react';
import { Body } from '../../components/Body/Body';
import { NavLink } from 'react-router-dom';
import { TipoAlojamientoDetail } from '../../components/Form/TipoAlojamientoDetail/TipoAlojamientoDetail';
import './Home.css';

export const Home = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        idTipoAlojamiento: '',
        Estado: '',
        precioMin: '',
        precioMax: '',
        dormitorios: '',
        banos: ''
    });

    const { tiposAlojamiento, alertMessage, alertType } = TipoAlojamientoDetail();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    return (
        <div>
            <div className="contenedorOpciones">
                <button className="btn">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    <NavLink to="/AdministrarAlojamientos" className='administrarAlojamientos'>Administrar</NavLink>
                </button>
            </div>
            <div className='contenedorHome'>
                <fieldset className='contenedorFiltrosAlojamientoHome'>
                    <legend>Filtros</legend>
                    {alertType === 'error' && <p className='error'>{alertMessage}</p>}
                    <select
                        name='idTipoAlojamiento'
                        value={searchCriteria.idTipoAlojamiento}
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>Seleccione tipo de alojamiento</option>
                        {tiposAlojamiento.map(tipo => (
                            <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                                {tipo.Descripcion}
                            </option>
                        ))}
                    </select>
                    <select
                        name='Estado'
                        value={searchCriteria.Estado}
                        onChange={handleInputChange}
                    >
                        <option value=''>Todos los estados</option>
                        <option value='Disponible'>Disponible</option>
                        <option value='Reservado'>Reservado</option>
                    </select>
                    <input
                        type='number'
                        name='precioMin'
                        placeholder='Precio mínimo'
                        value={searchCriteria.precioMin}
                        onChange={handleInputChange}
                    />
                    <input
                        type='number'
                        name='precioMax'
                        placeholder='Precio máximo'
                        value={searchCriteria.precioMax}
                        onChange={handleInputChange}
                    />
                    <input
                        type='number'
                        name='dormitorios'
                        placeholder='Cantidad de dormitorios'
                        value={searchCriteria.dormitorios}
                        onChange={handleInputChange}
                    />
                    <input
                        type='number'
                        name='banos'
                        placeholder='Cantidad de baños'
                        value={searchCriteria.banos}
                        onChange={handleInputChange}
                    />
                </fieldset>
                <Body searchCriteria={searchCriteria} />
            </div>
        </div>
    );
}
