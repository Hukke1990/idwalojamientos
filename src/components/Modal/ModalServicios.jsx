import React from 'react'
import './ModalServicios.css'


const Modal = ({ isOpen, onClose }) => {
    const handleModalClose = (e) => {
        e.stopPropagation();
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="contenedorModal" onClick={onClose}>
            <div className="contenedorModal" onClick={(e) => e.stopPropagation()}>
                <div className="modal">
                    <h2>+ Servicios</h2>
                    <h3>Baño</h3>
                    <ul>
                        <li>Secador de pelo</li>
                        <li>Productos de limpieza</li>
                        <li>Agua caliente</li>
                    </ul>
                    <h3>Dormitorio y lavadero</h3>
                    <ul>
                        <li>Lavarropas</li>
                        <li>Servicios basicos
                            <p>Toallas, sábanas, jabón y papel higiénico</p>
                        </li>
                        <li>Ropa de cama</li>
                        <li>Espacio para guardar ropa</li>
                    </ul>
                    <h3>Entretenimiento</h3>
                    <ul>
                        <li>Televisor</li>
                    </ul>
                    <h3>Calefaccion y refrigeracion</h3>
                    <ul>
                        <li>Aire acondicionado</li>
                    </ul>
                    <h3>Seguridad del hogar</h3>
                    <ul>
                        <li>Detector de humo</li>
                        <li>Alarma</li>
                        <li>Seguridad privada</li>
                    </ul>
                    <h3>Cocina y comedor</h3>
                    <ul>
                        <li>Cocina</li>
                        <li>Heladera</li>
                        <li>Utensilios basicos de cocina
                            <p>Ollas y sartenes, aceite, sal y pimienta</p>
                        </li>
                        <li>Vajilla y cubiertos
                            <p>Bols, palitos chinos, platos, tazas, etc.</p>
                        </li>
                        <li>Cocina</li>
                        <li>Horno</li>
                        <li>Mesa de comedor</li>
                    </ul>
                    <h3>Estacionamiento e instalaciones</h3>
                    <ul>
                        <li>Estacionamiento gratis en la propiedad</li>
                    </ul>
                    <h3>No incluido</h3>
                    <ul className='noIncluido'>
                        <li>Camaras de seguridad exteriores en la propiedad</li>
                        <li>Detector de monóxido de carbono
                            <p>Es posible que este lugar no tenga un detector de monóxido de carbono. Si tenés alguna pregunta, comunicate con el anfitrión.</p>
                        </li>
                    </ul>
                    <button id='btnCloseModal' onClick={handleModalClose}><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Modal