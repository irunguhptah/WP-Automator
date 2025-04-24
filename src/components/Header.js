import { FiBell, FiSearch, FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="relative w-64">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FiBell className="text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <span className="text-gray-700">John Doe</span>
          <FiChevronDown className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}