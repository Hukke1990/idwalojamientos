import React from 'react'
import './About.css'

export const About = () => {
    return (
        <div className='contenedorAbout'>
            <div className="contenedorIntroduccion">
                <h1>Conocenos!</h1>
                <p>Bienvenidos a <span>IDW Alojamientos</span>, tu socio confiable en el mundo de los alquileres. Desde nuestra fundación en 2005, nos hemos dedicado a ofrecer soluciones integrales para satisfacer las necesidades de alquiler de nuestros clientes. </p>
            </div>
            <div className="contenedorObjectivos">
                <h2>Nuestros Objetivos</h2>
                <p>Nuestra misión es proporcionar a nuestros clientes experiencias de alquiler excepcionales, brindando atención personalizada, transparencia y calidad en cada transacción. Nos comprometemos a: </p>
                <ul>
                    <li><i class="bi bi-1-square"></i>Ofrecer propiedades de alta calidad y bien mantenidas. </li>
                    <li><i class="bi bi-2-square"></i>Garantizar un proceso de alquiler transparente y sin complicaciones. </li>
                    <li><i class="bi bi-3-square"></i>Brindar un servicio al cliente excepcional y personalizado. </li>
                </ul>
            </div>
            <div className="contenedorEquipoTrabajo">
                <h2>Nuestro Equipo de Trabajo</h2>
                <p>Nuestro equipo está formado por profesionales dedicados y apasionados por el sector inmobiliario. Desde nuestros agentes de alquiler hasta nuestro equipo de mantenimiento, todos trabajamos juntos para asegurarnos de que tu experiencia de alquiler sea excelente. </p>
                <div className="contenedorIntegrantes">
                    <ul>
                        <li><img src="images/integrantes/gaston.jpg" alt="" />
                            <h3>Gaston Bordet</h3>
                            <p><span>Edad: </span> 34</p>
                            <p><span>Localidad: </span>Concepcion del Uruguay</p></li>
                        <li><img src="images/integrantes/leo.jpg" alt="" />
                            <h3>Marcelo Giles</h3>
                            <p><span>Edad: </span> 20</p>
                            <p><span>Localidad: </span>Concordia</p></li>
                        <li><img src="images/integrantes/ludmila.jpg" alt="" />
                            <h3>Ludmila Armua</h3>
                            <p><span>Edad: </span> 23</p>
                            <p><span>Localidad: </span>Concordia</p></li>
                    </ul>
                </div>
            </div>
            <div className="serviciosDestacados">
                <h2>Servicios Destacados</h2>
                <ul>
                    <li><i class="bi bi-1-square"></i><span>Alquileres Residenciales:</span> Ofrecemos una amplia gama de propiedades residenciales, desde apartamentos modernos hasta casas espaciosas, para satisfacer las necesidades de nuestros clientes.</li>
                    <li><i class="bi bi-2-square"></i><span>Alquileres Comerciales:</span> Contamos con locales comerciales y oficinas en ubicaciones estratégicas para impulsar el éxito de tu negocio. </li>
                    <li><i class="bi bi-3-square"></i><span>Gestión de Propiedades:</span> Proporcionamos servicios de gestión de propiedades para propietarios que desean maximizar el rendimiento de sus inversiones. </li>
                </ul>
            </div>

        </div>
    )
}
