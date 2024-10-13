import React from 'react';
import './walletNotConnectedDialog.css';

const WalletNotConnectedDialog = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="dialog-overlay">
                <div className="dialog-content short-message">
                    <h2>Error</h2>
                    <p>You cannot purchase a ticket with TonCoin because your Wallet is not connected. Please go to the "Profile" section and connect your Wallet.</p>
                    <div className="dialog-divider"></div>
                    <div className="dialog-buttons">
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default WalletNotConnectedDialog;