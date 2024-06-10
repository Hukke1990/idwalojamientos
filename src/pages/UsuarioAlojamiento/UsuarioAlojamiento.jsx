import React from 'react'
import './UsuarioAlojamiento.css'
import { NavLink } from 'react-router-dom'

export const UsuarioAlojamiento = () => {
    return (
        <div className='contenedorUsuarioAddAlojamiento'>
            <h2>Alojamientos</h2>
            <div className='contenedorLinks'>
                <NavLink to="/UsuarioAgregarAlojamiento" className='adminAlojamiento'><i class="bi bi-house-add-fill"></i>Agregar Alojamiento</NavLink>
                <NavLink to="/GetAlojamientoId" className='adminAlojamiento'><i class="bi bi-card-text"></i>Obtener Alojamientos</NavLink>
                <NavLink to="/TodosAlojamientos" className='adminAlojamiento'><i class="bi bi-houses-fill"></i>Obtener todos los Alojamientos</NavLink>
                <NavLink to="/ListaAlojamientos" className={'adminAlojamiento'}><i class="bi bi-pencil-square"></i>Editar Alojamiento</NavLink>
                <NavLink to="/EliminarTipoAlojamiento" className={'adminAlojamiento'}><i class="bi bi-house-dash-fill"></i>Eliminar Alojamiento</NavLink>
            </div>
            <button className='btnVolver'>
                <NavLink to="/" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    )
}

