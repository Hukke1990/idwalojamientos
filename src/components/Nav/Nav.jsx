import React, { Component, useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/ModalLogin';
import useNavSticky from './NavSticky';

export const Nav = () => {

    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar la apertura del modal
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useNavSticky();

    return (
        <nav className='contenedorMenu'>
            <div className="menu">
                <ul className="contenedorNav">
                    <li><NavLink exact to="/" activeClassName="active" className="btn home" id='home'>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i className="bi bi-house"></i>home {/* Icono de Bootstrap */}
                    </NavLink></li>
                    <li><NavLink to="/Contact" activeClassName="active" className="btn contact">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i className="bi bi-envelope"></i>contacto {/* Icono de Bootstrap */}
                    </NavLink></li>
                    <li><NavLink to="/About" activeClassName="active" className="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i className="bi bi-info-circle"></i>sobre nosotros {/* Icono de Bootstrap */}
                    </NavLink></li>
                    <button className="btn login" onClick={openModal}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i className="bi bi-person"></i>login {/* Icono de Bootstrap */}
                        <Modal isOpen={modalOpen} onClose={closeModal} /> {/* Agrega el modal aquí */}
                    </button>
                </ul>
            </div>
        </nav>
    );
}