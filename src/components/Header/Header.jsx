import React from 'react';
import { Logo } from './logo/Logo';
import './header.css';

export const Header = () => {
    return (
        <div className='contenedorHeader'>
            <div className='contenedorLogo '>
                <div className='logo'>
                    <p className='logo-p1'>I<span className='quesi-queno-2'>D</span>W</p>
                    <p className='logo-p2'><span className='quesi-queno-2'>A</span>lo<span className='quesi-queno-1'>j</span>amien<span className='quesi-queno-3'>t</span>os</p>
                    <ul>
                        <li className='quesi-queno-1'><i class="bi bi-house"></i></li>
                        <li className='quesi-queno-2'><i class="bi bi-house-heart"></i></li>
                        <li className=''><i class="bi bi-house"></i></li>
                        <li className=''><i class="bi bi-house-heart"></i></li>
                        <li className='quesi-queno-3'><i class="bi bi-house"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}