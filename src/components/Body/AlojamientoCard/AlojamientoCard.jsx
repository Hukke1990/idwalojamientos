import React from 'react';
import './AlojamientoCard.css';
import { NavLink } from 'react-router-dom';

const formatearPrecio = (precio) => {
  const numeroPrecio = Number(precio);
  if (isNaN(numeroPrecio)) return 'Precio inválido';

  const partes = numeroPrecio.toFixed(3).split('.');
  return `${partes[0]}.${partes[1]},00`;
};

export const AlojamientoCard = ({ card }) => {
  return (
    <figure className='contenedorCard'>
      <NavLink to={`/idAlojamiento/${card.idAlojamiento}`} className='card'>
        {card.imagenes && card.imagenes.length > 0 && (
          <img src={card.imagenes[0].RutaArchivo} alt="Imagen del alojamiento" />
        )}
        <h3>{card.Titulo}</h3>
        <p><span>Localidad: </span>{card.Latitud}, {card.Longitud}</p>
        <p><span>Tipo de alojamiento: </span>{card.tipoAlojamiento ? card.tipoAlojamiento.Descripcion : 'N/A'}</p>
        <p><span>Disponibilidad: </span>{card.Estado}</p>
        <p><span>Precio por día: </span>${formatearPrecio(card.PrecioPorDia)}</p>
      </NavLink>
    </figure>
  );
};
