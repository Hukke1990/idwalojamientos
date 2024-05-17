import React from 'react'
import './ModalLogin.css'


const Modal = ({ isOpen, onClose }) => {

    const handleModalClose = (e) => {
        e.stopPropagation();
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="contenedorModalLogin" onClick={onClose}>
            <div className="contenedorModalLogin" onClick={(e) => e.stopPropagation()}>
                <div className="modalLogin">
                    <h2>Bienvenido</h2>
                    <form className='contenedorInicioSesion'>
                        <div className="contenedorEmail">
                            <input type="email" placeholder="Email" id="email" />
                        </div>
                        <div className="contenedorPassword">
                            <input type="password" placeholder="Password" id="password" />
                        </div>
                        <button className='iniciarSesion'>
                            <p>Iniciar Sesion</p>
                        </button>
                    </form>
                    <p>No tienes cuenta? <a href="#">Registrate</a></p>
                    <button id='btnCloseModalLogin' onClick={handleModalClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal