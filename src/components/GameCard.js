const GameCard = ({ title, description, icon }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <img src={icon} alt={`${title} icon`} className="mx-auto w-80px h-37.4px mb-4" />
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
};
export default GameCard;