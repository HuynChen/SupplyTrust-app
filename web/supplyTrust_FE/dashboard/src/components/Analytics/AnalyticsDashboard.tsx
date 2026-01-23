import React, { useMemo, useState } from 'react';
import { TrendingUp, BarChart2, PieChart, Activity, Filter } from 'lucide-react';

interface TrendPoint { date: string; products: number; transactions: number; compliance: number; }

const data: TrendPoint[] = [
  { date: '2024-12-21', products: 220, transactions: 520, compliance: 97.8 },
  { date: '2024-12-22', products: 240, transactions: 610, compliance: 98.1 },
  { date: '2024-12-23', products: 260, transactions: 640, compliance: 98.5 },
  { date: '2024-12-24', products: 280, transactions: 720, compliance: 98.6 },
  { date: '2024-12-25', products: 300, transactions: 780, compliance: 98.7 },
  { date: '2024-12-26', products: 320, transactions: 820, compliance: 98.9 },
  { date: '2024-12-27', products: 340, transactions: 900, compliance: 99.0 },
];

export const AnalyticsDashboard: React.FC = () => {
  const [range, setRange] = useState('7d');

  const totals = useMemo(() => {
    const slice = data.slice(- (range === '7d' ? 7 : range === '30d' ? 7 : 7));
    const sumProducts = slice.reduce((acc, d) => acc + d.products, 0);
    const sumTransactions = slice.reduce((acc, d) => acc + d.transactions, 0);
    const avgCompliance = slice.reduce((acc, d) => acc + d.compliance, 0) / slice.length;
    return { sumProducts, sumTransactions, avgCompliance };
  }, [range]);

  // Chuẩn bị dữ liệu cho biểu đồ đường giao dịch
  const maxTransactions = useMemo(() => Math.max(...data.map(d => d.transactions)), []);
  const chartPoints = useMemo(() => {
    const width = 640; // px
    const height = 200; // px
    const step = width / (data.length - 1);
    return data.map((d, i) => {
      const x = i * step;
      const y = height - (d.transactions / maxTransactions) * height;
      return `${x},${y}`;
    }).join(' ');
  }, [maxTransactions]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Phân tích & Báo cáo</h2>
          <p className="text-gray-600">Phân tích xu hướng và hiệu suất hệ thống theo thời gian</p>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">7 ngày</option>
            <option value="30d">30 ngày</option>
          </select>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tổng sản phẩm</p>
              <p className="text-2xl font-bold text-gray-900">{totals.sumProducts.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">+12% so với kỳ trước</p>
            </div>
            <BarChart2 className="h-6 w-6 text-blue-600" />
          </div>
          <div className="mt-4 h-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg" />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Giao dịch blockchain</p>
              <p className="text-2xl font-bold text-gray-900">{totals.sumTransactions.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">+7% so với kỳ trước</p>
            </div>
            <Activity className="h-6 w-6 text-purple-600" />
          </div>
          <div className="mt-4 h-16 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg" />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tuân thủ</p>
              <p className="text-2xl font-bold text-gray-900">{totals.avgCompliance.toFixed(2)}%</p>
              <p className="text-xs text-green-600 mt-1">Ổn định</p>
            </div>
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div className="mt-4 h-16 bg-gradient-to-r from-green-50 to-green-100 rounded-lg" />
        </div>
      </div>

      {/* Charts (mock) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Xu hướng giao dịch</h3>
            <BarChart2 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64">
            <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border border-gray-100 flex items-center justify-center">
              <svg viewBox="0 0 640 200" className="w-[640px] h-[200px]">
                {/* lưới nền */}
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0,40,80,120,160].map((y) => (
                  <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                ))}
                {/* khu vực */}
                <polyline points={chartPoints} fill="none" stroke="#3b82f6" strokeWidth="2" />
                <polygon
                  points={`0,200 ${chartPoints} 640,200`}
                  fill="url(#areaFill)"
                />
              </svg>
            </div>
            <div className="mt-3 flex justify-between text-xs text-gray-500">
              {data.map((d) => (
                <span key={d.date}>{new Date(d.date).getDate()}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Phân bổ loại giao dịch</h3>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative w-44 h-44 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-300 via-purple-300 to-teal-300 opacity-60" />
              <div className="absolute inset-6 rounded-full bg-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Tổng giao dịch</p>
                  <p className="text-lg font-semibold text-gray-900">{totals.sumTransactions.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-block w-3 h-3 rounded-full bg-indigo-400" />
                <span className="text-gray-700">Chuyển giao</span>
                <span className="ml-auto text-gray-500">48%</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-400" />
                <span className="text-gray-700">Xác minh</span>
                <span className="ml-auto text-gray-500">32%</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400" />
                <span className="text-gray-700">Chứng nhận</span>
                <span className="ml-auto text-gray-500">20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;