import React from 'react'
import './UsusarioAgregarAlojamiento.css'
import { UsuarioAddAlojamiento } from '../../../components/Form/FormUsuario/UsuarioAddAlojamiento/UsuarioAddAlojamiento'
import { NavLink } from 'react-router-dom'

export const UsuarioAgregarAlojamiento = () => {
    return (
        <div className='contenedorUsuarioAgregarAlojamiento'>
            <h1>Agregar Alojamiento</h1>
            <p>Agrega un nuevo alojamiento</p>
            <UsuarioAddAlojamiento />
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    )
}
