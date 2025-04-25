import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-1 text-xs fixed top-0 left-0 w-full z-50">
                Have Questions? (786) 598-0088
            </div>
            <nav className="fixed top-6 left-0 w-full z-50 bg-blue-100/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <a href="#home" className="text-gray-900 text-2xl font-bold cursor-pointer">
                            WP-Automator
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            {[{ to: 'HeroSection', label: 'Home' },
                              { to: 'SEOService', label: 'Our Services' },
                              { to: 'FounderIntro', label: 'Testimonies' },
                              { to: 'SEOProcess', label: 'Our Process' },
                              { to: 'SEOStrategy', label: 'Our Strategy' },
                              { to: 'PricingPlans', label: 'Pricing' },
                              { to: 'FAQ', label: 'FAQs' }]
                            .map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={800}
                                    offset={-70} // Adjust this value based on your navbar height
                                    activeClass="text-blue-600 font-bold"
                                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button
                                variant="outlined"
                                color="primary"
                                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => navigate('./pages/auth/Login')} // Redirect to Login
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => navigate('./pages/auth/Register')} // Redirect to Register
                            >
                                Sign Up
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-900 hover:bg-gray-200 cursor-pointer"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-blue-100 border-b border-gray-200"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {[{ to: 'HeroSection', label: 'Home' },
                              { to: 'SEOService', label: 'Our Services' },
                              { to: 'FounderIntro', label: 'Testimonies' },
                              { to: 'SEOProcess', label: 'Our Process' },
                              { to: 'SEOStrategy', label: 'Our Strategy' },
                              { to: 'PricingPlans', label: 'Pricing' },
                              { to: 'FAQ', label: 'FAQs' }]
                            .map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={800}
                                    offset={-70} // Adjust this value based on your navbar height
                                    activeClass="text-blue-600 font-bold"
                                    className="block text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 py-2 cursor-pointer"
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex gap-2">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className="w-1/2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                    onClick={() => {
                                        closeMobileMenu();
                                        navigate('/auth/Login'); // Redirect to Login
                                    }}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-1/2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                    onClick={() => {
                                        closeMobileMenu();
                                        navigate('/auth/Register'); // Redirect to Register
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
