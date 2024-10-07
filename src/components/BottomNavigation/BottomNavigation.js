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
            <div className={"nav-item"} onClick={() => handleTabClick('Profile')}>
                <img src={getIcon('Profile', profileIcon, profileIconActive)} alt="Profile" className="nav-icon" />
                <p className={activeTab === 'Profile' ? 'nav-text-selected' : 'nav-text'}>Profile</p>
            </div>
            <div className="nav-item" onClick={() => handleTabClick('Tasks')}>
                <img src={getIcon('Tasks', tasksIcon, tasksIconActive)} alt="Tasks" className="nav-icon" />
                {hasNewTasks && <div className="red-dot"></div>}
                <p className={activeTab === 'Tasks' ? 'nav-text-selected' : 'nav-text'}>Tasks</p>
            </div>
            <div className="nav-item" onClick={() => handleTabClick('Games')}>
                <img src={getIcon('Games', gamesIcon, gamesIconActive)} alt="Games" className="nav-icon" />
                <p className={activeTab === 'Games' ? 'nav-text-selected' : 'nav-text'}>Games</p>
            </div>
            <div className="nav-item" onClick={() => handleTabClick('Leader')}>
                <img src={getIcon('Leader', leaderIcon, leaderIconActive)} alt="Leader" className="nav-icon" />
                <p className={activeTab === 'Leader' ? 'nav-text-selected' : 'nav-text'}>Leader</p>
            </div>
            <div className="nav-item" onClick={() => handleTabClick('PayTable')}>
                <img src={getIcon('PayTable', paytableIcon, paytableIconActive)} alt="Pay Table" className="nav-icon" />
                <p className={activeTab === 'PayTable' ? 'nav-text-selected' : 'nav-text'}>Pay Table</p>
            </div>
        </div>
    );
};

export default BottomNavigation;