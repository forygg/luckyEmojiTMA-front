import GameCard from '../GameCard/GameCard';
import ticket from '../../assets/ticket.svg';
import "./gameCards.css";  // Import the custom CSS file

const GameCards = () => {
    return (
        <div className="game-cards-container">
            <GameCard
                title="LuckyTicket"
                description="Win every hour! Guaranteed prize for all participants."
                icon={ticket}
            />
            <GameCard
                title="LuckyEmoji"
                description="How fast are you? Catch several emoji in a row..."
                icon={ticket}
            />
        </div>
    );
};

export default GameCards;
