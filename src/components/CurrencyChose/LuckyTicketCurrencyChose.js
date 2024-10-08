import React from 'react';
import GameCard from '../GameCard/GameCard';
import Ticket from '../../assets/ticket.svg';
import GameCoin from '../../assets/game-coin.svg';
import TonCoin from '../../assets/ton-coin.svg';
import './luckyTicketCurrencyChose.css';

const LuckyTicketCurrencyChose = ({ onCurrencySelect }) => {

    const handleCurrencySelect = (currency) => {
        onCurrencySelect(currency);
    };

    return (
        <div className="prize-selection">
                <>
                    <center><p>You’re a winner, make your move!<br />
                        You can still receive a guaranteed prize in <b>Game Coins</b>, even if your ticket loses.<br />
                        Or grab luck by the horns and win the <b>GRAND PRIZE</b> in TonCoin!</p></center>
                    <div className="prize-cards">
                        <GameCard
                            title=""
                            description="Win every hour!<br /> <b>Game Coins</b> are used to participate."
                            icon={Ticket}
                            buttonText="100 Coins"
                            buttonIcon={GameCoin}
                            onClick={() => handleCurrencySelect('LuckyTicketCoins')}
                        />
                        <GameCard
                            title=""
                            description="Win every hour!<br /> <b>TonCoin</b> is used to participate."
                            icon={Ticket}
                            buttonText="0,05 TonCoin"
                            buttonIcon={TonCoin}
                            onClick={() => handleCurrencySelect('LuckyTicketTons')}
                        />
                    </div>
                </>
        </div>
    );
};

export default LuckyTicketCurrencyChose;