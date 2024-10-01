import profileIcon from '../../assets/profile.svg';
import tasksIcon from '../../assets/tasks.svg';
import gamesIcon from '../../assets/games.svg';
import leaderIcon from '../../assets/leader.svg';
import paytableIcon from '../../assets/paytable.svg';
import "./bottomNavigation.css";

const BottomNavigation = () => {
    return (
        <div className="bottom-navigation">
            <div className="nav-item">
                <img src={profileIcon} alt="Profile" className="nav-icon" />
                <p className="nav-text">Profile</p>
            </div>
            <div className="nav-item">
                <img src={tasksIcon} alt="Tasks" className="nav-icon" />
                <p className="nav-text">Tasks</p>
            </div>
            <div className="nav-item">
                <img src={gamesIcon} alt="Games" className="nav-icon" />
                <p className="nav-text-selected">Games</p>
            </div>
            <div className="nav-item">
                <img src={leaderIcon} alt="Leader" className="nav-icon" />
                <p className="nav-text">Leader</p>
            </div>
            <div className="nav-item">
                <img src={paytableIcon} alt="Pay Table" className="nav-icon" />
                <p className="nav-text">Pay Table</p>
            </div>
        </div>
    );
};

export default BottomNavigation;