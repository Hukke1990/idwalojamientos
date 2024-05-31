import React from 'react'
import { AddTipoAlojamiento } from '../../components/Form/AddTipoAlojamiento/AddTipoAlojamiento'

export const AgregarAlojamiento = () => {


    return (
        <div className='contenedorAddAlojamientos'>
            <h2>Agregar Tipo Alojamiento</h2>
            <p>Ingresa el tipo de alojamiento que desea registrar</p>
            < AddTipoAlojamiento />
        </div>
    )
}

