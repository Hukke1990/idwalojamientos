import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/ModalLogin';
import useNavSticky from './NavSticky';

export const Nav = () => {
    const [modalOpen, setModalOpen] = useState(false);
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
                        <i className="bi bi-house icon"></i><p className='text'>home</p> {/* Icono de Bootstrap */}
                    </NavLink></li>
                    <li><NavLink to="/Contact" activeClassName="active" className="btn contact">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i className="bi bi-envelope icon"></i><p className='text'>contacto</p> {/* Icono de Bootstrap */}
                    </NavLink></li>
                    <li><NavLink to="/About" activeClassName="active" className="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i className="bi bi-info-circle icon"></i><p className='text'>sobre nosotros</p> {/* Icono de Bootstrap */}
                    </NavLink></li>
                    <button className="btn login" onClick={openModal}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <i class="bi bi-person icon"></i>
                        <p className='text'>login</p>
                        {modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} />}
                    </button>
                </ul>
            </div>
        </nav>
    );
}
