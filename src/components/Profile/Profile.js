import React, {useState} from 'react';
import gameCoin from "../../assets/game-coin.svg";
import jackpotIcon from "../../assets/jackpot-icon.svg";
import spinsIcon from "../../assets/spins-icon.svg";
import tonIcon from "../../assets/ton-icon.svg";
import "./profile.css"
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

const getTonBalance = () => {
    let balance = 105.19;
    const formattedBalance = parseFloat(balance.toFixed(5));
    return formattedBalance.toLocaleString('ru-RU');
}

const Profile = () => {
    const [activeProfileTab, setActiveProfileTab] = useState("Friends");

    const handleTabClick = (tab) => {
        setActiveProfileTab(tab);
    };

    const renderTab = () => {
        switch (activeProfileTab) {
            case "Friends":
                return <div>Friends</div>;
            case "Exchange":
                return <div>Exchange</div>;
            case "Transactions":
                return <div>Transactions</div>;
            case "Support":
                return <div>Support</div>;
            default:
                return "Friends"
        }
    }

    return (
        <div className="profile-container">
            <div className="user-balance">
                <div className="balance-coins">
                    <img src={gameCoin} alt="gameCoinImg"/>
                    <div className="divider"></div>
                    <span>{getCoinsBalance()}</span>
                </div>
                <div className="balance-jackpot">
                    <img src={jackpotIcon} alt="gameJackpotImg"/>
                    <div className="divider"></div>
                    <span>{getJackpotBalance()}</span>
                </div>
                <div className="balance-spins">
                    <img src={spinsIcon} alt="gameSpinsImg"/>
                    <div className="divider"></div>
                    <span>{getSpinsBalance()}</span>
                </div>
            </div>
            <div className="wallet-container">
                <button className="connect-wallet">Connect Wallet</button>
                <div className="balance-ton">
                    <img src={tonIcon} alt="tonImg"/>
                    <div className="divider"></div>
                    <span>{getTonBalance()}</span>
                </div>
            </div>
            <div className="profile-navigation">
                <div
                    className={`nav-item ${activeProfileTab === 'Friends' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Friends')}
                >
                    <p className={`nav-text ${activeProfileTab === 'Friends' ? 'active' : ''}`}>Friends</p>
                </div>
                <div
                    className={`nav-item ${activeProfileTab === 'Exchange' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Exchange')}
                >
                    <p className={`nav-text ${activeProfileTab === 'Exchange' ? 'active' : ''}`}>Exchange</p>
                </div>
                <div
                    className={`nav-item ${activeProfileTab === 'Transactions' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Transactions')}
                >
                    <p className={`nav-text ${activeProfileTab === 'Transactions' ? 'active' : ''}`}>Transactions</p>
                </div>
                <div
                    className={`nav-item ${activeProfileTab === 'Support' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Support')}
                >
                    <p className={`nav-text ${activeProfileTab === 'Support' ? 'active' : ''}`}>Support</p>
                </div>
            </div>
            <div className="profileTab-container">
                {renderTab()}
            </div>
        </div>
    )
};

export default Profile;