export default function Plugins() {
    const plugins = [
      { name: "WP RSS Aggregator", installed: true },
      { name: "Yoast SEO", installed: false },
      { name: "Ad Banner Manager", installed: false },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Plugins</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search plugins..."
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <ul className="space-y-3">
            {plugins.map((plugin, index) => (
              <li key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <span className="font-medium">{plugin.name}</span>
                <button
                  className={`px-3 py-1 rounded-lg text-sm ${
                    plugin.installed
                      ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  disabled={plugin.installed}
                >
                  {plugin.installed ? "Installed" : "Install"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }