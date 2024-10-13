import React, { useState } from 'react';
import './customDialog.css';
import SuccessMessage from './SuccessMessage/SuccessMessage';

const CustomDialog = ({ isOpen, onClose, onConfirm }) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleConfirm = () => {
        setShowSuccess(true);
        onConfirm();
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return (
        <>
            {showSuccess && (
                <SuccessMessage
                    message="Success! You’re in the game. Transactions on the TON network can sometimes take up to 2 minutes. Your ticket will be displayed once the payment is confirmed."
                    onClose={() => setShowSuccess(false)}
                />
            )}
            {isOpen && (
                <div className="dialog-overlay">
                    <div className="dialog-content long-message">
                        <p>You are purchasing a game ticket!<br /> The ticket costs 0.05 TonCoins, which will be deducted from your Game Balance. After confirming the purchase, refunds are not possible. The organizers do not guarantee a win for every ticket. This ticket is not a lottery ticket, and the gameplay process is not considered a lottery. By clicking the "Accept" button, you agree to the terms and release the organizers from any liability.</p>
                        <div className="dialog-divider"></div>
                        <div className="dialog-buttons">
                            <button onClick={onClose}>Cancel</button>
                            <button onClick={handleConfirm}>Accept</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomDialog;