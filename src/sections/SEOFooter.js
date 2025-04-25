import React from 'react';

const SEOFooter = () => {
  return (
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

  );
};

export default SEOFooter;