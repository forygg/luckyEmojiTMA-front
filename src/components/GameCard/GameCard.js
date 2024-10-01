import "./gameCard.css";

const GameCard = ({ title, description, icon }) => {
    return (
        <div className="game-card">
            <img src={icon} alt={`${title} icon`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default GameCard;
