import React, { useState } from 'react';
import { User, Bell, Lock, Database, Shield, Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    slack: true,
    sms: false
  });

  const tabs = [
    { id: 'profile', label: 'Hồ sơ', icon: User },
    { id: 'notifications', label: 'Thông báo', icon: Bell },
    { id: 'security', label: 'Bảo mật', icon: Lock },
    { id: 'blockchain', label: 'Blockchain', icon: Database },
    { id: 'privacy', label: 'Quyền riêng tư', icon: Shield }
  ];

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            defaultValue="Global Supply Co."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Sản xuất</option>
            <option>Bán lẻ</option>
            <option>Công nghệ</option>
            <option>Thực phẩm & Đồ uống</option>
            <option>Chăm sóc sức khỏe</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
          <input
            type="email"
            defaultValue="admin@globalsupply.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            defaultValue="+1 (555) 123-4567"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company Address</label>
        <textarea
          rows={3}
          defaultValue="123 Business District, Suite 100&#10;New York, NY 10001&#10;United States"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Stay Informed</h3>
        <p className="text-sm text-blue-700">Configure how you want to receive updates about your supply chain activities.</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Email Notifications</h4>
            <p className="text-sm text-gray-600">Receive updates via email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Push Notifications</h4>
            <p className="text-sm text-gray-600">Browser push notifications</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Slack Integration</h4>
            <p className="text-sm text-gray-600">Receive alerts in Slack channels</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.slack}
              onChange={(e) => setNotifications({...notifications, slack: e.target.checked})}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">SMS Alerts</h4>
            <p className="text-sm text-gray-600">Critical alerts via SMS</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-900 mb-2">Security Status</h3>
        <p className="text-sm text-green-700">Your account security is currently strong with multi-factor authentication enabled.</p>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
          <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Enabled ✓
          </button>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">API Access Keys</h4>
          <p className="text-sm text-gray-600 mb-3">Manage API keys for integrations</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Manage Keys
          </button>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Password Policy</h4>
          <p className="text-sm text-gray-600 mb-3">Password must be at least 12 characters with mixed case, numbers, and symbols</p>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );

  const renderBlockchainSettings = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-900 mb-2">Blockchain Configuration</h3>
        <p className="text-sm text-purple-700">Configure your blockchain network settings and smart contract parameters.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Network</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Ethereum Mainnet</option>
            <option>Polygon</option>
            <option>Binance Smart Chain</option>
            <option>Hyperledger Fabric</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gas Price Strategy</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Standard</option>
            <option>Fast</option>
            <option>Instant</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Smart Contract Address</h4>
          <p className="text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded break-all">
            0x742d35cc6e3c2e93a3f8de3d8aa2f2c0f5f5f5f5
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Thuật toán đồng thuận</h4>
          <p className="text-sm text-gray-600 mb-2">Bằng chứng cổ phần (PoS) - Hiệu quả năng lượng và an toàn</p>
          <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">
            Đang hoạt động
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-orange-900 mb-2">Data Privacy & Compliance</h3>
        <p className="text-sm text-orange-700">Manage your data privacy settings and compliance requirements.</p>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">GDPR Compliance</h4>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Enabled</span>
          </div>
          <p className="text-sm text-gray-600">European data protection regulations compliance</p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">Data Retention Policy</h4>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">7 Years</span>
          </div>
          <p className="text-sm text-gray-600">Automatic deletion of old transaction data</p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">Data Anonymization</h4>
            <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Active</span>
          </div>
          <p className="text-sm text-gray-600">Personal data is automatically anonymized</p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Data Export</h4>
          <p className="text-sm text-gray-600 mb-3">Export your company's supply chain data</p>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
            Request Export
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile': return renderProfileSettings();
      case 'notifications': return renderNotificationSettings();
      case 'security': return renderSecuritySettings();
      case 'blockchain': return renderBlockchainSettings();
      case 'privacy': return renderPrivacySettings();
      default: return renderProfileSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and platform preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.label} Settings
                </h2>
              </div>
              <div className="p-6">
                {renderTabContent()}
              </div>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                <div className="flex justify-end space-x-3">
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Cancel
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;