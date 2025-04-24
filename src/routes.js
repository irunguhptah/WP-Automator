import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/app/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/app/Dashboard';
import Websites from './pages/app/Websites';
import Plugins from './pages/app/Plugins';
import RSSFeeds from './pages/app/RSSFeeds';
import Settings from './pages/app/Settings';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
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
