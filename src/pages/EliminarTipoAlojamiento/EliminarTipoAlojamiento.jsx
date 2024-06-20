import React from 'react'
import './EliminarTipoAlojamiento.css'
import { DeleteTipoAlojamiento } from '../../components/Form/DeleteTipoAlojamiento/DeleteTipoAlojamiento'
import { NavLink } from 'react-router-dom';
import { GetAllTiposAlojamiento } from '../../components/Form/GetAllTiposAlojamiento/GetAllTiposAlojamiento';

export const EliminarTipoAlojamiento = () => {
    return (
        <div className='contenedorEliminarAlojamiento'>
            <h2>Eliminar Tipo Alojamiento</h2>
            <GetAllTiposAlojamiento />
            <DeleteTipoAlojamiento />
            <button className='btnVolver'>
                <NavLink to="/AdministrarAlojamientos" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>
    )
}
