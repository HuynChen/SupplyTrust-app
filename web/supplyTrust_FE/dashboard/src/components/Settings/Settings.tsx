import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Moon, Sun, KeyRound, Shield } from 'lucide-react';

export const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [apiKey, setApiKey] = useState('sk_live_********************************');

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Tùy chỉnh giao diện, thông báo và tích hợp bảo mật</p>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <SettingsIcon className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Giao diện</h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              {darkMode ? <Moon className="h-5 w-5 text-gray-700" /> : <Sun className="h-5 w-5 text-yellow-500" />}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Chế độ tối</p>
              <p className="text-xs text-gray-500">Giảm độ chói, phù hợp làm việc ban đêm</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(v => !v)}
            className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} hover:opacity-90`}
          >
            {darkMode ? 'Bật' : 'Tắt'}
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Bell className="h-5 w-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Thông báo</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Email Alerts</p>
              <p className="text-xs text-gray-500">Nhận thông báo vi phạm, giao dịch mới qua email</p>
            </div>
            <button
              onClick={() => setEmailAlerts(v => !v)}
              className={`px-4 py-2 rounded-lg ${emailAlerts ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'} hover:opacity-90`}
            >
              {emailAlerts ? 'Bật' : 'Tắt'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">SMS Alerts</p>
              <p className="text-xs text-gray-500">Cảnh báo nhanh qua SMS cho sự kiện quan trọng</p>
            </div>
            <button
              onClick={() => setSmsAlerts(v => !v)}
              className={`px-4 py-2 rounded-lg ${smsAlerts ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'} hover:opacity-90`}
            >
              {smsAlerts ? 'Bật' : 'Tắt'}
            </button>
          </div>
        </div>
      </div>

      {/* Security & Integrations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Shield className="h-5 w-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Bảo mật & Tích hợp</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">API Key</label>
            <div className="flex items-center space-x-2">
              <KeyRound className="h-4 w-4 text-gray-400" />
              <input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Không chia sẻ khoá này. Dùng cho tích hợp bên thứ ba.</p>
          </div>
          <div className="flex items-center justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Lưu thay đổi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;