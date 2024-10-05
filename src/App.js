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

    const renderContent = () => {


        switch (activeTab) {
            case 'Profile':
                return <Profile />;
            case 'Tasks':
                return <Tasks />;
            case 'Games':
                return (
                    <>
                        {gameState? (
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

    return (
        <div className="container">
            <header className="header">Games</header>
            <UserInfoBar />
            <div className="my-rectangle">
                {renderContent()}
            </div>
            <BottomNavigation onTabChange={setActiveTab} />
        </div>
    );
}

export default App;