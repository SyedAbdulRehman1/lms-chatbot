import { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; // Example icons

export default function Drawer() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span
            className={`${isCollapsed ? "hidden" : "block"} text-lg font-bold`}
          >
            My App
          </span>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 bg-gray-700 rounded-md hover:bg-gray-600"
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>

        <ul className="mt-6 space-y-4">
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

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">Here is your main content...</p>
      </div>
    </div>
  );
}
