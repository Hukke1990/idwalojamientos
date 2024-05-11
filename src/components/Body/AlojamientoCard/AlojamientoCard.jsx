import React from 'react'
import './AlojamientoCard.css'

export const AlojamientoCard = ({ card }) => {
  console.log(card, "componenete AlojamientoCard")
  return (
    <figure className='contenedorCard'>
      <div className='card'>
        <a href=""><img src={card.imagenCover.img} alt="casa colonial" /></a>
        {/* Estos datos deben ser tomados de data.json */}
        <h3>{card.titulo}</h3>
        <p><span className='quesi-queno-1'>Localidad: </span>{card.ubicacion.latitud}, {card.ubicacion.longitud}</p>
        <p><span className='quesi-queno-3'>Disponibilidad: </span>{card.estado}</p>
        <p><span className='quesi-queno-2'>Precio por dia: $</span>{card.precioDia}</p>
      </div>
    </figure>
  )
}
