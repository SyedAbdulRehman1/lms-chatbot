import { useState } from "react";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar1 = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="text-white p-4 flex flex-col justify-between h-full">
      <div>
        <div className={`p-4 font-bold ${isCollapsed ? "hidden" : "block"}`}>
          My App
        </div>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
            <FaHome size={20} />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </li>
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
            <FaUser size={20} />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Profile
            </span>
          </li>
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
            <FaCog size={20} />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Settings
            </span>
          </li>
        </ul>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 mt-auto text-white bg-gray-700 rounded-md"
      >
        {isCollapsed ? "→" : "←"}
      </button>
    </div>
  );
};

export default Sidebar1;
