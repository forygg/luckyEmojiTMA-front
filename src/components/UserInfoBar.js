import avatar from "../assets/avatar.svg"
import airdrop_icon from "../assets/airdrop_icon.svg"
const UserInfoBar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex items-center justify-center">
                    <img src={avatar} alt="User Avatar" className="w-10 h-10" />
                </div>
                <div className="ml-4">
                    <p className="text-white">@myusername</p>
                    <p className="text-gray-400 text-sm">Just play...</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full">
                <img src={airdrop_icon} alt="Coin" className="w-6 h-6" />
                <p className="text-white">9,999,000</p>
            </div>
        </div>
    );
};
export default UserInfoBar;