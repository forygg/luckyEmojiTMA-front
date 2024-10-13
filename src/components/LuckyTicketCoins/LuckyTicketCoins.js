import React, { useState, useEffect, useRef } from 'react';
import gameCoin from '../../assets/game-coin.svg';
import gameTicket from '../../assets/ticket.svg';
import gameUserTicket from '../../assets/ticket-username.svg';
import CustomDialog from './confirmDialog/CustomDialog';
import './luckyTicketCoins.css';

const LuckyTicketCoins = () => {
    let username = '@username';
    const [boughtTickets, setBoughtTickets] = useState(() => {
        const savedTickets = localStorage.getItem('boughtTickets');
        return savedTickets ? JSON.parse(savedTickets) : [];
    });
    const [timersRestored, setTimersRestored] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const timerRefs = useRef({});

    useEffect(() => {
        localStorage.setItem('boughtTickets', JSON.stringify(boughtTickets));
    }, [boughtTickets]);

    const fetchFundAmount = () => {
        //TODO: fetch the fund amount from the backend
        let fundAmount = 1000000;
        return fundAmount.toLocaleString('ru-RU');
    }

    const generateTicketNumber = () => {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    }

    const handleBuyTicket = () => {
        setIsDialogOpen(true);
    }

    const confirmBuyTicket = () => {
        setIsDialogOpen(false);
        const endTime = Date.now() + 10000; // 10 seconds from now
        const newTicket = {
            number: generateTicketNumber(),
            endTime: endTime,
            timeLeft: 10000 // Initialize with 10 seconds
        };
        setBoughtTickets([...boughtTickets, newTicket]);
        startTimer(newTicket.number, endTime);
    }

    const startTimer = (ticketNumber, endTime) => {
        // Save endTime to localStorage
        localStorage.setItem(`endTime_${ticketNumber}`, endTime);

        const updateTimer = () => {
            const timeLeft = endTime - Date.now();
            setBoughtTickets(prevTickets => prevTickets.map(ticket =>
                ticket.number === ticketNumber ? { ...ticket, timeLeft: Math.max(timeLeft, 0) } : ticket
            ));
            if (timeLeft > 0) {
                timerRefs.current[ticketNumber] = setTimeout(updateTimer, 1000);
            } else {
                clearTimeout(timerRefs.current[ticketNumber]);
                // TODO: Announce the winning ticket
                console.log('Time to announce the winning ticket!');
            }
        };
        updateTimer();
    };

    useEffect(() => {
        if (!timersRestored) {
            boughtTickets.forEach(ticket => {
                const endTime = localStorage.getItem(`endTime_${ticket.number}`);
                if (endTime) {
                    startTimer(ticket.number, parseInt(endTime, 10));
                }
            });
            setTimersRestored(true);
        }
    }, [timersRestored, boughtTickets]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleClearStorage = () => {
        localStorage.clear();
        setBoughtTickets([]);
        Object.values(timerRefs.current).forEach(clearInterval);
    }

    return (
        <>
            <div className="introduction">
                <span className="motivation">
                    <p>The more tickets you buy, the higher your chances of winning!</p>
                </span>
                <p className="list-of-prizes">
                    Payout System:
                    <li>2 matching numbers: 10% of the Prize Pool.</li>
                    <li>3 matching numbers: 15% of the Prize Pool.</li>
                    <li>4 matching numbers: 20% of the Prize Pool.</li>
                    <li>5 matching numbers: 25% of the Prize Pool.</li>
                    <li>6 matching numbers: 30% of the Prize Pool.</li>
                    <li>7 matching numbers: 50% of the Prize Pool.</li>
                    <li>8 matching numbers: 100% of the Prize Pool.</li>
                </p>
                <p className="information">
                    The prize amount is divided among the winning tickets in each matching category.
                    For example, if the Prize Pool is 100,000 Coins and 5 tickets have 2 matching numbers,
                    the payout for 2 matches is 10%—which is 10,000 Coins. 10,000/5 = 2,000 Coins.
                    Each winner will receive 2,000 Coins.
                </p>
            </div>

            <div className="game_zone">
                <div className="fund">
                    <p>Fund</p>
                    <div className="fundDivider"></div>
                    <img src={gameCoin} alt="coin"/>
                    <p className="fundAmount">{fetchFundAmount()}</p>
                </div>
                <div className="ticket-buying">
                    <div className="ticket-buying-information">
                        <div className="ticket-buying-information-instruction">
                            <p><b>Instructions:</b></p>
                            <ol>
                                <li>Purchase a ticket with Game Coins.</li>
                                <li>Receive a ticket with a random number.</li>
                                <li>In one hour, the system will reveal the winning numbers.</li>
                                <li>Claim your prize or a consolation reward if your ticket doesn’t win.</li>
                            </ol>
                            <p>
                                The system will automatically credit your winnings or prize to your Game Coin balance.
                                You can check the amount won and the number of winning tickets in the statistics
                                section.
                            </p>

                        </div>
                        <div className="ticket-buying-information-motivation">
                            <img src={gameTicket} alt="GameTicket"/>
                            <p>Victory in your hands! A guaranteed prize with every ticket.</p>
                        </div>
                    </div>
                    <div className="ticket-buying-divider"></div>
                    <div className="ticket-buying-button" onClick={handleBuyTicket}>
                        <img src={gameCoin} alt="coin"/>
                        <p>100 Buy</p>
                    </div>
                </div>
            </div>
            <div className="bought-tickets">
                {boughtTickets.map((ticket, index) => (
                    <div key={index} className="bought-ticket">
                        <div className="ticket-container">
                            <img src={gameUserTicket} alt="ticket" className="ticket-image"/>
                            <div className="ticket-number">{ticket.number}</div>
                            <div className="ticket-username">{username}</div>
                        </div>
                        <div className="bought-ticket-divider"></div>
                        <div className="bought-ticket-info">
                            <p> Drawn Numbers: ********<br/>
                                Ticket Number: {ticket.number}<br/>
                                Winning Tickets: **<br/>
                                Prize Amount: *****
                            </p>
                            <div className="countdown-timer">
                                {ticket.timeLeft > 0 ? (
                                    <p>{formatTime(ticket.timeLeft)}</p>
                                ) : (
                                    <p className="ticket-finish">Finished</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleClearStorage}>Clear Storage</button>
            <CustomDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={confirmBuyTicket}
            />
        </>
    );
};

export default LuckyTicketCoins;