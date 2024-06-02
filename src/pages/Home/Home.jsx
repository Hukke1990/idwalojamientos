import React from 'react'
import { Body } from '../../components/Body/Body'
import { NavLink } from 'react-router-dom';
import './Home.css'

export const Home = () => {
    return (
        <body>
            <div className="contenedorOpciones">
                <button className="btn ">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    <NavLink to="/AdministrarAlojamientos" className='administrarAlojamientos'>Administrar Alojamientos</NavLink>
                </button>
            </div>
            <Body />
        </body>
    )
}

