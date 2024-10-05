import React, { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard';
import './gamePlaceholder.css';

const GamePlaceholder = ({ game }) => {
    const [countdown, setCountdown] = useState(2);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    if (countdown > 0) {
        return <div className="countdown">Game starts in {countdown} seconds...</div>;
    }

    return (
        <div className="game-placeholder">
            <p>Choose your prize:</p>
            <div className="prize-cards">
                <GameCard
                    title=""
                    description="Prize Option 1"
                    icon={game.icon}
                    buttonText="Select"
                />
                <GameCard
                    title=""
                    description="Prize Option 2"
                    icon={game.icon}
                    buttonText="Select"
                />
            </div>
        </div>
    );
};

export default GamePlaceholder;