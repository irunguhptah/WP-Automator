import React from 'react';

const PricingPlans = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">Choose Your SEO Growth Plan</h2>
          <p className="text-gray-300 text-lg">Pick the SEO plan that fits your business goals and let us do the heavy lifting.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Plan 1: Local Business Owners & Service Providers */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">FOR LOCAL BUSINESS OWNERS & SERVICE PROVIDERS</h3>
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Google Website Ranking</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>In-depth website audit & keyword strategy</li>
              <li>On-page & technical SEO optimization</li>
              <li>Content optimization for high-ranking keywords</li>
              <li>Ethical, high-quality backlink building</li>
              <li>Monthly ranking reports & continuous strategy updates</li>
            </ul>
            <div className="mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md transition duration-300 ease-in-out">
                GET A FREE SEO STRATEGY CALL
              </button>
              <p className="text-white text-sm mt-2">20 SEATS - 12/15 TAKEN - 8 LEFT</p>
            </div>
          </div>

          {/* Plan 2: Websites & Online Businesses */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">FOR WEBSITES & ONLINE BUSINESSES</h3>
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Google Maps Ranking</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Full Google My Business (GMB) optimization</li>
              <li>Local keyword targeting for top map rankings</li>
              <li>Citation building & local authority backlinks</li>
              <li>Customer review & engagement strategies</li>
              <li>Competitor analysis & adjustments</li>
            </ul>
            <div className="mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md transition duration-300 ease-in-out">
                GET A FREE SEO STRATEGY CALL
              </button>
              <p className="text-white text-sm mt-2">20 SEATS - 12/15 TAKEN - 5 LEFT</p>
            </div>
          </div>

          {/* Plan 3: Content Creators & Video Marketers */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">FOR CONTENT CREATORS & VIDEO MARKETERS</h3>
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">YouTube Video Ranking</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Rank one video for high-traffic keywords</li>
              <li>Full YouTube domination package</li>
              <li>Optimized titles, tags, descriptions & metadata</li>
              <li>Backlinking & engagement strategies</li>
              <li>Competitor analysis & YouTube growth insights</li>
            </ul>
            <div className="mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md transition duration-300 ease-in-out">
                GET A FREE SEO STRATEGY CALL
              </button>
              <p className="text-white text-sm mt-2">20 SEATS - 12/15 TAKEN - 5 LEFT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
