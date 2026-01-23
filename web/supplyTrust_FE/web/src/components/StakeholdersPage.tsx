import React, { useState } from 'react';
import { Users, MapPin, Shield, AlertTriangle, Plus, Search, Filter } from 'lucide-react';
import { mockStakeholders } from '../data/mockData';

const StakeholdersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredStakeholders = mockStakeholders.filter(stakeholder => {
    const matchesSearch = stakeholder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stakeholder.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || stakeholder.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'manufacturer': return 'text-blue-600 bg-blue-100';
      case 'supplier': return 'text-green-600 bg-green-100';
      case 'distributor': return 'text-purple-600 bg-purple-100';
      case 'retailer': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const stats = {
    total: mockStakeholders.length,
    verified: mockStakeholders.filter(s => s.verified).length,
    pending: mockStakeholders.filter(s => !s.verified).length,
    types: {
      manufacturer: mockStakeholders.filter(s => s.type === 'manufacturer').length,
      supplier: mockStakeholders.filter(s => s.type === 'supplier').length,
      distributor: mockStakeholders.filter(s => s.type === 'distributor').length,
      retailer: mockStakeholders.filter(s => s.type === 'retailer').length,
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Stakeholder Network</h1>
          <p className="text-gray-600">Manage your trusted network of suppliers, manufacturers, and distributors</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Partners</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Đã xác thực</p>
                <p className="text-3xl font-bold text-green-600">{stats.verified}</p>
              </div>
              <Shield className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Nhà sản xuất</p>
                <p className="text-3xl font-bold text-blue-600">{stats.types.manufacturer}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm các bên liên quan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Tất cả loại</option>
                  <option value="manufacturer">Nhà sản xuất</option>
                  <option value="supplier">Nhà cung cấp</option>
                  <option value="distributor">Nhà phân phối</option>
                  <option value="retailer">Nhà bán lẻ</option>
                </select>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Partner</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStakeholders.map((stakeholder) => (
            <div key={stakeholder.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stakeholder.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(stakeholder.type)}`}>
                    {stakeholder.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {stakeholder.verified ? (
                    <div className="flex items-center space-x-1 text-green-600">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-orange-600">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-xs font-medium">Đang chờ</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{stakeholder.location}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">Mã: {stakeholder.id}</span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStakeholders.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Không tìm thấy bên liên quan</h3>
            <p className="text-gray-600">Hãy điều chỉnh từ khóa hoặc tiêu chí lọc</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StakeholdersPage;