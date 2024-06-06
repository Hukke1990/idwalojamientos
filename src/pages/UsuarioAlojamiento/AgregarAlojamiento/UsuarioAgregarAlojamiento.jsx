import React from 'react'
import './UsusarioAgregarAlojamiento.css'
import { UsuarioAddAlojamiento } from '../../../components/Form/FormUsuario/UsuarioAddAlojamiento/UsuarioAddAlojamiento'

export const UsuarioAgregarAlojamiento = () => {
    return (
        <div className='contenedorUsuarioAgregarAlojamiento'>
            <h1>Agregar Alojamiento</h1>
            <p>Agrega un nuevo alojamiento</p>
            <UsuarioAddAlojamiento />
        </div>
    )
}
