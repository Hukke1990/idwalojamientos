import React from 'react'
import './ModalLogin.css'


const Modal = ({ isOpen, onClose }) => {
    // Lógica para cerrar el modal al presionar el botón de cerrar
    const handleModalClose = (e) => {
        // Evitar la propagación del evento hacia arriba para que no se cierre el modal al hacer clic dentro de él
        e.stopPropagation();
        // Lógica de cierre del modal al presionar el botón de cerrar
        onClose();
    };

    // Verificar si el modal está abierto
    if (!isOpen) {
        return null; // No renderizar nada si el modal está cerrado
    }

    return (
        <div className="contenedorModal" onClick={onClose}>
            <div className="contenedorModal" onClick={(e) => e.stopPropagation()}>
                <div className="modal">
                    <button id='btnCloseModal' onClick={handleModalClose}><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Modal