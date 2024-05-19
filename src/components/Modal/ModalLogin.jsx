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
                    <form>
                        <div>
                            <input type="email" placeholder="Email" id="email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" id="password" />
                        </div>
                        <button>
                            Iniciar Sesion
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