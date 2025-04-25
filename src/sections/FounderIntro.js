import React from 'react';

const FounderIntro = () => {
  return (
    <div id="FounderIntro" className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
            Don't Just Take Our Word for It, See What Our Clients Have Achieved
          </h2>
          <p className="text-gray-300 text-lg">
            They used to struggle with SEO, but now they're outranking the competition.
          </p>
        </div>

        {/* Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-yellow-400 text-2xl mb-4 text-center">“</div>
            <p className="text-gray-300 text-lg mb-4 text-center">
              &quot;Within just a few months, I was ranking on page 1. Before working with MapRankMasters, my website barely got
              any traffic. Within just a few months, I was ranking on page 1, and now I get a steady flow of new customers
              every week. Best investment I've ever made!&quot;
            </p>
            <p className="text-white font-semibold text-md mt-4 text-center">- Sarah M., Local Business Owner</p>
            <div className="text-yellow-400 text-sm mt-2 text-center">★★★★★</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-yellow-400 text-2xl mb-4 text-center">“</div>
            <p className="text-gray-300 text-lg mb-4 text-center">
              &quot;My phone won't stop ringing! I used to rely on referrals and word of mouth, but it wasn't enough. After
              optimizing my Google Maps listing with MapRankMasters, my phone won't stop ringing! I've had to hire more staff
              just to keep up with the demand.&quot;
            </p>
            <p className="text-white font-semibold text-md mt-4 text-center">- Jason T., Contractor</p>
            <div className="text-yellow-400 text-sm mt-2 text-center">★★★★★</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-yellow-400 text-2xl mb-4 text-center">“</div>
            <p className="text-gray-300 text-lg mb-4 text-center">
              &quot;My videos started ranking! I spent months creating YouTube videos, but they never got traction. After working
              with MapRankMasters, my videos started ranking, my views skyrocketed, and my subscriber count exploded. SEO
              really does make all the difference!&quot;
            </p>
            <p className="text-white font-semibold text-md mt-4 text-center">- Alex R., Content Creator</p>
            <div className="text-yellow-400 text-sm mt-2 text-center">★★★★★</div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-yellow-400 text-2xl mb-4 text-center">“</div>
            <p className="text-gray-300 text-lg mb-4 text-center">
              &quot;I just enjoy the results with peace of mind! SEO felt like a mystery to me, and I wasted so much time trying to
              figure it out. Now, I don't even have to think about it. MapRankMasters takes care of everything, and I just
              enjoy the results. More leads, more customers, and more peace of mind!&quot;
            </p>
            <p className="text-white font-semibold text-md mt-4 text-center">- David L., Ecommerce Store Owner</p>
            <div className="text-yellow-400 text-sm mt-2 text-center">★★★★★</div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-yellow-400 text-2xl mb-4 text-center">“</div>
            <p className="text-gray-300 text-lg mb-4 text-center">
              &quot;I went from zero visibility to ranking in the top 3! I was skeptical about SEO because I had been burned
              before. But this was different. Within just 90 days, I went from zero visibility to ranking in the top 3 for
              multiple keywords. And the best part? The results keep improving!&quot;
            </p>
            <p className="text-white font-semibold text-md mt-4 text-center">- Michelle K., Service Based Business Owner</p>
            <div className="text-yellow-400 text-sm mt-2 text-center">★★★★★</div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-yellow-400 text-2xl mb-4 text-center">“</div>
            <p className="text-gray-300 text-lg mb-4 text-center">
              &quot;I'm getting consistent organic traffic! I used to spend thousands on paid ads, and the moment I stopped, the
              leads disappeared. Now, thanks to MapRankMasters, I'm getting consistent organic traffic without spending a
              dime on ads. This is what real business growth looks like!&quot;
            </p>
            <p className="text-white font-semibold text-md mt-4 text-center">- James B., Entrepreneur</p>
            <div className="text-yellow-400 text-sm mt-2 text-center">★★★★★</div>
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

export default FounderIntro;
