import avatar from "../../assets/avatar.svg";
import airdrop_icon from "../../assets/airdrop_icon.svg";
import './userInfoBar.css';

const UserInfoBar = () => {
    return (
        <div className="user-info-bar">
            <div className="user-container">
                <div className="user-avatar-container">
                    <img src={avatar} alt="User Avatar" className="user-avatar" />
                </div>
                <div className="user-info">
                    <p className="username">@myusername</p>
                    <p className="status">Just play...</p>
                </div>
            </div>
            <div className="coin-container">
                <img src={airdrop_icon} alt="Coin" className="coin-icon" />
                <div className="coin-divider"/>
                <p className="coin-count">9 999 000</p>
            </div>
        </div>
    );
};

export default UserInfoBar;
