import React from 'react'
import './EliminarServicio.css'
import { NavLink } from 'react-router-dom';
import { GetAllServicios } from '../../../components/Form/FromServicios/GetAllServicio/GetAllServicios';
import { DeleteServicio } from '../../../components/Form/FromServicios/DeleteServicio/DeleteServicio';

export const EliminarServicio = () => {
    return (
        <div className='contenedorEliminarAlojamiento'>
            <h2>Eliminar Servicio por ID</h2>
            <GetAllServicios />
            <DeleteServicio />
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    )
}
