import avatar from "../../assets/avatar.svg";
import airdrop_icon from "../../assets/airdrop_icon.svg";
import './userInfoBar.css';

const getUsername = () => {
    //TODO: Fetch user's username from the server
    return '@myusername';
}

const getUserAirdropBalance = () => {
    //TODO: Fetch user's balance from the server
    return 9999000;
}

const formatNumber = (number) => {
    number = parseInt(number, 10);
    return number.toLocaleString('ru-RU');
}

const UserInfoBar = () => {
    return (
        <div className="user-info-bar">
            <div className="user-container">
                <div className="user-avatar-container">
                    <img src={avatar} alt="User Avatar" className="user-avatar" />
                </div>
                <div className="user-info">
                    <p className="username">{getUsername()}</p>
                    <p className="status">Just play...</p>
                </div>
            </div>
            <div className="coin-container">
                <img src={airdrop_icon} alt="Coin" className="coin-icon" />
                <div className="coin-divider"/>
                <p className="coin-count">{formatNumber(getUserAirdropBalance())}</p>
            </div>
        </div>
    );
};

export default UserInfoBar;
