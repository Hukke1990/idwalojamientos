import React from 'react';
import { GaleriaContenedor } from './GaleriaContenedor/GaleriaContenedor';
import './Body.css';

export const Body = ({ searchCriteria }) => {
  return (
    <div className='contenedorBody'>
      <GaleriaContenedor searchCriteria={searchCriteria} />
    </div>
  );
}
