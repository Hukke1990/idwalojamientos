import React from 'react';
import './GaleriaContenedor.css';
import { AlojamientoContenedor } from '../AlojamientoContenedor/AlojamientoContenedor';

export const GaleriaContenedor = ({ searchCriteria }) => {
    return (
        <div className='contenedorGaleria'>
            <AlojamientoContenedor searchCriteria={searchCriteria} />
        </div>
    );
};
