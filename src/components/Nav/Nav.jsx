import React, { Component } from 'react';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className='menu'>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Contacto</a></li>
                <li><a href="/#">Sobre nosotros</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
        </nav>
    );
}