import React from 'react';

const SEOService = () => {
  return (
    <div id="SEOService" className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Main title of the section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
            Convert, and Scale Your Business
          </h2>
          <p className="text-gray-300 text-lg">
            SEO doesn't have to be guesswork. Here's how to finally get results.
          </p>
        </div>

        {/* First content block: Text and Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Backed by Data, Built For Results
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              At MapRankMasters, we don't believe in SEO shortcuts or guesswork. We implement a data-driven strategy that
              ensures you rank, stay ranked, and continue growing your business.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <span className="font-semibold text-white">Google Page 1 Rankings:</span> So customers actually find you.
              </li>
              <li>
                <span className="font-semibold text-white">Google Maps Domination:</span> So local customers see your
                business first.
              </li>
              <li>
                <span className="font-semibold text-white">YouTube SEO Optimization:</span> So your videos rank and drive
                real traffic.
              </li>
            </ul>
            <p className="text-gray-300 text-lg">
              No fluff. No shady tactics. Just real results that grow your business.
            </p>
          </div>
          <div className="md:order-1">
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67e3af7b055ae_Googlesearchresultsrankingillustrationr-maprankmasters.svg"
              alt="Google Search Results Ranking"
              className="w-80 h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second content block: Image and Text */}
        <div className="grid md:grid-cols-2 gap-36 items-center mt-16">

          <div className="md:order-1">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Get Your Business Seen, Trusted, and Chosen Every Single Day
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              When your business ranks at the top, everything changes. No more chasing leads, no more uncertainty, no more
              relying on ads to stay afloat.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Customers come to you ready to buy because they trust businesses that appear first.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              This isn't just about traffic. It's about control, security, and the freedom to grow without limits.
            </p>
            <p className="text-gray-300 text-lg">
              With consistent visibility, you can scale with confidence, knowing your business is always working for you even
              when you're not.
            </p>
          </div>
          <div className="md:order-2">
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67e3af68b4eff_Googlescalingillustration-maprankmasters.svg"
              alt="Google Scaling Illustration"
              className="w-80 h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOService;
