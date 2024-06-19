import React from 'react';
import './AlojamientoCard.css';
import { NavLink } from 'react-router-dom';

export const AlojamientoCard = ({ card }) => {
  return (
    <figure className='contenedorCard'>
      <NavLink to={`/idAlojamiento/${card.idAlojamiento}`} className='card'>
        {card.imagenes && card.imagenes.length > 0 && (
          <img src={card.imagenes[0].RutaArchivo} alt="Imagen del alojamiento" />
        )}
        <h3>{card.Titulo}</h3>
        <p><span>Localidad: </span>{card.Latitud}, {card.Longitud}</p>
        <p><span>Tipo de alojamiento: </span>{card.Descripcion}</p>
        <p><span>Disponibilidad: </span>{card.Estado}</p>
        <p><span>Precio por día: </span>${card.PrecioPorDia}</p>
      </NavLink>
    </figure>
  );
};
