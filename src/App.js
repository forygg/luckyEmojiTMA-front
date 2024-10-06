import React, { useState, useEffect } from 'react';
import UserInfoBar from './components/UserInfoBar/UserInfoBar';
import GameIntroduction from './components/GameIntroduction/GameIntroduction';
import GameCards from './components/GameCards/GameCards';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Profile from './components/Profile/Profile';
import Tasks from './components/Tasks/Tasks';
import Leader from './components/Leader/Leader';
import PayTable from './components/Paytable/Paytable';
import LuckyTicketGamePlaceholder from './components/GamePlaceholder/LuckyTicketGamePlaceholder';
import backArrowIcon from './assets/backarrowIcon.svg';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Games');
    const [gameState, setGameState] = useState(false);

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.expand(); // Expands the app to full-screen
        tg.ready();
    }, []);

    const handleGameStart = () => {
        setGameState(true);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setGameState(false); // Reset gameState when changing tabs
    };

    const handleBackClick = () => {
        setGameState(false); // Reset gameState when back arrow is clicked
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Profile':
                return <Profile />;
            case 'Tasks':
                return <Tasks />;
            case 'Games':
                return (
                    <>
                        {gameState ? (
                            <LuckyTicketGamePlaceholder />
                        ) : (
                            <>
                                <GameIntroduction />
                                <GameCards onGameStart={handleGameStart} />
                            </>
                        )}
                    </>
                );
            case 'Leader':
                return <Leader />;
            case 'PayTable':
                return <PayTable />;
            default:
                return (
                    <>
                        <GameIntroduction />
                        <GameCards onGameStart={handleGameStart} />
                    </>
                );
        }
    };

    const getHeaderText = () => {
        if (gameState) {
            return 'Lucky Ticket';
        }
        switch (activeTab) {
            case 'Profile':
                return 'Profile';
            case 'Tasks':
                return 'Tasks';
            case 'Leader':
                return 'Leader';
            case 'PayTable':
                return 'PayTable';
            default:
                return 'Games';
        }
    };

    return (
        <div className="container">
            <header className="header">
                {gameState && (
                    <img
                        src={backArrowIcon}
                        alt="Back"
                        className="back-arrow"
                        onClick={handleBackClick}
                    />
                )}
                {getHeaderText()}
            </header>
            <UserInfoBar />
            <div className="my-rectangle">
                {renderContent()}
            </div>
            <BottomNavigation onTabChange={handleTabChange} />
        </div>
    );
}

export default App;