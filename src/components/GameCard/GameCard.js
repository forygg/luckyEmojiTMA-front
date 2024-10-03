import "./gameCard.css";

const GameCard = ({ title, description, icon }) => {
    return (
        <div className="game-card">
            <img src={icon} alt={`${title} icon`}/>
            <p>{description}</p>
            <div className="game-card-divider"></div>
            <h3>{title}</h3>
        </div>
    );
};

export default GameCard;
