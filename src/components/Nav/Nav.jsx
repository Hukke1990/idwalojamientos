import React, { Component } from 'react';
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className='contenedorMenu'>
            <div className="menu">
                <ul>
                    <li><NavLink exact to="/" activeClassName="active" className="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        home
                    </NavLink></li>
                    <li><NavLink to="/Contact" activeClassName="active" className="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        contacto
                    </NavLink></li>
                    <li><NavLink to="/About" activeClassName="active" className="btn">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        sobre nosotros
                    </NavLink></li>
                    <li><NavLink to="/Login" activeClassName="active" className="btn login">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        login
                    </NavLink></li>
                </ul>
            </div>
        </nav>
    );
}