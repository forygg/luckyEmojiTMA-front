import React, { useState, useEffect } from 'react';
import UserInfoBar from './components/UserInfoBar/UserInfoBar';
import GameIntroduction from './components/GameIntroduction/GameIntroduction';
import GameCards from './components/GameCards/GameCards';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Profile from './components/Profile/Profile';
import Tasks from './components/Tasks/Tasks';
import Leader from './components/Leader/Leader';
import PayTable from './components/Paytable/Paytable';
import GamePlaceholder from './components/GamePlaceholder/GamePlaceholder';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Games');
    const [hasNewTasks, setHasNewTasks] = useState(false);
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand(); // Expands the app to full-screen

        setTimeout(() => {
            setHasNewTasks(true);
        }, 5000);
    }, []);

    const handleGameStart = (game) => {
        setGameState(game);
    };

    const renderContent = () => {
        if (gameState) {
            return <GamePlaceholder game={gameState} />;
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

    return (
        <div className="container">
            <header className="header">Games</header>
            <UserInfoBar />
            <div className="my-rectangle">
                {renderContent()}
            </div>
            <BottomNavigation onTabChange={setActiveTab} hasNewTasks={hasNewTasks} />
        </div>
    );
}

export default App;