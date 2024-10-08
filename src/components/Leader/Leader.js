import React, {useEffect, useState} from 'react';
import './leader.css'; // Make sure this is where the CSS is stored

const Leader = () => {
    const mockAvatar = "https://www.nchti.ru/wp-content/images/profile-anonymous2.png";

    const mockData = [
        { id: 1, name: 'Full Name From Telegram', score: 100000, icon: mockAvatar },
        { id: 2, name: 'Sergei Familievichkin', score: 75203, icon: mockAvatar },
        { id: 3, name: 'Olga Martinunks', score: 1200, icon: mockAvatar },
        { id: 4, name: 'Ivan Ivanovich', score: 400, icon: mockAvatar },
        { id: 5, name: 'Full Name From Telegram', score: 395, icon: mockAvatar },
        { id: 6, name: 'Sergei Familievichkin', score: 310, icon: mockAvatar },
        { id: 7, name: 'Olga Martinunks', score: 220, icon: mockAvatar },
        { id: 8, name: 'Ivan Ivanovich', score: 50, icon: mockAvatar },
    ];

    const [leaders, setLeaders] = useState(mockData);


    useEffect(() => {
         fetchLeaders();
    });

    const fetchLeaders = () => {
        //TODO: Fetch leaders data
        setLeaders(mockData);
    };

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-text">
                You can be the first!
            </div>
            <div className="leaderboard-text">
                The TOP-10 players in the game receive daily
                bonuses.
            </div>
                <div className="leaderboard">
                    {leaders.map((leader) => (
                        <div key={leader.id} className="leader-item">
                            <div className="leader-avatar">
                                <img src={leader.icon} alt={leader.name}/>
                            </div>
                            <div className="leader-info">
                                <div className="leader-name">{leader.name}</div>
                            </div>
                            <div className="leader-balance">{leader.score.toLocaleString()} +LEP</div>
                        </div>
                    ))}
                </div>
            </div>
            );
            };

            export default Leader;
