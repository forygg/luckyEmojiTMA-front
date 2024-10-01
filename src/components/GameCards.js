import GameCard from './GameCard';
import ticket from '../assets/ticket.svg';
const GameCards = () => {
    return (
        <div className="flex justify-around mt-4">
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