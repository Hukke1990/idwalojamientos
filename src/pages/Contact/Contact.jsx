import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {

    const [formData, setFormData] = useState({
        nombre: '', // Nombre del usuario
        email: '', // Correo electrónico del usuario
        contraseña: '', // Contraseña del usuario
        telefono: '', // Teléfono del usuario
        consulta: '', // Consulta del usuario
        preferencia: 'email', // Preferencia de contacto (email o teléfono)
    });


    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.nombre) errors.nombre = 'Nombre completo es requerido';
        if (!formData.email) {
            errors.email = 'Correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Correo electrónico no es válido';
        }
        if (!formData.contraseña) errors.contraseña = 'Contraseña es requerida';
        if (!formData.telefono) errors.telefono = 'Teléfono es requerido';
        if (!formData.consulta) errors.consulta = 'Consulta es requerida';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            console.log('Formulario enviado:', formData);
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className='contenedorContact'>
            <div className='contenedorIntro'>
                <h2>Informacion de contacto</h2>
                <div className='cotenedorInfContacto'>
                    <div className='contenedorInformacionContacto'>
                        <h3>Informacion</h3>
                        <p><i class="bi bi-geo-alt-fill"></i>Calle 123, Paraná, Entre Rios</p>
                        <p><i class="bi bi-telephone"></i>0800-123-456</p>
                        <p><i class="bi bi-whatsapp"></i>011-123-456</p>
                        <p><i class="bi bi-envelope-at-fill"></i>contactoidw@idwalojamientos.com</p>
                    </div>
                    <div className='contenedorRedesSociales'>
                        <h3>Redes Sociales</h3>
                        <a href='/#'><i class="bi bi-facebook"></i>/idwAlojamientos</a>
                        <a href='/#'><i class="bi bi-twitter-x"></i>@idwAlojamientos</a>
                        <a href='/#'><i class="bi bi-instagram"></i>/idwAlojamientos</a>
                    </div>
                </div>
                <p>Pongase en contacto con nosotros, recuerder que nuestro horario de atencion es de Lun a Vie de 9 a 18hs</p>
            </div>
            <div className='contenedorFieldset'>
                <form onSubmit={handleSubmit}>
                    <fieldset className='fieldset'>
                        <legend>Contactenos</legend>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre completo"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                        <input
                            type="password"
                            name="contraseña"
                            placeholder="Contraseña"
                            value={formData.contraseña}
                            onChange={handleChange}
                        />
                        {formErrors.contraseña && <p className="error">{formErrors.contraseña}</p>}
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                        {formErrors.telefono && <p className="error">{formErrors.telefono}</p>}
                        <label className="contacto" htmlFor="consulta">Consulta:</label>
                        <textarea
                            name="consulta"
                            rows="5"
                            value={formData.consulta}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {formErrors.consulta && <p className="error">{formErrors.consulta}</p>}
                        <label htmlFor="preferencia">Preferencia de Contacto:</label>
                        <select
                            name="preferencia"
                            value={formData.preferencia}
                            onChange={handleChange}
                        >
                            <option className='opcionPreferencia' value="email">Correo Electrónico</option>
                            <option className='opcionPreferencia' value="telefono">Teléfono</option>
                        </select>
                    </fieldset>
                    <div className='btnEnviar'>
                        <button type="submit" className="btn">
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                            <span className="span4"></span>
                            enviar
                        </button>
                    </div>
                </form>
                {isSubmitted && <p className='enviado'>Gracias por tu mensaje!. Nos pondremos en contacto contigo pronto.</p>}
            </div>
        </div>
    );
};
