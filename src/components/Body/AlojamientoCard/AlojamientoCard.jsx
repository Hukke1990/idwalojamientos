import React from 'react'
import './AlojamientoCard.css'
import { NavLink } from 'react-router-dom'

export const AlojamientoCard = ({ card }) => {
  return (
    <figure className='contenedorCard'>
      <NavLink to={`/idAlojamiento/${card.idAlojamiento}`} className='card'>
        {/* <Link to={`/idAlojamiento/${card.idAlojamiento}`}><img src={card.imagenCover.img} alt="imagen casa" /></Link> */}
        <h3>{card.Titulo}</h3>
        <p><span>L<span className='quesi-queno-1'>o</span>cal<span className='quesi-queno-3'>id</span>a<span className='quesi-queno-2'>d</span>: </span>{card.Latitud}, {card.Longitud}</p>
        <p><span>Dis<span className='quesi-queno-2'>pon</span>ibi<span className='quesi-queno-2'>l</span>idad: </span>{card.Estado}</p>
        <p><span>Pr<span className='quesi-queno-3'>e</span>cio <span className='quesi-queno-1'>por</span> di<span className='quesi-queno-2'>a</span>: $</span>{card.PrecioPorDia}</p>
      </NavLink>
    </figure>
  )
}
