import "./gameCard.css";

const GameCard = ({ title, description, icon, buttonText }) => {
    return (
        <div className="game-card">
            <img src={icon} alt={`${title} icon`} />
            <p>{description}</p>
            <div className="game-card-divider"></div>
            {title ? <h3>{title}</h3> : <button>{buttonText}</button>}
        </div>
    );
};

export default GameCard;