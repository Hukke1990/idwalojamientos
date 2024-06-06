import React from 'react'
import './AdministrarAlojamientos.css'
import { NavLink } from 'react-router-dom';


export const AdministrarAlojamientos = () => {


    return (
        <div className='contenedorAdministrador'>
            <h2>Administrar Alojamientos</h2>
            <div className='contenedorLinks'>
                <NavLink to="/AgregarTipoAlojamiento" className='adminAlojamiento'><i class="bi bi-house-add-fill"></i>Agregar tipo Alojamiento</NavLink>
                <NavLink to="/GetTipoAlojamiento" className='adminAlojamiento'><i class="bi bi-card-text"></i>Obtener tipo Alojamientos</NavLink>
                <NavLink to="/AllTiposAlojamientos" className='adminAlojamiento'><i class="bi bi-houses-fill"></i>Obtener todos los tipo Alojamientos</NavLink>
                <NavLink to="/EditarTipoAlojamiento" className={'adminAlojamiento'}><i class="bi bi-pencil-square"></i>Editar Tipo Alojamiento</NavLink>
                <NavLink to="/EliminarTipoAlojamiento" className={'adminAlojamiento'}><i class="bi bi-house-dash-fill"></i>Eliminar Tipo Alojamiento</NavLink>
            </div>
            <button className='btnVolver'>
                <NavLink to="/" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    )
}

