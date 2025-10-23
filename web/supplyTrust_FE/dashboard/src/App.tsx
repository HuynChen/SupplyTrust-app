import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ProductTracking } from './components/Products/ProductTracking';
import { SupplierManagement } from './components/Suppliers/SupplierManagement';
import { BlockchainLog } from './components/Transactions/BlockchainLog';
import { SmartContracts } from './components/Contracts/SmartContracts';
import { AnalyticsDashboard } from './components/Analytics/AnalyticsDashboard';
import { ComplianceMonitoring } from './components/Compliance/ComplianceMonitoring';
import { Reports } from './components/Reports/Reports';
import { Settings as SettingsPage } from './components/Settings/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    let token = localStorage.getItem('access_token');

    // Nếu chưa có trong localStorage (khác origin), thử lấy từ query ?token=
    if (!token) {
      const params = new URLSearchParams(window.location.search);
      const tokenFromQuery = params.get('token');
      if (tokenFromQuery) {
        localStorage.setItem('access_token', tokenFromQuery);
        token = tokenFromQuery;
      }
    }

    if (!token) {
      const webOrigin = (import.meta as any).env?.VITE_WEB_ORIGIN || 'http://localhost:5174';
      window.location.href = webOrigin;
    }
  }, []);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductTracking />;
      case 'suppliers':
        return <SupplierManagement />;
      case 'transactions':
        return <BlockchainLog />;
      case 'contracts':
        return <SmartContracts />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'compliance':
        return <ComplianceMonitoring />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentUser="Trần Thị Cẩm Hoa" />
        <main className="flex-1 overflow-y-auto">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}

export default App;