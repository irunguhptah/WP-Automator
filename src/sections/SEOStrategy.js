import React from 'react';

const SEOStrategy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
            Why Our SEO Strategy Works When Others Fail
          </h2>
          <p className="text-gray-300 text-lg">And it's not doing more of what you've already tried...</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Most SEO Services Either */}
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-6">Most SEO Services Either:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <span className="font-semibold text-white">Use outdated strategies:</span> They apply generic SEO techniques that don't
                work with today's ever-changing search engine algorithms.
              </li>
              <li>
                <span className="font-semibold text-white">Rely on black hat tactics:</span> Many agencies use spammy backlinks and
                keyword stuffing, which can get your site penalized or even removed from search results.
              </li>
              <li>
                <span className="font-semibold text-white">Overpromise and underdeliver:</span> They claim &quot;guaranteed rankings&quot; but fail
                to produce real, measurable traffic and business growth.
              </li>
              <li>
                <span className="font-semibold text-white">Charge hidden fees:</span> You sign up for SEO services, only to find upsells,
                long-term contracts, and unclear pricing that drain your budget.
              </li>
              <li>
                <span className="font-semibold text-white">Ignore YouTube & Local SEO:</span> Most agencies focus only on website SEO,
                neglecting Google Maps and YouTube rankings, which are powerful traffic sources.
              </li>
            </ul>
          </div>

          {/* Right Column: We Do SEO Differently */}
          <div>
            <h3 className="text-2xl font-semibold text-green-500 mb-6">We Do SEO Differently:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <span className="font-semibold text-white">Custom-Tailored SEO Strategies:</span> No cookie-cutter solutions. Every
                campaign is built specifically for your business, your industry, and your goals.
              </li>
              <li>
                <span className="font-semibold text-white">100% White-Hat & Ethical SEO:</span> We follow Google-approved best practices
                that protect your rankings and drive sustainable, long-term traffic.
              </li>
              <li>
                <span className="font-semibold text-white">Google Maps & YouTube Optimization:</span> We go beyond just website
                rankings. We help you dominate Google Maps and YouTube, reaching customers where they're already searching.
              </li>
              <li>
                <span className="font-semibold text-white">Clear Pricing & Full Transparency:</span> No contracts, no hidden fees. You get
                detailed reports, real-time updates, and full access to your campaign progress.
              </li>
              <li>
                <span className="font-semibold text-white">Done-for-You Execution with Ongoing Support:</span> We do all the heavy lifting
                keyword research, on-page optimization, technical SEO, backlinking, and content strategies while keeping you
                informed and in control.
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 ease-in-out">
            GET A FREE SEO STRATEGY CALL
          </button>
          <p className="text-white text-sm mt-2">
            <span className="font-semibold">20 SEATS</span> - <span className="text-yellow-400 font-semibold">12/15 TAKEN</span> -{' '}
            <span className="font-semibold">3 LEFT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOStrategy;
