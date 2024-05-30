import React from 'react'
import { AddTipoAlojamiento } from '../../components/Form/AddTipoAlojamiento/AddTipoAlojamiento'

export const AgregarAlojamiento = () => {


    return (
        <div className='contenedorAddAlojamientos'>
            <h2>Agregar Alojamiento</h2>
            <p>Ingresa los datos del alojamiento que desea registrar</p>
            < AddTipoAlojamiento />
        </div>
    )
}

