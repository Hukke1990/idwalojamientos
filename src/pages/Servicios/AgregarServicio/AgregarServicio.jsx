import React from 'react'
import { AddServicio } from '../../../components/Form/FromServicios/AddServicio/AddServicio'

export const AgregarServicio = () => {


    return (
        <div className='contenedorAddAlojamientos'>
            <h2>Agregar Servicio</h2>
            <p>Ingresa el servicio que desea registrar</p>
            <AddServicio />
        </div>
    )
}

