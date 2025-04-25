import React from 'react';

const SEOFounder = () => {
  return (
    <div  className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
          I Was Tired of Seeing Business Owners Get Scammed by Bad SEO
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-48 items-center">
            
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-white text-4xl font-bold leading-tight mb-4">
              Roland Ramos          </h2>
            <p className="text-gray-300 text-lg mb-6">
              Years ago, I watched countless business owners waste thousands on SEO that didn't work.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              They were promised rankings, but instead, they got black-hat tactics, temporary wins, and agencies that ghosted them
              once the contract was signed.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              I knew there had to be a better way, so I made it my mission to master SEO the right way.
            </p>
            <p className="text-gray-300 text-lg">
              For the past 7+ years, I've helped businesses rank on Google, Google Maps, and YouTube using a system that actually
              delivers long-term, sustainable growth.
            </p>
          </div>

          {/* Right Column: Founder Image */}
          <div>
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67a39fa73c6b6_Meetyourcoachstockimg.png"
              alt="Founder Roland Ramos"
              className="w-96 h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Column: Founder Image */}
          <div>
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/2551085/67a39fa73c6b6_Meetyourcoachstockimg.png"
              alt="Founder Roland Ramos"
              className="w-96 h-96 rounded-lg shadow-lg"
            />
          </div>
          {/* Right Column: Text Content */}
          <div>
            <p className="text-gray-300 text-lg mb-6">
              I've seen firsthand how higher rankings don't just bring more traffic—they give business owners control over their
              future, the ability to scale, and the confidence to stop chasing leads.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              At MapRankMasters, we don't just &quot;do SEO&quot;—we partner with you to build an unstoppable online presence.
            </p>
            <p className="text-gray-300 text-lg">
              When you work with us, you're not getting another agency.
            </p>
            <p className="text-gray-300 text-lg">
              You're getting a team dedicated to your success, a strategy tailored to your business, and a roadmap to consistent,
              organic growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOFounder;
