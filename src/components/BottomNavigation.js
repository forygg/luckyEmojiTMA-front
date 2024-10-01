import profileIcon from '../assets/profile.svg';
import tasksIcon from '../assets/tasks.svg';
import gamesIcon from '../assets/games.svg';
import leaderIcon from '../assets/leader.svg';
import paytableIcon from '../assets/paytable.svg';

const BottomNavigation = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-between items-center">
            <div className="text-center">
                <img src={profileIcon} alt="Profile" className="w-32px h-32px mx-auto" />
                <p className="text-gray-400 text-xs">Profile</p>
            </div>
            <div className="text-center">
                <img src={tasksIcon} alt="Tasks" className="w-32px h-32px mx-auto" />
                <p className="text-gray-400 text-xs">Tasks</p>
            </div>
            <div className="text-center">
                <img src={gamesIcon} alt="Games" className="w-32px h-32px mx-auto" />
                <p className="text-gray-400 text-xs">Games</p>
            </div>
            <div className="text-center">
                <img src={leaderIcon} alt="Leader" className="w-32px h-32px mx-auto" />
                <p className="text-gray-400 text-xs">Leader</p>
            </div>
            <div className="text-center">
                <img src={paytableIcon} alt="Pay Table" className="w-32px h-32px mx-auto" />
                <p className="text-gray-400 text-xs">Pay Table</p>
            </div>
        </div>
    );
};

export default BottomNavigation;
