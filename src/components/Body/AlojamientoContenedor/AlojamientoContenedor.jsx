import React, { useState } from 'react';
import { AlojamientoList } from '../AlojamientoList/AlojamientoList';
import './AlojamientoContenedor.css';
import { GetAllAlojamientosDetail } from '../../Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail';

export const AlojamientoContenedor = () => {
  const [alojamiento, setAlojamiento] = useState([]);

  return (
    <GetAllAlojamientosDetail
      render={({ alojamientos, alertMessage, alertType }) => {
        if (alertType === 'error') {
          return <p className='error'>{alertMessage}</p>;
        }

        if (!alojamientos.length) {
          return <p className='cargando'>Cargando...</p>;
        }

        setAlojamiento(alojamientos);

        return <AlojamientoList alojamientoInfo={alojamiento} />;
      }}
    />
  );
};
