import React from 'react'
import { NavLink } from 'react-router-dom';
import './AllTiposAlojamientos.css'
import { GetAllTiposAlojamiento } from '../../components/Form/GetAllTiposAlojamiento/GetAllTiposAlojamiento'

export const AllTiposAlojamientos = () => {


    return (
        <div className='contenedorGetTipoAlojamientos'>
            <h2>Tipos de Alojamientos</h2>
            <GetAllTiposAlojamiento />
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>

        </div>
    )
}
