import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className='contenedorMenu'>
            <div className="menu">
                <ul>
                    <li><Link to="/" class="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        home
                    </Link></li>
                    <li><Link to="/Contact" class="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        contacto
                    </Link></li>
                    <li><Link to="/About" class="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        sobre nosotros
                    </Link></li>
                    <li><Link to="#" class="btn login">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        login
                    </Link></li>
                </ul>
            </div>
        </nav>
    );
}