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
                    <h2>PROXIMAMENTE</h2>
                    <button id='btnCloseModalLogin' onClick={handleModalClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal