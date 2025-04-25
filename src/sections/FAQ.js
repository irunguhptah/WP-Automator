import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: 'How soon will I see the results?',
      answer: 'SEO isn\'t instant, but most clients see noticeable improvements within 3-6 months, with long-term rankings that keep growing.',
    },
    {
      question: 'Why should I choose SEO over paid ads?',
      answer: 'SEO provides long-term visibility without ongoing ad spend, bringing consistent traffic and leads without paying per click.',
    },
    {
      question: 'I\'ve tried SEO before and it didn\'t work. Why is this different?',
      answer:
        'Most SEO services use generic tactics. We customize everything based on your business, industry, and goals, and we don\'t use shady shortcuts.',
    },
    {
      question: 'What happens after I apply?',
      answer: 'We\'ll review your application, schedule a strategy call, and discuss the best SEO plan for your business.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg">Still have questions? We've got answers.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                {openQuestion === index ? (
                  <ChevronUp className="text-yellow-400 w-6 h-6" />
                ) : (
                  <ChevronDown className="text-yellow-400 w-6 h-6" />
                )}
              </div>
              {openQuestion === index && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-300 text-lg">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white text-lg mb-4">
            The Longer You Wait, The Harder It Gets.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            Ranking takes time, and every delay puts you further behind your competitors. We only work with a limited number of
            businesses each month to guarantee results. If you don't act now, you could lose this opportunity. Take control of your
            rankings today!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 ease-in-out">
            GET A FREE SEO STRATEGY CALL
          </button>
          <p className="text-white text-sm mt-2">
            <span className="font-semibold">20 SEATS</span> - <span className="text-yellow-400 font-semibold">12/15 TAKEN</span> -{' '}
            <span className="font-semibold">5 LEFT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
