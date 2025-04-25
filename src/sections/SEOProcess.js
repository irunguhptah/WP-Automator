import React from 'react';

const SEOProcess = () => {
  return (
    <div id="SEOProcess" className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
            The Exact SEO Process We've Used to Rank Hundreds of Businesses
          </h2>
          <p className="text-gray-300 text-lg">
            We've refined this process over the years so you can get faster, and better results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {/* Step 1: In-Depth SEO Audit & Strategy Development */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67e3b023bd725_SEOauditstrategydevelopmentillustration-maprankmasters.svg"
                alt="In-Depth SEO Audit & Strategy Development"
                className="w-60 h-60 rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">In-Depth SEO Audit & Strategy Development</h3>
              <p className="text-gray-300 text-lg">
                We start by analyzing your website, competition, and current rankings to identify opportunities, weaknesses,
                and hidden roadblocks. This gives us a clear roadmap to delivering to your business goals.
              </p>
            </div>
          </div>

          {/* Step 2: On-Page Optimization & Technical Fixes */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:order-2 md:ml-8 mb-8 md:mb-0">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67e3af97835f2_OngoingOptimizationPerformanceTrackingillustration-maprankmasters.svg"
                alt="On-Page Optimization & Technical Fixes"
                className="w-60 h-60 rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:order-1">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">On-Page Optimization & Technical Fixes</h3>
              <p className="text-gray-300 text-lg">
                We optimize your website's structure, content, and metadata to align perfectly with Google's ranking factors.
                We also fix any technical SEO issues to ensure search engines can crawl and index your site effectively.
              </p>
            </div>
          </div>

          {/* Step 3: High-Authority Backlink Building */}
          <div className="flex flex-col md:flex-row items-center">
             <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67e3af8b46f00_High-AuthorityBacklinksillustration-maprankmasters.svg"
                alt="High-Authority Backlink Building"
                className="w-60 h-60 rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">High-Authority Backlink Building</h3>
              <p className="text-gray-300 text-lg">
                Links from trusted websites act as votes of confidence for your website. We implement a white-hat, strategic
                backlink campaign to build your website's authority and push it up the rankings.
              </p>
            </div>
          </div>

          {/* Step 4: Ongoing Optimization & Performance Tracking */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:order-2 md:ml-8 mb-8 md:mb-0">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67e3afb12bf1f_Ongoingoptimizationillustration-maprankmasters.svg"
                alt="Ongoing Optimization & Performance Tracking"
                className="w-60 h-60 rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:order-1">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Ongoing Optimization & Performance Tracking</h3>
              <p className="text-gray-300 text-lg">
                SEO isn't a set-it-and-forget-it strategy. We monitor your rankings, traffic, and leads, and refine/continue optimizing
                your site to ensure sustained growth and results.
              </p>
            </div>
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

export default SEOProcess;
