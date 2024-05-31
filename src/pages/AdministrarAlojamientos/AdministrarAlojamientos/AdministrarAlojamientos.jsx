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
            </div>
        </div>
    )
}

