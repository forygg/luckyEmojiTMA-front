import React, { useEffect } from 'react';
import UserInfoBar from './components/UserInfoBar/UserInfoBar';
import GameIntroduction from './components/GameIntroduction/GameIntroduction';
import GameCards from './components/GameCards/GameCards';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import './App.css';

function App() {
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand(); // Expands the app to full-screen
    }, []);

    return (
        <div className="container">
            <header className="header">Games</header>
            <UserInfoBar/>
            <div className="my-rectangle">
                <GameIntroduction/>
                <GameCards/>
            </div>
            <BottomNavigation/>
        </div>
    );
}

export default App;
