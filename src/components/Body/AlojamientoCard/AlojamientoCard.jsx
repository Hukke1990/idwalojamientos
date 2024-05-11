import React from 'react'
import './AlojamientoCard.css'
import { Link } from 'react-router-dom'

export const AlojamientoCard = ({ card }) => {

  return (
    <figure className='contenedorCard'>
      <div className='card'>
        <Link to='/AlojamientoDetalles'><img src={card.imagenCover.img} alt="imagen casa" /></Link>
        {/* Estos datos deben ser tomados de data.json */}
        <h3>{card.titulo}</h3>
        <p><span>L<span className='quesi-queno-1'>o</span>cal<span className='quesi-queno-3'>id</span>a<span className='quesi-queno-2'>d</span>: </span>{card.ubicacion.latitud}, {card.ubicacion.longitud}</p>
        <p><span>Dis<span className='quesi-queno-2'>pon</span>ibi<span className='quesi-queno-2'>l</span>idad: </span>{card.estado}</p>
        <p><span>Pr<span className='quesi-queno-3'>e</span>cio <span className='quesi-queno-1'>por</span> di<span className='quesi-queno-2'>a</span>: $</span>{card.precioDia}</p>
      </div>
    </figure>
  )
}
