import React, { useState } from 'react';
import { Package, Truck, MapPin, Clock, Shield, Users } from 'lucide-react';
import { mockProducts, mockAnalytics } from '../data/mockData';
import ProductCard from './ProductCard';
import { Product } from '../types';

const Dashboard: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const stats = [
    { label: 'Active Products', value: mockAnalytics.totalProducts.toLocaleString(), icon: Package, color: 'blue' },
    { label: 'In Transit', value: mockAnalytics.activeShipments.toString(), icon: Truck, color: 'orange' },
    { label: 'Verified Partners', value: mockAnalytics.verifiedStakeholders.toString(), icon: Users, color: 'teal' },
    { label: 'Completed', value: mockAnalytics.completedDeliveries.toString(), icon: Shield, color: 'green' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'in-transit': return 'text-orange-600 bg-orange-100';
      case 'manufacturing': return 'text-blue-600 bg-blue-100';
      case 'verified': return 'text-teal-600 bg-teal-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Supply Chain Dashboard</h1>
          <p className="text-gray-600">Monitor your products and supply chain performance in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity & Product Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Products</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mockProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                      isSelected={selectedProduct?.id === product.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-4">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Chi tiết sản phẩm</h2>
              </div>
              <div className="p-6">
                {selectedProduct ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedProduct.name}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProduct.status)}`}>
                          {selectedProduct.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Mã: {selectedProduct.id}</p>
                      <p className="text-sm text-gray-600">Danh mục: {selectedProduct.category}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Current Location
                      </h4>
                      <p className="text-sm text-gray-600">{selectedProduct.location}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        Băm Blockchain
                      </h4>
                      <p className="text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded break-all">
                        {selectedProduct.blockchainHash}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Dòng thời gian hành trình</h4>
                      <div className="space-y-3">
                        {selectedProduct.journey.map((step) => (
                          <div key={step.id} className="flex items-start space-x-3">
                            <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                              step.verified ? 'bg-green-500' : 'bg-gray-300'
                            }`}></div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{step.action}</p>
                              <p className="text-xs text-gray-600">{step.location}</p>
                              <p className="text-xs text-gray-500">{new Date(step.timestamp).toLocaleDateString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Cập nhật lần cuối
                      </h4>
                      <p className="text-sm text-gray-600">{selectedProduct.lastUpdated}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Select a product to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;