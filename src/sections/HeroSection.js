import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black py-16 md:py-24 relative overflow-hidden">
      {/* Overlay for the background */}
      <div className="absolute top-0 left-0 w-full h-full
                bg-gradient-to-br from-gray-900 via-purple-900 to-black opacity-40
                "
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Top Bar with Logo and Contact Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-white text-xl font-bold">Logoipsum</div>
          <div className="text-white text-sm">
            Have Questions? <span className="font-semibold">(786) 598-0088</span>
          </div>
        </div>

        {/* Main Hero Text and Call to Action */}
        <div className="text-center mb-10">
          <div className="bg-yellow-400 text-blue-900 text-xs font-bold py-1 px-3 rounded-full inline-block mb-4">
            <svg
              className="w-4 h-4 inline-block mr-1 align-text-top"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.928c-.383-1.027-1.989-1.027-2.372 0l-2.184 5.96a.625.625 0 00.563.726l6.027.875c.538.078.688.63.228.949l-5.452 4.178a.624.624 0 00-.194 1.064l2.435 1.775c.374.271.736.076.884-.228l2.184-5.96c.383-1.027 1.989-1.027 2.372 0l2.184 5.96c.148.304.51.499.884.228l2.435-1.775a.624.624 0 00-.194-1.064l-5.452-4.178c-.46-.319-.31-.871.228-.949l6.027-.875a.625.625 0 00.563-.726l-2.184-5.96c-.383-1.027-1.989-1.027-2.372 0z" />
            </svg>
            TRUSTED BY 500+ LOCAL BUSINESSES
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Dominate Google, Google Maps <br className="hidden md:inline" /> & YouTube Without Wasting <br className="hidden md:inline" /> Time on Ineffective SEO
          </h1>
          <p className="text-blue-200 text-lg mb-8">
            Get more traffic, leads & sales with a proven SEO system that delivers real results.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 ease-in-out">
            GET A FREE SEO STRATEGY CALL
          </button>
          <p className="text-white text-sm mt-2">
            <span className="font-semibold">20 SEATS</span> - <span className="text-yellow-400 font-semibold">12/15 TAKEN</span> - <span className="font-semibold">3 LEFT</span>
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="bg-blue-800 bg-opacity-50 rounded-lg py-6 px-6 md:py-8 md:px-8 lg:py-10 lg:px-10 text-center mb-12">
          <p className="text-white italic text-md md:text-lg leading-relaxed mb-4">
            &quot;My business is now ranking on page 1.&quot;
          </p>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed mb-2">
            &quot;I wasted so much time trying to figure out SEO on my own. Within just a few months of working with MapRankMasters, my business was ranking on page 1 and the leads started coming in! If you're serious about growing, don't wait this will change your business.&quot;
          </p>
          <p className="text-yellow-400 text-sm font-semibold">- Sarah M., Local Business Owner</p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg py-6 text-center shadow-lg">
            <p className="text-white text-3xl font-bold">50+</p>
            <p className="text-blue-200 text-sm">Projects completed</p>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg py-6 text-center shadow-lg">
            <p className="text-white text-3xl font-bold">50+</p>
            <p className="text-blue-200 text-sm">Happy Customers</p>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg py-6 text-center shadow-lg">
            <p className="text-white text-3xl font-bold">95%</p>
            <p className="text-blue-200 text-sm">Success Rate</p>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg py-6 text-center shadow-lg">
            <p className="text-white text-3xl font-bold">24/7</p>
            <p className="text-blue-200 text-sm">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
