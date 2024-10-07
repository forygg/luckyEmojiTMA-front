import React from "react";
import gameCoin from "../../assets/game-coin.svg";
import jackpotIcon from "../../assets/jackpot-icon.svg";
import spinsIcon from "../../assets/spins-icon.svg";
import "./luckyEmojiGame.css";


const getCoinsBalance = () => {
    //TODO: Fetch user's balance from the server
    let balance = 10000;
    return balance.toLocaleString('ru-RU');
}

const getSpinsBalance = () => {
    //TODO: Fetch user's balance from the server
    let balance = 100000;
    return balance.toLocaleString('ru-RU');
}

const getJackpotBalance = () => {
    //TODO: Fetch user's balance from the server
    let balance = 100;
    return balance.toLocaleString('ru-RU');
}

const LuckyEmojiGame = () => {
    return (
        <div className="user-balance">
            <div className="balance-coins">
                <img src={ gameCoin }  alt="gameCoinImg"/>
                <div className="divider"></div>
                <span>{getCoinsBalance()}</span>
            </div>
            <div className="balance-jackpot">
                <img src={ jackpotIcon }  alt="gameJackpotImg"/>
                <div className="divider"></div>
                <span>{getJackpotBalance()}</span>
            </div>
            <div className="balance-spins">
                <img src={ spinsIcon } alt="gameSpinsImg"/>
                <div className="divider"></div>
                <span>{getSpinsBalance()}</span>
            </div>
        </div>
    );
}

export default LuckyEmojiGame;