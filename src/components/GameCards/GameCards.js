import GameCard from '../GameCard/GameCard';
import ticket from '../../assets/ticket.svg';
import Emoji from '../../assets/gc_Emoji.png';
import "./gameCards.css";

const GameCards = ({ onGameStart }) => {
    return (
        <div className="game-cards-container">
            <GameCard
                icon={ticket}
                description="Win every hour! Guaranteed prize for all participants."
                title="LuckyTicket"
                onClick={() => onGameStart('LuckyTicket')}
            />
            <GameCard
                title="LuckyEmoji"
                description="How fast are you? Catch several Emoji in a row, at least three."
                icon={Emoji}
                onClick={() => onGameStart('LuckyEmoji')}
            />
        </div>
    );
};

export default GameCards;