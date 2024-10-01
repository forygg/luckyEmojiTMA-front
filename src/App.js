import React, { useEffect } from 'react';
import UserInfoBar from './components/UserInfoBar';
import GameIntroduction from './components/GameIntroduction';
import GameCards from './components/GameCards';
import BottomNavigation from './components/BottomNavigation';
import bg from './assets/background.jpeg';

function App() {
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand(); // Expands the app to full-screen
    }, []);

    const closeApp = () => {
        window.Telegram.WebApp.close();
    };

    return (
        <div
            className="flex flex-col pt-20 px-5 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <UserInfoBar />
            <GameIntroduction />
            <GameCards />
            <BottomNavigation />
        </div>
    );
}

export default App;
