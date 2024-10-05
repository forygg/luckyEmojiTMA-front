import React from 'react';
import LuckyTicketPrizeSelection from '../PrizeSelection/LuckyTicketPrizeSelection';
import './luckyTicketGamePlaceholder.css';

const LuckyTicketGamePlaceholder = ({ game }) => {
    return <LuckyTicketPrizeSelection game={game} />;
};

export default LuckyTicketGamePlaceholder;