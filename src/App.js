import React, { useState, useEffect } from 'react';
import UserInfoBar from './components/UserInfoBar/UserInfoBar';
import GameIntroduction from './components/GameIntroduction/GameIntroduction';
import GameCards from './components/GameCards/GameCards';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Profile from './components/Profile/Profile';
import Tasks from './components/Tasks/Tasks';
import Leader from './components/Leader/Leader';
import PayTable from './components/Paytable/Paytable';
import LuckyTicketCurrencyChose from './components/CurrencyChose/LuckyTicketCurrencyChose';
import LuckyEmojiGame from './components/LuckyEmojiGame/LuckyEmojiGame';
import backArrowIcon from './assets/backarrowIcon.svg';
import './App.css';
import LuckyTicketCoins from "./components/LuckyTicketCoins/LuckyTicketCoins";
import LuckyTicketTons from "./components/LuckyTicketTons/LuckyTicketTons";

function App() {
    const [activeTab, setActiveTab] = useState('Games');
    const [gameState, setGameState] = useState(false);
    const [activeGame, setActiveGame] = useState(null);
    const [previousGame, setPreviousGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.expand();
        tg.ready();

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleGameStart = (game) => {
        setPreviousGame(activeGame);
        setGameState(true);
        setActiveGame(game);
        console.log('Game started:', game);
    };

    const handleCurrencySelect = (currency) => {
        setPreviousGame(activeGame);
        setActiveGame(currency);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setGameState(false);
        setActiveGame(null);
        setPreviousGame(null);
    };

    const handleBackClick = () => {
        if (previousGame) {
            setActiveGame(previousGame);
            setPreviousGame(null);
        } else {
            setGameState(false);
            setActiveGame(null);
        }
    };

    const renderContent = () => {
        if (gameState) {
            switch (activeGame) {
                case 'LuckyTicket':
                    return <LuckyTicketCurrencyChose onCurrencySelect={handleCurrencySelect} />;
                case 'LuckyEmoji':
                    return <LuckyEmojiGame />;
                case 'LuckyTicketCoins':
                    return <LuckyTicketCoins />;
                case 'LuckyTicketTons':
                    return <LuckyTicketTons />;
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
                case 'LuckyTicketCoins':
                    return 'Lucky Ticket Coins';
                case 'LuckyTicketTons':
                    return 'Lucky Ticket Ton';
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
                <div className="loading-screen">
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