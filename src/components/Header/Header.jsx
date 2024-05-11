import React from 'react';
import { Logo } from './logo/Logo';
import './header.css';

export const Header = () => {
    return (
        <div className='contenedor'>
            <div className='logo'>
                <p>IDW <span>Alojamientos</span></p>
                <ul>
                    <li><i class="bi bi-house"></i></li>
                    <li><i class="bi bi-house-heart"></i></li>
                    <li><i class="bi bi-house"></i></li>
                    <li><i class="bi bi-house-heart"></i></li>
                    <li><i class="bi bi-house"></i></li>
                </ul>
            </div>
        </div>
    );
}