import React from 'react'

export const AlojamientoCard = ({ card }) => {
  console.log(card, "componenete AlojamientoCard")
  return (
    <figure>
      <img src={card.imagenCover.img} alt="casa colonial" height={200} width={300} />
      {/* Estos datos deben ser tomados de data.json */}
      <h3>{card.titulo}</h3>
      <p><span>Localidad: </span>{card.ubicacion.latitud}, {card.ubicacion.longitud}</p>
      <p><span>Disponibilidad: </span>{card.estado}</p>
      <p><span>Precio por dia: $</span>{card.precioDia}</p>
    </figure>
  )
}
