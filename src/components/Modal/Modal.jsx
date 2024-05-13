import React from 'react'
import './Modal.css'


export const Modal = () => {
    if (!isOpen) return null



    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <h2>Modal Title</h2>
                <p>This is a modal content.</p>
                <button onClick={onClose}>Close Modal</button>
            </div>
        </div>
    );
};

