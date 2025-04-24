export default function Dashboard() {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard title="Websites" value="5" icon="🌐" />
          <StatCard title="Active Plugins" value="23" icon="🧩" />
          <StatCard title="RSS Feeds" value="12" icon="📡" />
        </div>
  
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add New Website
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Install Plugins
            </button>
          </div>
        </div>
  
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <ActivityItem text="Updated plugins on example.com" time="2 mins ago" />
            <ActivityItem text="Added new RSS feed (Tech News)" time="1 hour ago" />
            <ActivityItem text="Connected new domain (blog.com)" time="3 hours ago" />
          </ul>
        </div>
      </div>
    );
  }
  
  function StatCard({ title, value, icon }) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  }
  
  function ActivityItem({ text, time }) {
    return (
      <li className="flex items-center">
        <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
        <span className="text-gray-700">{text}</span>
        <span className="ml-auto text-gray-500 text-sm">{time}</span>
      </li>
    );
  }