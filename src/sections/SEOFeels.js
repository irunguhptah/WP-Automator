import React from 'react';
import { XCircle } from 'lucide-react';

const SEOFeels = () => {
  const RedCrossBullet = () => (
    <span className="inline-flex items-center justify-center w-5 h-5 mr-2">
      <XCircle className="text-red-500 w-4 h-4" />
    </span>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            If SEO Feels Like a Mystery, <span className="text-red-500">You're Doing It Wrong</span>
          </h2>
          <p className="text-gray-300 text-lg">You've done everything you can but your competitors are still winning. Why?</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 md:p-8">
            <ul className="list-none text-gray-300 space-y-3">
              <li className="flex items-start">
                <RedCrossBullet />
                <span>
                  You've tried everything: SEO blogs, YouTube tutorials, and cheap agencies, and yet your website is still buried while your competitors
                  dominate the top spots. Every effort feels like a waste of time, and you're left wondering, "Why is this working for them but not for me?"
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 md:p-8">
            <ul className="list-none text-gray-300 space-y-3">
              <li className="flex items-start">
                <RedCrossBullet />
                <span>
                  Every day you don't rank higher, you're bleeding customers, leads, and revenue. Your competitors are winning, your business is falling
                  behind, and you can't shake the fear that if this continues, you might not recover.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 md:p-8">
            <ul className="list-none text-gray-300 space-y-3">
              <li className="flex items-start">
                <RedCrossBullet />
                <span>
                  SEO feels like an impossible puzzle: too technical, too confusing, and filled with conflicting advice. You've invested time, money, and effort,
                  yet you're still lost, questioning if ranking higher is even possible for you.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">Sound familiar? You're not alone. But we can fix this.</p>
        </div>
      </div>
    </div>
  );
};

export default SEOFeels;
