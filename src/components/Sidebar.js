import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiGlobe,
  FiBox,
  FiRss,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  // Function to check window size and set sidebar state accordingly
  const checkWindowSize = () => {
    if (window.innerWidth <= 768) {
      setIsMinimized(true); // Minimized on smaller screens
    } else {
      setIsMinimized(false); // Expanded on larger screens
    }
  };

  // Use effect to update state on window resize
  useEffect(() => {
    checkWindowSize(); // Initial check on mount

    // Add event listener for window resizing
    window.addEventListener("resize", checkWindowSize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized); // Toggle sidebar manually
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className={`relative h-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMinimized ? "w-20" : "w-64"
        }`}
      >
        {/* Top toggle button */}
        <div className="absolute -right-3 top-4 z-10">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-all duration-200 transform hover:scale-110"
            aria-label={isMinimized ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isMinimized ? (
              <FiChevronRight size={18} className="min-w-[18px]" />
            ) : (
              <FiChevronLeft size={18} className="min-w-[18px]" />
            )}
          </button>
        </div>

        {/* Sidebar content */}
        <div className="h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 flex items-center border-b border-gray-100 h-16">
            {!isMinimized && (
              <h1 className="text-xl font-bold text-blue-600 whitespace-nowrap">
                WP Automator
              </h1>
            )}
          </div>

          {/* Navigation items */}
          <nav className="flex-1 overflow-y-auto pt-2 pb-4">
            <NavItem
              to="/app"
              icon={<FiHome size={20} />}
              text="Dashboard"
              isMinimized={isMinimized}
            />
            <NavItem
              to="/app/websites"
              icon={<FiGlobe size={20} />}
              text="Websites"
              isMinimized={isMinimized}
            />
            <NavItem
              to="/app/plugins"
              icon={<FiBox size={20} />}
              text="Plugins"
              isMinimized={isMinimized}
            />
            <NavItem
              to="/app/rss-feeds"
              icon={<FiRss size={20} />}
              text="RSS Feeds"
              isMinimized={isMinimized}
            />
            <NavItem
              to="/app/settings"
              icon={<FiSettings size={20} />}
              text="Settings"
              isMinimized={isMinimized}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, text, isMinimized }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center mx-3 my-1 p-3 rounded-lg transition-all duration-200 group ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        } ${isMinimized ? "justify-center" : ""}`
      }
      title={isMinimized ? text : ""}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!isMinimized && (
        <span
          className={`font-medium ml-3 whitespace-nowrap overflow-hidden ${
            isMinimized ? "opacity-0 w-0" : "opacity-100"
          } transition-opacity duration-200`}
        >
          {text}
        </span>
      )}
    </NavLink>
  );
}
