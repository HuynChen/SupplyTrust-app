import React from 'react';
import { TrendingUp, Package, Shield, Globe, BarChart3, PieChart, Activity } from 'lucide-react';
import { mockAnalytics } from '../data/mockData';

const AnalyticsPage: React.FC = () => {
  const metrics = [
    { 
      label: 'Monthly Growth', 
      value: `+${mockAnalytics.monthlyGrowth}%`, 
      icon: TrendingUp, 
      color: 'green',
      trend: 'up'
    },
    { 
      label: 'Transparency Score', 
      value: `${mockAnalytics.transparencyScore}%`, 
      icon: Shield, 
      color: 'blue',
      trend: 'up'
    },
    { 
      label: 'Active Products', 
      value: mockAnalytics.totalProducts.toLocaleString(), 
      icon: Package, 
      color: 'purple',
      trend: 'up'
    },
    { 
      label: 'Global Reach', 
      value: '156 Countries', 
      icon: Globe, 
      color: 'teal',
      trend: 'stable'
    }
  ];

  const supplyChainData = [
    { stage: 'Raw Materials', percentage: 85, color: 'bg-blue-500' },
    { stage: 'Manufacturing', percentage: 92, color: 'bg-green-500' },
    { stage: 'Distribution', percentage: 78, color: 'bg-yellow-500' },
    { stage: 'Retail', percentage: 94, color: 'bg-purple-500' }
  ];

  const recentActivities = [
    { id: 1, action: 'Product PRD-345 verified', time: '2 minutes ago', type: 'success' },
    { id: 2, action: 'New stakeholder onboarded', time: '15 minutes ago', type: 'info' },
    { id: 3, action: 'Shipment delayed - PRD-221', time: '1 hour ago', type: 'warning' },
    { id: 4, action: 'Quality check completed', time: '3 hours ago', type: 'success' },
    { id: 5, action: 'Blockchain sync updated', time: '5 hours ago', type: 'info' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into your supply chain performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-${metric.color}-100`}>
                    <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {metric.trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
                    <span className="font-medium">{metric.trend === 'up' ? '↗️' : '→'}</span>
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Supply Chain Performance */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Supply Chain Performance
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {supplyChainData.map((stage, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                      <span className="text-sm font-bold text-gray-900">{stage.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${stage.color} transition-all duration-500`}
                        style={{ width: `${stage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">98.5%</div>
                  <div className="text-sm text-green-700">On-Time Delivery</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.2%</div>
                  <div className="text-sm text-blue-700">Quality Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Geographic Distribution */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Geographic Distribution
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">North America</span>
                  <span className="hidden">North America</span>
                  <span className="text-sm text-gray-600">Europe</span>
                  <span className="hidden">Europe</span>
                  <span className="text-sm text-gray-600">Asia Pacific</span>
                  <span className="hidden">Asia Pacific</span>
                  <span className="text-sm text-gray-600">Other Regions</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Product Categories
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Electronics</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">32%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Apparel</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">28%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Food & Beverage</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">22%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Other</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;