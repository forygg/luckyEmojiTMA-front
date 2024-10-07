import React, { useState } from 'react';
import profileIcon from '../../assets/profile.svg';
import tasksIcon from '../../assets/tasks.svg';
import gamesIcon from '../../assets/games.svg';
import leaderIcon from '../../assets/leader.svg';
import paytableIcon from '../../assets/paytable.svg';
import profileIconActive from '../../assets/profile-active.svg';
import tasksIconActive from '../../assets/tasks-active.svg';
import gamesIconActive from '../../assets/games-active.svg';
import leaderIconActive from '../../assets/leader-active.svg';
import paytableIconActive from '../../assets/paytable-active.svg';
import "./bottomNavigation.css";

const BottomNavigation = ({ onTabChange, hasNewTasks }) => {
    const [activeTab, setActiveTab] = useState('Games');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    const getIcon = (tab, icon, activeIcon) => {
        return activeTab === tab ? activeIcon : icon;
    };

    return (
        <div className="bottom-navigation">
            <div
                className={`nav-item ${activeTab === 'Profile' ? 'active' : ''}`}
                onClick={() => handleTabClick('Profile')}
            >
                <img src={getIcon('Profile', profileIcon, profileIconActive)} alt="Profile" className="nav-icon" />
                <p className={`nav-text ${activeTab === 'Profile' ? 'active' : ''}`}>Profile</p>
            </div>
            <div
                className={`nav-item ${activeTab === 'Tasks' ? 'active' : ''}`}
                onClick={() => handleTabClick('Tasks')}
            >
                <img src={getIcon('Tasks', tasksIcon, tasksIconActive)} alt="Tasks" className="nav-icon" />
                {hasNewTasks && <div className="red-dot"></div>}
                <p className={`nav-text ${activeTab === 'Tasks' ? 'active' : ''}`}>Tasks</p>
            </div>
            <div
                className={`nav-item ${activeTab === 'Games' ? 'active' : ''}`}
                onClick={() => handleTabClick('Games')}
            >
                <img src={getIcon('Games', gamesIcon, gamesIconActive)} alt="Games" className="nav-icon" />
                <p className={`nav-text ${activeTab === 'Games' ? 'active' : ''}`}>Games</p>
            </div>
            <div
                className={`nav-item ${activeTab === 'Leader' ? 'active' : ''}`}
                onClick={() => handleTabClick('Leader')}
            >
                <img src={getIcon('Leader', leaderIcon, leaderIconActive)} alt="Leader" className="nav-icon" />
                <p className={`nav-text ${activeTab === 'Leader' ? 'active' : ''}`}>Leader</p>
            </div>
            <div
                className={`nav-item ${activeTab === 'PayTable' ? 'active' : ''}`}
                onClick={() => handleTabClick('PayTable')}
            >
                <img src={getIcon('PayTable', paytableIcon, paytableIconActive)} alt="Pay Table" className="nav-icon" />
                <p className={`nav-text ${activeTab === 'PayTable' ? 'active' : ''}`}>Pay Table</p>
            </div>
        </div>
    );
};

export default BottomNavigation;
