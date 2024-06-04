import React from 'react'
import './UsuarioAddAlojamiento.css'
import { NavLink } from 'react-router-dom'

export const UsuarioAddAlojamiento = () => {
    return (
        <div className='contenedorUsuarioAddAlojamiento'>
            <h2>Alojamientos</h2>
            <div className='contenedorLinks'>
                <NavLink to="/AgregarTipoAlojamiento" className='adminAlojamiento'><i class="bi bi-house-add-fill"></i>Agregar Alojamiento</NavLink>
                <NavLink to="/GetTipoAlojamiento" className='adminAlojamiento'><i class="bi bi-card-text"></i>Obtener Alojamientos</NavLink>
                <NavLink to="/AllTiposAlojamientos" className='adminAlojamiento'><i class="bi bi-houses-fill"></i>Obtener todos los Alojamientos</NavLink>
                <NavLink to="/EditarTipoAlojamiento" className={'adminAlojamiento'}><i class="bi bi-pencil-square"></i>Editar Alojamiento</NavLink>
                <NavLink to="/EliminarTipoAlojamiento" className={'adminAlojamiento'}><i class="bi bi-house-dash-fill"></i>Eliminar Alojamiento</NavLink>
            </div>
        </div>
    )
}

