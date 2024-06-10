import React from 'react';
import { NavLink } from 'react-router-dom';
import { GetAllAlojamientosDetail } from '../../../components/Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const ListaAlojamientos = () => {
    return (
        <div className='contenedorListaAlojamientos'>
            <h2>Lista de Alojamientos</h2>
            <GetAllAlojamientosDetail render={({ alojamientos, alertMessage, alertType }) => (
                <>
                    {alertMessage && <div className={`alert ${alertType}`}>{alertMessage}</div>}
                    <ul>
                        {alojamientos.map(alojamiento => (
                            <li key={alojamiento.idAlojamiento}>
                                <span>{alojamiento.Titulo}</span>
                                <NavLink to={`/UsuarioEditarAlojamiento/${alojamiento.idAlojamiento}`}>
                                    Editar
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </>
            )} />
        </div>
    );
};
