import React from 'react';
import { Package, Users, Activity, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { MetricCard } from './MetricCard';

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bảng điều khiển chuỗi cung ứng</h2>
        <p className="text-gray-600">Tổng quan thời gian thực về chuỗi cung ứng được bảo mật bằng blockchain</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Tổng sản phẩm"
          value="2,847"
          change="+12% tháng này"
          changeType="positive"
          icon={Package}
          color="blue"
        />
        <MetricCard
          title="Nhà cung cấp hoạt động"
          value="156"
          change="+8 mới tuần này"
          changeType="positive"
          icon={Users}
          color="green"
        />
        <MetricCard
          title="Giao dịch blockchain"
          value="18,423"
          change="+125 hôm nay"
          changeType="positive"
          icon={Activity}
          color="purple"
        />
        <MetricCard
          title="Tỷ lệ tuân thủ"
          value="98.7%"
          change="+0.3% cải thiện"
          changeType="positive"
          icon={Shield}
          color="yellow"
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Supply Chain Flow Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Luồng chuỗi cung ứng</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-8 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Nhà cung cấp</span>
                  <span className="text-xs text-gray-500">156 đang hoạt động</span>
                </div>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Sản xuất</span>
                  <span className="text-xs text-gray-500">2,847 sản phẩm</span>
                </div>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Phân phối</span>
                  <span className="text-xs text-gray-500">18,423 giao dịch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Cảnh báo gần đây</h3>
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Cảnh báo nhiệt độ</p>
                <p className="text-xs text-gray-600">Sản phẩm PRD-2847 vượt ngưỡng nhiệt độ</p>
                <p className="text-xs text-gray-400 mt-1">2 giờ trước</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Xác minh thất bại</p>
                <p className="text-xs text-gray-600">Đang chờ xác minh nhà cung cấp SUP-156</p>
                <p className="text-xs text-gray-400 mt-1">4 giờ trước</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Hợp đồng mới được triển khai</p>
                <p className="text-xs text-gray-600">Hợp đồng đảm bảo chất lượng QA-v2.1</p>
                <p className="text-xs text-gray-400 mt-1">6 giờ trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Giao dịch blockchain gần đây</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Mã băm giao dịch</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Loại</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Mã sản phẩm</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Trạng thái</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Thời gian</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { hash: '0x7f5e...a2d1', type: 'Chuyển', productId: 'PRD-2847', status: 'Đã xác nhận', time: '2 phút trước' },
                { hash: '0x1a9b...f3c4', type: 'Xác minh', productId: 'PRD-2846', status: 'Đã xác nhận', time: '8 phút trước' },
                { hash: '0x9d2c...e5f6', type: 'Chứng nhận', productId: 'PRD-2845', status: 'Đang chờ', time: '15 phút trước' },
                { hash: '0x3e7f...b8a9', type: 'Chuyển', productId: 'PRD-2844', status: 'Đã xác nhận', time: '22 phút trước' },
              ].map((tx, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">{tx.hash}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{tx.type}</td>
                  <td className="py-3 px-4 text-sm font-medium text-blue-600">{tx.productId}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      tx.status === 'Đã xác nhận' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">{tx.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};