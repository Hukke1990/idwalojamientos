import React, { Component } from 'react';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className='contenedorMenu'>
            <div className="menu">
                <ul>
                    <li><a href="#" class="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        home
                    </a></li>
                    <li><a href="#" class="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        contacto
                    </a></li>
                    <li><a href="#" class="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        sobre nosotros
                    </a></li>
                    <li><a href="#" class="btn login">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        login
                    </a></li>
                </ul>
            </div>
        </nav>
    );
}