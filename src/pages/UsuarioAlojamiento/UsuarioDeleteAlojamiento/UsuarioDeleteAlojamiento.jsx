import React from 'react'
import './UsuarioDeleteAlojamiento.css'
import { GetAllAlojamientosDetail } from '../../../components/Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail'
import { UsuarioEliminarAlojamiento } from '../../../components/Form/FormUsuario/UsuarioEliminarAlojamiento/UsuarioEliminarAlojamiento'

export const UsuarioDeleteAlojamiento = () => {
    return (
        <GetAllAlojamientosDetail render={({ alojamientos, alertMessage, alertType }) => (
            <div className='contenedorDeleteAlojamientos'>
                <div className='contenedorGetAlojamientos contenedorGetAlojamientosDelete'>
                    <ul>
                        {alojamientos.map((alojamiento) => (
                            <li key={alojamiento.idAlojamiento}>
                                <p><span className='label'>ID:</span> {alojamiento.idAlojamiento}</p>
                                <p><span className='label'>Titulo:</span> {alojamiento.Titulo}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {alertMessage && (
                    <div className={`alert ${alertType}`}>{alertMessage}</div>
                )}
                <UsuarioEliminarAlojamiento />
            </div>
        )} />
    )
}