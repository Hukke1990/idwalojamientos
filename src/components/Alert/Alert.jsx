import React from 'react';
import './Alert.css';

export const Alert = ({ message, type }) => {
    return (
        <div className={`alert ${type}`}>
            {message}
        </div>
    );
};

