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
import LuckyEmojiGame from './components/LuckyEmojiGame/LuckyEmojiGame';
import backArrowIcon from './assets/backarrowIcon.svg';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Games');
    const [gameState, setGameState] = useState(false);
    const [activeGame, setActiveGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.expand(); // Expands the app to full-screen
        tg.ready();

        // Hide loading screen after 8 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        // Cleanup timer if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    const handleGameStart = (game) => {
        setGameState(true);
        setActiveGame(game);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setGameState(false); // Reset gameState when changing tabs
        setActiveGame(null); // Reset activeGame when changing tabs
    };

    const handleBackClick = () => {
        setGameState(false); // Reset gameState when back arrow is clicked
        setActiveGame(null); // Reset activeGame when back arrow is clicked
    };

    const renderContent = () => {
        if (gameState) {
            switch (activeGame) {
                case 'LuckyTicket':
                    return <LuckyTicketGamePlaceholder />;
                case 'LuckyEmoji':
                    return <LuckyEmojiGame />;
                default:
                    return null;
            }
        }

        switch (activeTab) {
            case 'Profile':
                return <Profile />;
            case 'Tasks':
                return <Tasks />;
            case 'Games':
                return (
                    <>
                        <GameIntroduction />
                        <GameCards onGameStart={handleGameStart} />
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
            switch (activeGame) {
                case 'LuckyTicket':
                    return 'Lucky Ticket';
                case 'LuckyEmoji':
                    return 'Lucky Emoji';
                default:
                    return 'Games';
            }
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
            {isLoading ? (
                // Loading screen with just a background
                <div className="loading-screen">
                    {/* Add any content like a loading spinner if needed */}
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}

export default App;