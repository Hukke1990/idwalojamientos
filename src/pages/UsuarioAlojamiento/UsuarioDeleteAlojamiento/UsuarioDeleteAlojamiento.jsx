import React from 'react'
import './UsuarioDeleteAlojamiento.css'
import { GetAllAlojamientosDetail } from '../../../components/Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail'
import { UsuarioEliminarAlojamiento } from '../../../components/Form/FormUsuario/UsuarioEliminarAlojamiento/UsuarioEliminarAlojamiento'
import { NavLink } from 'react-router-dom'


export const UsuarioDeleteAlojamiento = () => {
    return (
        <GetAllAlojamientosDetail render={({ alojamientos, alertMessage, alertType }) => (
            <div className='contenedorDeleteAlojamientos'>
                <h2>Eliminar Alojamiento</h2>
                <div className='contenedorGetAlojamientosDelete'>
                    <ul>
                        {alojamientos.map((alojamiento) => (
                            <li key={alojamiento.idAlojamiento}>
                                <p>
                                    <span className='label'>ID:</span> {alojamiento.idAlojamiento}
                                    <span className='label'>Titulo:</span> {alojamiento.Titulo}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                {alertMessage && (
                    <div className={`alert ${alertType}`}>{alertMessage}</div>
                )}
                <UsuarioEliminarAlojamiento />
                <button className='btnVolver'>
                    <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
                </button>
            </div>
        )} />
    )
}