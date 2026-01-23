import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Clock, AlertTriangle, Filter } from 'lucide-react';

interface Rule {
  id: string;
  name: string;
  description: string;
  status: 'compliant' | 'violation' | 'pending';
  lastChecked: string;
}

const initialRules: Rule[] = [
  { id: 'CMP-001', name: 'Temperature Control', description: 'Giữ nhiệt độ 2-8°C trong vận chuyển', status: 'compliant', lastChecked: '2024-12-27T08:00:00Z' },
  { id: 'CMP-002', name: 'Origin Verification', description: 'Xác minh nguồn gốc từ nhà cung cấp', status: 'violation', lastChecked: '2024-12-27T07:45:00Z' },
  { id: 'CMP-003', name: 'Certification Validity', description: 'Chứng nhận CE/ISO còn hiệu lực', status: 'pending', lastChecked: '2024-12-27T07:30:00Z' },
];

export const ComplianceMonitoring: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>(initialRules);
  const [filter, setFilter] = useState<'all' | Rule['status']>('all');

  const filtered = rules.filter(r => filter === 'all' ? true : r.status === filter);

  const iconFor = (s: Rule['status']) => s === 'compliant' ? CheckCircle : s === 'violation' ? XCircle : Clock;
  const colorFor = (s: Rule['status']) => s === 'compliant' ? 'text-green-600' : s === 'violation' ? 'text-red-600' : 'text-yellow-600';
  const badgeFor = (s: Rule['status']) => s === 'compliant' ? 'bg-green-100 text-green-800' : s === 'violation' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Giám sát tuân thủ</h2>
          <p className="text-gray-600">Theo dõi trạng thái tuân thủ, cảnh báo và kiểm tra định kỳ</p>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tất cả</option>
            <option value="compliant">Compliant</option>
            <option value="violation">Violation</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đạt chuẩn</p>
              <p className="text-lg font-semibold text-gray-900">{rules.filter(r => r.status==='compliant').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-3 rounded-lg">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Vi phạm</p>
              <p className="text-lg font-semibold text-gray-900">{rules.filter(r => r.status==='violation').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Chờ xác minh</p>
              <p className="text-lg font-semibold text-gray-900">{rules.filter(r => r.status==='pending').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rules table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Quy tắc</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Mô tả</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Trạng thái</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Lần kiểm tra</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map(rule => {
                const Icon = iconFor(rule.status);
                return (
                  <tr key={rule.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Shield className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{rule.name}</p>
                          <p className="text-xs text-gray-500">{rule.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">{rule.description}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Icon className={`h-4 w-4 ${colorFor(rule.status)}`} />
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${badgeFor(rule.status)}`}>{rule.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">{new Date(rule.lastChecked).toLocaleString()}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm">Đánh dấu đạt</button>
                        <button className="px-3 py-1.5 bg-red-50 rounded-lg hover:bg-red-100 text-sm text-red-700">Tạo cảnh báo</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Cảnh báo gần đây</h3>
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Thiếu chứng nhận ISO cho nhà cung cấp SUP-156</p>
              <p className="text-xs text-gray-500 mt-1">2 giờ trước</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Vi phạm nhiệt độ trong vận chuyển của PRD-2847</p>
              <p className="text-xs text-gray-500 mt-1">6 giờ trước</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceMonitoring;