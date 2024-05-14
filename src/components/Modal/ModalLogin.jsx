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
        <div className="contenedorModalLogin" onClick={onClose}>
            <div className="contenedorModalLogin" onClick={(e) => e.stopPropagation()}>
                <div className="modalLogin">
                    <h2>Bienvenido</h2>
                    <form className='contenedorInicioSesion'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        <button type="submit">Iniciar Sesion</button>
                    </form>
                    <p>No tienes cuenta? <a href="#">Registrate</a></p>
                    <button id='btnCloseModalLogin' onClick={handleModalClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal