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
                <ul>
                    <li><NavLink exact to="/" activeClassName="active" className="btn home" id='home'>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        home
                    </NavLink></li>
                    <li><NavLink to="/Contact" activeClassName="active" className="btn contact">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        contacto
                    </NavLink></li>
                    <li><NavLink to="/About" activeClassName="active" className="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        sobre nosotros
                    </NavLink></li>
                    <button className="btn login" onClick={openModal}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        login
                        <Modal isOpen={modalOpen} onClose={closeModal} /> {/* Agrega el modal aquí */}
                    </button>
                </ul>
            </div>
        </nav>
    );
}