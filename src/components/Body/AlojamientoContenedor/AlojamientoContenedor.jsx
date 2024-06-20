import React, { useState, useEffect } from 'react';
import { AlojamientoList } from '../AlojamientoList/AlojamientoList';
import './AlojamientoContenedor.css';
import { GetAllAlojamientosDetail } from '../../Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const AlojamientoContenedor = ({ searchCriteria }) => {
  const [alojamiento, setAlojamiento] = useState([]);
  const [filteredAlojamiento, setFilteredAlojamiento] = useState([]);

  useEffect(() => {
    if (searchCriteria && alojamiento.length) {
      const filtered = alojamiento.filter(a => {
        const matchesTipoAlojamiento = searchCriteria.idTipoAlojamiento === '' || a.idTipoAlojamiento === parseInt(searchCriteria.idTipoAlojamiento);
        const matchesEstado = searchCriteria.Estado === '' || a.Estado === searchCriteria.Estado;
        const matchesPrecioMin = searchCriteria.precioMin === '' || a.PrecioPorDia >= parseFloat(searchCriteria.precioMin);
        const matchesPrecioMax = searchCriteria.precioMax === '' || a.PrecioPorDia <= parseFloat(searchCriteria.precioMax);
        const matchesDormitorios = searchCriteria.dormitorios === '' || a.CantidadDormitorios === parseInt(searchCriteria.dormitorios);
        const matchesBanos = searchCriteria.banos === '' || a.CantidadBanios === parseInt(searchCriteria.banos);

        return matchesTipoAlojamiento && matchesEstado && matchesPrecioMin && matchesPrecioMax && matchesDormitorios && matchesBanos;
      });
      setFilteredAlojamiento(filtered);
    }
  }, [searchCriteria, alojamiento]);

  return (
    <GetAllAlojamientosDetail
      render={({ alojamientos, alertMessage, alertType }) => {
        if (alertType === 'error') {
          return <p className='error'>{alertMessage}</p>;
        }

        if (!alojamientos.length) {
          return <p className='cargando'>Cargando...</p>;
        }

        if (!filteredAlojamiento.length) {
          return <p className='noResultados'>No se encontraron resultados</p>;
        }

        setAlojamiento(alojamientos);

        return <AlojamientoList alojamientoInfo={filteredAlojamiento} />;
      }}
    />
  );
};
