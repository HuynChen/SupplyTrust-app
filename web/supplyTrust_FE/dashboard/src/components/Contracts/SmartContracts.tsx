import React, { useState } from 'react';
import { Zap, Play, Pause, Plus, Hash, ShieldCheck, Wallet } from 'lucide-react';
import { SmartContract } from '../../types';

const sampleContracts: SmartContract[] = [
  {
    id: 'SC-001',
    name: 'Quality Assurance v2.1',
    address: '0x9fA7...12cB',
    type: 'quality',
    status: 'active',
    deployer: 'Trần Thị Cẩm Hoa',
    gasUsed: 125000,
    lastExecution: '2024-12-26T11:20:00Z'
  },
  {
    id: 'SC-002',
    name: 'Logistics Tracking v1.4',
    address: '0x7cB1...8dE3',
    type: 'logistics',
    status: 'paused',
    deployer: 'SupplyTrust Bot',
    gasUsed: 98000,
    lastExecution: '2024-12-25T16:45:00Z'
  },
  {
    id: 'SC-003',
    name: 'Automated Payment v1.0',
    address: '0x4D2F...77Aa',
    type: 'payment',
    status: 'deployed',
    deployer: 'Finance Admin',
    gasUsed: 0,
    lastExecution: '—'
  }
];

export const SmartContracts: React.FC = () => {
  const [contracts, setContracts] = useState<SmartContract[]>(sampleContracts);
  const [showCreate, setShowCreate] = useState(false);
  const [newContract, setNewContract] = useState({ name: '', type: 'quality' as SmartContract['type'] });

  const toggleStatus = (id: string) => {
    setContracts(prev => prev.map(c => {
      if (c.id !== id) return c;
      const nextStatus = c.status === 'active' ? 'paused' : 'active';
      return { ...c, status: nextStatus };
    }));
  };

  const createContract = () => {
    if (!newContract.name.trim()) return;
    const id = `SC-${String(contracts.length + 1).padStart(3, '0')}`;
    const created: SmartContract = {
      id,
      name: newContract.name.trim(),
      address: '0x' + Math.random().toString(16).slice(2, 6) + '...' + Math.random().toString(16).slice(2, 6),
      type: newContract.type,
      status: 'deployed',
      deployer: 'You',
      gasUsed: 0,
      lastExecution: '—'
    };
    setContracts(prev => [created, ...prev]);
    setShowCreate(false);
    setNewContract({ name: '', type: 'quality' });
  };

  const statusBadge = (status: SmartContract['status']) => {
    const map: Record<SmartContract['status'], string> = {
      active: 'bg-green-100 text-green-800',
      paused: 'bg-yellow-100 text-yellow-800',
      deployed: 'bg-blue-100 text-blue-800'
    };
    return map[status];
  };

  const typeBadge = (type: SmartContract['type']) => {
    const map: Record<SmartContract['type'], string> = {
      quality: 'bg-purple-100 text-purple-800',
      logistics: 'bg-indigo-100 text-indigo-800',
      payment: 'bg-teal-100 text-teal-800'
    };
    return map[type];
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Smart Contracts</h2>
        <p className="text-gray-600">Quản lý, triển khai và theo dõi smart contracts trong chuỗi cung ứng</p>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng số contracts</p>
              <p className="text-lg font-semibold text-gray-900">{contracts.length}</p>
            </div>
          </div>

          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            <span>Triển khai contract mới</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Contract</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Địa chỉ</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Loại</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Trạng thái</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Gas Used</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Lần chạy gần nhất</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contracts.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{c.name}</p>
                        <p className="text-xs text-gray-500">{c.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono text-sm text-gray-700">{c.address}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${typeBadge(c.type)}`}>{c.type}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusBadge(c.status)}`}>{c.status}</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">{c.gasUsed.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{c.lastExecution}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleStatus(c.id)}
                        className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200"
                      >
                        {c.status === 'active' ? (
                          <>
                            <Pause className="h-4 w-4 text-gray-700" />
                            <span className="text-sm">Tạm dừng</span>
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 text-gray-700" />
                            <span className="text-sm">Kích hoạt</span>
                          </>
                        )}
                      </button>
                      <button className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg hover:bg-blue-100">
                        <Wallet className="h-4 w-4 text-blue-700" />
                        <span className="text-sm">Gọi hàm</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Drawer */}
      {showCreate && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4 z-50">
          <div className="bg-white rounded-t-2xl shadow-xl w-full max-w-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Triển khai contract mới</h3>
                <button onClick={() => setShowCreate(false)} className="text-gray-500 hover:text-gray-700">Đóng</button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Tên contract</label>
                  <input
                    value={newContract.name}
                    onChange={(e) => setNewContract({ ...newContract, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ví dụ: Quality Assurance v2.2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Loại</label>
                  <select
                    value={newContract.type}
                    onChange={(e) => setNewContract({ ...newContract, type: e.target.value as SmartContract['type'] })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="quality">Quality</option>
                    <option value="logistics">Logistics</option>
                    <option value="payment">Payment</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={createContract}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Hash className="h-4 w-4" />
                  <span>Triển khai</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartContracts;