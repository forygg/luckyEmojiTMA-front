import "./gameCard.css";

const GameCard = ({ title, description, icon, buttonText, buttonIcon, onClick }) => {
    return (
        <div className="game-card" onClick={onClick}>
            <img src={icon} alt={`${title} icon`} />
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className="game-card-divider"></div>
            {title ? (
                <h3>{title}</h3>
            ) : (
                <button className="game-card-button">
                    <span className="button-text">{buttonText}</span>
                    <img src={buttonIcon} alt="button icon" className="button-icon" />
                </button>
            )}
        </div>
    );
};

export default GameCard;