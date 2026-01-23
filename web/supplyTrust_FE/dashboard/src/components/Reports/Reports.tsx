import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

interface ReportItem {
  id: string;
  name: string;
  type: 'products' | 'suppliers' | 'transactions' | 'compliance';
  createdAt: string;
  sizeKb: number;
}

const initialReports: ReportItem[] = [
  { id: 'RPT-001', name: 'Monthly Transactions - Dec 2024', type: 'transactions', createdAt: '2024-12-27T09:00:00Z', sizeKb: 842 },
  { id: 'RPT-002', name: 'Supplier Compliance Summary', type: 'compliance', createdAt: '2024-12-26T18:30:00Z', sizeKb: 312 },
  { id: 'RPT-003', name: 'Product Movement Overview', type: 'products', createdAt: '2024-12-25T12:10:00Z', sizeKb: 1280 },
];

export const Reports: React.FC = () => {
  const [reports, setReports] = useState<ReportItem[]>(initialReports);
  const [type, setType] = useState<'all' | ReportItem['type']>('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const filtered = reports.filter(r => type === 'all' ? true : r.type === type);

  const generateReport = () => {
    const id = `RPT-${String(reports.length + 1).padStart(3, '0')}`;
    const name = `${type === 'all' ? 'Custom' : type} Report`;
    const createdAt = new Date().toISOString();
    const sizeKb = Math.floor(200 + Math.random() * 1200);
    setReports(prev => [{ id, name, type: type === 'all' ? 'transactions' : type, createdAt, sizeKb }, ...prev]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Reports</h2>
        <p className="text-gray-600">Tạo, lọc và tải xuống báo cáo hệ thống</p>
      </div>

      {/* Filters and actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Tất cả loại</option>
              <option value="products">Products</option>
              <option value="suppliers">Suppliers</option>
              <option value="transactions">Transactions</option>
              <option value="compliance">Compliance</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Từ ngày"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Đến ngày"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              onClick={generateReport}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <FileText className="h-4 w-4" />
              <span>Tạo báo cáo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reports list */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Tên báo cáo</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Loại</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Ngày tạo</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Kích thước</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Tải xuống</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map(r => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{r.name}</p>
                        <p className="text-xs text-gray-500">{r.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">{r.type}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{new Date(r.createdAt).toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{r.sizeKb} KB</td>
                  <td className="py-4 px-6">
                    <button className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg hover:bg-blue-100">
                      <Download className="h-4 w-4 text-blue-700" />
                      <span className="text-sm">Tải xuống</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;