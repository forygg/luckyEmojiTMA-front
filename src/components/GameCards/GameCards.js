import GameCard from '../GameCard/GameCard';
import ticket from '../../assets/ticket.svg';
import Emoji from '../../assets/gc_Emoji.png';
import "./gameCards.css";

const GameCards = () => {
    return (
        <div className="game-cards-container">
            <GameCard
                icon={ticket}
                description="Win every hour! Guaranteed prize for all participants."
                title="LuckyTicket"
            />
            <GameCard
                title="LuckyEmoji"
                description="How fast are you? Catch several Emoji in a row, at least three."
                icon={Emoji}
            />
        </div>
    );
};

export default GameCards;
