import React from 'react';
import './ListaAlojamientos.css';
import { NavLink } from 'react-router-dom';
import { GetAllAlojamientosDetail } from '../../../components/Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const ListaAlojamientos = () => {
    return (
        <div className='contenedorListaAlojamientos'>
            <h2>Lista de Alojamientos</h2>
            <GetAllAlojamientosDetail render={({ alojamientos, alertMessage, alertType }) => (
                <>
                    <ul>
                        {alojamientos.map(alojamiento => (
                            <li key={alojamiento.idAlojamiento}>
                                <NavLink className='linkEditarAlojamiento' to={`/UsuarioEditarAlojamiento/${alojamiento.idAlojamiento}`}>
                                    <i class="bi bi-pencil-square"></i>Editar
                                </NavLink>
                                <span>{alojamiento.Titulo}</span>
                            </li>
                        ))}
                    </ul>
                    {alertMessage && <div className={`alert ${alertType}`}>{alertMessage}</div>}
                    <button className='btnVolver'>
                        <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
                    </button>
                </>
            )} />
        </div>
    );
};
