import React from 'react'
import { NavLink } from 'react-router-dom';


export const AdministrarAlojamientos = () => {


    return (
        <div>
            <h1>Administrar Alojamientos</h1>
            <NavLink to="/AgregarAlojamiento" className='addAlojamiento'>Agregar Alojamiento</NavLink>
            <a href="#">Editar Alojamiento</a>
            <a href="#">Eliminar Alojamiento</a>
        </div>
    )
}

