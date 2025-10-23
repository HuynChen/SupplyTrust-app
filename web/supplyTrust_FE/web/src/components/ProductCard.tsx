import React from 'react';
import { MapPin, Clock, Shield, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  isSelected: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isSelected }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'in-transit': return 'text-orange-600 bg-orange-100';
      case 'manufacturing': return 'text-blue-600 bg-blue-100';
      case 'verified': return 'text-teal-600 bg-teal-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return Shield;
      case 'in-transit': return Clock;
      case 'manufacturing': return AlertCircle;
      default: return Shield;
    }
  };

  const StatusIcon = getStatusIcon(product.status);

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">ID: {product.id}</p>
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(product.status)}`}>
              <StatusIcon className="w-3 h-3" />
              <span>{product.status.replace('-', ' ')}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{product.location}</span>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Updated {product.lastUpdated}</span>
        <div className="flex items-center space-x-1">
          <Shield className="w-3 h-3 text-green-500" />
          <span>Verified</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-600">
          <span className="font-medium mr-2">Các bên liên quan:</span>
          <span>{product.stakeholders.length} đã kết nối</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;