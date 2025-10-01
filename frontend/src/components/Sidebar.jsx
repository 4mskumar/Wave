import { BiMessageRounded } from "react-icons/bi";
import { FiUser, FiSettings } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="w-70 bg-white border-r px-10 py-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-lg">
            JB
          </div>
          <div>
            <h2 className="font-semibold text-xl">Jakob Boman</h2>
            <p className="text-gray-500 text-xs">@jakoboman</p>
          </div>
        </div>
        <div className="flex gap-8 mb-8 mt-8">
          <div>
            <p className="font-semibold">80</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
          <div>
            <p className="font-semibold">80</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
          <div>
            <p className="font-semibold">10</p>
            <p className="text-xs text-gray-500">Post</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-lg ">
          <button className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
            <HiOutlineHome size={20} />
            Feed
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            <BiMessageRounded size={20} />
            Messages
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            <FiUser size={20} />
            Profile
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            <FiSettings size={20} />
            Settings
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
