import React, { useState, useEffect, useRef } from 'react';
import tonCoin from '../../assets/ton-coin.svg';
import gameTicket from '../../assets/ticket.svg';
import gameUserTicket from '../../assets/ticket-username.svg';
import CustomDialog from './confirmDialog/CustomDialog';
import WalletNotConnectedDialog from './confirmDialog/WalletNotConnectedDialog/WalletNotConnectedDialog';
import './luckyTicketTons.css';

const LuckyTicketTons = () => {
    let username = '@username';
    const [boughtTonsTickets, setBoughtTonsTickets] = useState(() => {
        const savedTickets = localStorage.getItem('boughtTonsTickets');
        return savedTickets ? JSON.parse(savedTickets) : [];
    });
    const [tonsTimersRestored, setTonsTimersRestored] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isWalletNotConnectedDialogOpen, setIsWalletNotConnectedDialogOpen] = useState(false);
    const tonsTimerRefs = useRef({});

    useEffect(() => {
        localStorage.setItem('boughtTonsTickets', JSON.stringify(boughtTonsTickets));
    }, [boughtTonsTickets]);

    const fetchTonsFundAmount = () => {
        //TODO: fetch the fund amount from the backend
        let fundAmount = 10.34;
        return fundAmount.toLocaleString('ru-RU');
    }

    const generateTonsTicketNumber = () => {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    }

    const isWalletConnected = () => {
        return Math.random() < 0.5;
    }

    const handleBuyTonsTicket = () => {
        if (isWalletConnected()) {
            setIsDialogOpen(true);
        } else {
            setIsWalletNotConnectedDialogOpen(true);
        }
    }

    const confirmBuyTonsTicket = () => {
        setIsDialogOpen(false);
        const endTime = Date.now() + 15000; // 15 seconds from now
        const newTicket = {
            number: generateTonsTicketNumber(),
            endTime: endTime,
            timeLeft: 15000 // Initialize with 15 seconds
        };
        setBoughtTonsTickets([...boughtTonsTickets, newTicket]);
        startTonsTimer(newTicket.number, endTime);
    }

    const startTonsTimer = (ticketNumber, endTime) => {
        // Save endTime to localStorage
        localStorage.setItem(`endTimeTons_${ticketNumber}`, endTime);

        const updateTimer = () => {
            const timeLeft = endTime - Date.now();
            setBoughtTonsTickets(prevTickets => prevTickets.map(ticket =>
                ticket.number === ticketNumber ? { ...ticket, timeLeft: Math.max(timeLeft, 0) } : ticket
            ));
            if (timeLeft > 0) {
                tonsTimerRefs.current[ticketNumber] = setTimeout(updateTimer, 1000);
            } else {
                clearTimeout(tonsTimerRefs.current[ticketNumber]);
                // TODO: Announce the winning ticket
                console.log('Time to announce the winning ticket!');
            }
        };

        updateTimer();
    };

    useEffect(() => {
        if (!tonsTimersRestored) {
            boughtTonsTickets.forEach(ticket => {
                const endTime = localStorage.getItem(`endTimeTons_${ticket.number}`);
                if (endTime) {
                    startTonsTimer(ticket.number, parseInt(endTime, 10));
                }
            });
            setTonsTimersRestored(true);
        }
    }, [tonsTimersRestored, boughtTonsTickets]);

    const formatTonsTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleClearTonsStorage = () => {
        localStorage.removeItem('boughtTonsTickets');
        setBoughtTonsTickets([]);
        Object.values(tonsTimerRefs.current).forEach(clearInterval);
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
                    For example, if the Prize Pool is 100,000 TonCoins and 5 tickets have 2 matching numbers,
                    the payout for 2 matches is 10%—which is 10,000 TonCoins. 10,000/5 = 2,000 TonCoins.
                    Each winner will receive 2,000 TonCoins.
                </p>
            </div>

            <div className="game_zone">
                <div className="fund">
                    <p>Fund</p>
                    <div className="fundDivider"></div>
                    <img src={ tonCoin } alt="coin" />
                    <p className="fundAmount">{ fetchTonsFundAmount() }</p>
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
                                You can check the amount won and the number of winning tickets in the statistics section.
                            </p>

                        </div>
                        <div className="ticket-buying-information-motivation">
                            <img src={ gameTicket } alt="GameTicket" />
                            <p>Victory in your hands! A guaranteed prize with every ticket.</p>
                        </div>
                    </div>
                    <div className="ticket-buying-divider"></div>
                    <div className="ticket-buying-button" onClick={handleBuyTonsTicket}>
                        <img src={ tonCoin } alt="coin" />
                        <p>0,05 Buy</p>
                    </div>
                </div>
            </div>
            <div className="bought-tickets">
                {boughtTonsTickets.map((ticket, index) => (
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
                                    <p>{formatTonsTime(ticket.timeLeft)}</p>
                                ) : (
                                    <p className="ticket-finish">Finished</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleClearTonsStorage}>Clear Storage</button>
            <CustomDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={confirmBuyTonsTicket}
            />
            <WalletNotConnectedDialog
                isOpen={isWalletNotConnectedDialogOpen}
                onClose={() => setIsWalletNotConnectedDialogOpen(false)}
            />
        </>
    );
};

export default LuckyTicketTons;