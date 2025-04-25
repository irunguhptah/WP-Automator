import { Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import SEOFeels from './sections/SEOFeels';
import SEOService from './sections/SEOService';
import FounderIntro from './sections/FounderIntro';
import PricingPlans from './sections/PricingPlans';
import SEOProcess from './sections/SEOProcess'; 
import SEOStrategy from './sections/SEOStrategy';
import SEOFounder from './sections/SEOFounder';
import FAQ from './sections/FAQ';
import SEOFooter from './sections/SEOFooter';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/app/Dashboard';
import Websites from './pages/app/Websites';
import Plugins from './pages/app/Plugins';
import RSSFeeds from './pages/app/RSSFeeds';
import Settings from './pages/app/Settings';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={
        <div>
          <HeroSection />
          <SEOFeels />
          <SEOService />
          <FounderIntro />
          <SEOProcess />
          <SEOStrategy />
          <SEOFounder />
          <PricingPlans />
          <FAQ />
          <SEOFooter />
        </div>
      } />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="websites" element={<Websites />} />
        <Route path="plugins" element={<Plugins />} />
        <Route path="rss-feeds" element={<RSSFeeds />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Redirects */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
