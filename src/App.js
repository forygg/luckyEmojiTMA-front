import React, { useEffect } from 'react';

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
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Telegram MiniApp</h1>
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={closeApp}
        >
          Close MiniApp
        </button>
      </div>
  );
}

export default App;
