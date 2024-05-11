import React, { Component } from 'react';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className='contenedorMenu'>
            <div className="menu">
                <ul>
                    <li><a className='btn' href="/#">
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                        Home</a></li>
                    <li><a className='btn' href="/#">
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                        Contacto</a></li>
                    <li><a className='btn' href="/#">
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                        Sobre nosotros</a></li>
                    <li><a className='btn' href="/#">
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                        Login</a></li>
                </ul>
            </div>
        </nav>
    );
}