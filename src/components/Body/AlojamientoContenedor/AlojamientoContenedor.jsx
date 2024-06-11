import React, { useState } from 'react';
import { AlojamientoList } from '../AlojamientoList/AlojamientoList';
import { GetAllAlojamientosDetail } from '../../Form/FormUsuario/GetAllAlojamientosDetail/GetAllAlojamientosDetail';
import './AlojamientoContenedor.css';

export const AlojamientoContenedor = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderAlojamientos = ({ alojamientos, alertMessage, alertType }) => {
    if (alertType === 'error') {
      setError(alertMessage);
    } else {
      setAlojamientos(alojamientos);
    }
    setIsLoading(false);
  };

  return (
    <>
      <GetAllAlojamientosDetail render={renderAlojamientos} />
      {!isLoading && !error && alojamientos.length > 0 && (
        <AlojamientoList alojamientoInfo={alojamientos} />
      )}
    </>
  );
};
