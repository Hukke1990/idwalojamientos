import React, { useState } from 'react';
import './UsuarioTodosAlojamientos.css';
import { GetAllAlojamientosDetail } from '../GetAllAlojamientosDetail/GetAllAlojamientosDetail';
import { TipoAlojamientoDetail } from '../../TipoAlojamientoDetail/TipoAlojamientoDetail';

export const UsuarioTodosAlojamientos = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        Titulo: '',
        Estado: '',
        idTipoAlojamiento: '',
    });

    const { tiposAlojamiento } = TipoAlojamientoDetail();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    const filterAlojamientos = (alojamientos) => {
        return alojamientos.filter(alojamiento => {
            const matchesTitulo = searchCriteria.Titulo === '' || alojamiento.Titulo.toLowerCase().includes(searchCriteria.Titulo.toLowerCase());
            const matchesEstado = searchCriteria.Estado === '' || alojamiento.Estado === searchCriteria.Estado;
            const matchesTipoAlojamiento = searchCriteria.idTipoAlojamiento === '' || alojamiento.idTipoAlojamiento.toString() === searchCriteria.idTipoAlojamiento.toString();

            return matchesTitulo && matchesEstado && matchesTipoAlojamiento;
        });
    };

    const getTipoAlojamientoDescripcion = (idTipoAlojamiento) => {
        const tipo = tiposAlojamiento.find(tipo => tipo.idTipoAlojamiento === idTipoAlojamiento);
        return tipo ? tipo.Descripcion : 'Desconocido';
    };

    return (
        <GetAllAlojamientosDetail render={({ alojamientos, alertMessage, alertType }) => (
            <div className='contenedorGetAlojamientos'>
                <h1>{alojamientos.length} Alojamientos encontrados</h1>
                <div className='contenedorFiltrosAlojamiento'>
                    <input
                        type='text'
                        name='Titulo'
                        placeholder='Buscar por título'
                        value={searchCriteria.Titulo}
                        onChange={handleInputChange}
                    />
                    <select
                        name='Estado'
                        value={searchCriteria.Estado}
                        onChange={handleInputChange}
                    >
                        <option value=''>Todos los estados</option>
                        <option value='Disponible'>Disponible</option>
                        <option value='Reservado'>Reservado</option>
                    </select>
                    <select
                        name='idTipoAlojamiento'
                        value={searchCriteria.idTipoAlojamiento}
                        onChange={handleInputChange}
                    >
                        <option value=''>Todos los tipos de alojamiento</option>
                        {tiposAlojamiento.map(tipo => (
                            <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                                {tipo.Descripcion}
                            </option>
                        ))}
                    </select>
                </div>
                <ul>
                    {filterAlojamientos(alojamientos).map((alojamiento) => (
                        <li key={alojamiento.idAlojamiento}>
                            <h2>{alojamiento.Titulo}</h2>
                            <p><span className='label'>ID:</span> {alojamiento.idAlojamiento}</p>
                            <p><span className='label'>Descripcion:</span> {alojamiento.Descripcion}</p>
                            <p><span className='label'>Tipo alojamiento:</span> {getTipoAlojamientoDescripcion(alojamiento.idTipoAlojamiento)}</p>
                            <p><span className='label'>Latitud:</span> {alojamiento.Latitud}</p>
                            <p><span className='label'>Longitud:</span> {alojamiento.Longitud}</p>
                            <p><span className='label'>Precio por día:</span> ${alojamiento.PrecioPorDia}</p>
                            <p><span className='label'>Cantidad dormitorios:</span> {alojamiento.CantidadDormitorios}</p>
                            <p><span className='label'>Cantidad baños:</span> {alojamiento.CantidadBanios}</p>
                            <p><span className='label'>Estado:</span> <span className={alojamiento.Estado === 'Disponible' ? 'estadoDisponible' : 'estadoReservado'}>{alojamiento.Estado}</span></p>
                        </li>
                    ))}
                </ul>
                {alertMessage && (
                    <div className={`alert ${alertType}`}>{alertMessage}</div>
                )}
            </div>
        )} />
    );
};
