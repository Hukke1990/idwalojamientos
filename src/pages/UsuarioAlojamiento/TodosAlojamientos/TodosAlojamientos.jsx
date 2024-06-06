import React from 'react'
import './TodosAlojamientos.css'
import { UsuarioTodosAlojamientos } from '../../../components/Form/FormUsuario/UsuarioTodosAlojamientos/UsuarioTodosAlojamientos'
import { NavLink } from 'react-router-dom'

export const TodosAlojamientos = () => {
    return (
        <div className='contenedorTodosAlojamientos'>
            <UsuarioTodosAlojamientos />
            <button className='btnVolver'>
                <NavLink to="/UsuarioAddAlojamiento" className='linkAdminAlojamiento'>Volver</NavLink>
            </button>
        </div>

    )
}