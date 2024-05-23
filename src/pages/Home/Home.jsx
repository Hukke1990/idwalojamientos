import React from 'react'
import { Body } from '../../components/Body/Body'
import { NavLink } from 'react-router-dom';
import './Home.css'

export const Home = () => {
    return (
        <body>
            <div className="contenedorOpciones">
                <NavLink to="/AddAlojamiento">Agregar Alojamientos</NavLink>
            </div>
            <Body />
        </body>
    )
}

