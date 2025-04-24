import { FaWordpress, FaRobot, FaShieldAlt, FaRss, FaServer } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Automate Your WordPress Sites in Minutes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            WP Automator handles plugin updates, RSS feeds, and content posting—so you don’t have to.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => (window.location.href = "/login")}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">Trusted by 1,000+ WordPress professionals</p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/logos/techcrunch.svg" alt="TechCrunch" className="h-8 opacity-70" />
            <img src="/logos/wpbeginner.svg" alt="WPBeginner" className="h-8 opacity-70" />
            <img src="/logos/cloudways.svg" alt="Cloudways" className="h-8 opacity-70" />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How WP Automator Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaWordpress className="text-blue-600 text-3xl" />}
              title="1-Click WordPress Setup"
              description="Automatically install WordPress, themes, and plugins with a single click."
            />
            <FeatureCard
              icon={<FaRss className="text-green-600 text-3xl" />}
              title="RSS Auto-Posting"
              description="Pull content from RSS feeds and publish to your blog automatically."
            />
            <FeatureCard
              icon={<FaRobot className="text-purple-600 text-3xl" />}
              title="Smart Automation"
              description="Schedule updates, backups, and security checks without lifting a finger."
            />
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">See It in Action</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="WP Automator Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price="$19/mo"
              features={["5 Websites", "Basic Plugins", "RSS Auto-Posting", "24/7 Support"]}
              isPopular={false}
            />
            <PricingCard
              name="Pro"
              price="$49/mo"
              features={["20 Websites", "Premium Plugins", "AI Content Rewriting", "Priority Support"]}
              isPopular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$99/mo"
              features={["Unlimited Websites", "Custom Plugins", "White Label", "Dedicated Manager"]}
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="WP Automator saved me 10+ hours a week. Now my blogs run on autopilot!"
              author="Sarah K."
              role="Blogger"
            />
            <TestimonialCard
              quote="The RSS auto-posting feature is a game-changer for my news sites."
              author="Mike T."
              role="Digital Marketer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your WordPress?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 1,000+ users who save hours every week with WP Automator.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your Free 14-Day Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WP Automator</h3>
              <p className="text-gray-400">
                The easiest way to manage multiple WordPress sites.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Docs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2023 WP Automator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, features, isPopular }) {
  const navigateToRegister = () => {
    window.location.href = "/register"; // Redirect to the register page
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border-2 ${isPopular ? "border-blue-600" : "border-transparent"}`}>
      {isPopular && (
        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={navigateToRegister}
        className={`w-full py-3 rounded-lg font-semibold ${
          isPopular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-blue-700 p-6 rounded-lg">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-blue-200 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}