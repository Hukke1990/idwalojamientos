import React from 'react'
import { NavLink } from 'react-router-dom';
import './AllServicios.css'
import { GetAllServicios } from '../../../components/Form/FromServicios/GetAllServicio/GetAllServicios';

export const AllServicios = () => {


    return (
        <div className='contenedorGetTipoAlojamientos'>
            <h2>Servicios</h2>
            <GetAllServicios />
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>

        </div>
    )
}
