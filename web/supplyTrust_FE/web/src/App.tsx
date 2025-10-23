import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import StakeholdersPage from './components/StakeholdersPage';
import AnalyticsPage from './components/AnalyticsPage';
import SettingsPage from './components/SettingsPage';
import LoginPage from './components/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleLoginSuccess = (token: string) => {
    // lưu token tại origin hiện tại và chuyển sang dashboard, đính kèm token qua query
    localStorage.setItem('access_token', token);
    const dest = (import.meta as any).env?.VITE_DASHBOARD_ORIGIN || 'http://localhost:5173';
    const url = dest.includes('?') ? `${dest}&token=${encodeURIComponent(token)}` : `${dest}?token=${encodeURIComponent(token)}`;
    window.location.href = url;
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onGetStarted={handleGetStarted} />;
      case 'login':
        return <LoginPage onSuccess={handleLoginSuccess} />;
      case 'dashboard':
        return <Dashboard />;
      case 'stakeholders':
        return <StakeholdersPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;