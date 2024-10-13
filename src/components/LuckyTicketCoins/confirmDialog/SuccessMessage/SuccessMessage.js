import React, { useEffect } from 'react';
import './successMessage.css';

const SuccessMessage = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="success-message">
            {message}
        </div>
    );
};

export default SuccessMessage;