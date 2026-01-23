import { Product, Stakeholder, AnalyticsData } from '../types';

export const mockProducts: Product[] = [
  {
    id: 'PRD-001',
    name: 'Organic Cotton T-Shirts',
    category: 'Apparel',
    status: 'in-transit',
    location: 'Shanghai Port',
    lastUpdated: '2 hours ago',
    blockchainHash: '0xa7b3c9d8f2e1...',
    stakeholders: [
      { id: 'STK-001', name: 'GreenWeave Mills', type: 'manufacturer', location: 'Mumbai, India', verified: true },
      { id: 'STK-002', name: 'EcoShip Logistics', type: 'distributor', location: 'Shanghai, China', verified: true }
    ],
    journey: [
      { id: 'J-001', location: 'Mumbai, India', timestamp: '2024-01-15 08:00', action: 'Manufacturing Complete', stakeholder: 'GreenWeave Mills', verified: true },
      { id: 'J-002', location: 'Mumbai Port', timestamp: '2024-01-16 14:30', action: 'Shipped', stakeholder: 'EcoShip Logistics', verified: true },
      { id: 'J-003', location: 'Shanghai Port', timestamp: '2024-01-20 09:15', action: 'In Transit', stakeholder: 'EcoShip Logistics', verified: true }
    ]
  },
  {
    id: 'PRD-002',
    name: 'Premium Coffee Beans',
    category: 'Food & Beverage',
    status: 'delivered',
    location: 'New York Warehouse',
    lastUpdated: '1 day ago',
    blockchainHash: '0xf4e8b2c7a9d3...',
    stakeholders: [
      { id: 'STK-003', name: 'Mountain Peak Farms', type: 'supplier', location: 'Colombia', verified: true },
      { id: 'STK-004', name: 'Global Trade Co.', type: 'distributor', location: 'Miami, FL', verified: true }
    ],
    journey: [
      { id: 'J-004', location: 'Bogotá, Colombia', timestamp: '2024-01-10 06:00', action: 'Harvested', stakeholder: 'Mountain Peak Farms', verified: true },
      { id: 'J-005', location: 'Cartagena Port', timestamp: '2024-01-12 11:00', action: 'Exported', stakeholder: 'Global Trade Co.', verified: true },
      { id: 'J-006', location: 'New York Warehouse', timestamp: '2024-01-18 16:45', action: 'Delivered', stakeholder: 'Global Trade Co.', verified: true }
    ]
  }
];

export const mockStakeholders: Stakeholder[] = [
  { id: 'STK-001', name: 'GreenWeave Mills', type: 'manufacturer', location: 'Mumbai, India', verified: true },
  { id: 'STK-002', name: 'EcoShip Logistics', type: 'distributor', location: 'Shanghai, China', verified: true },
  { id: 'STK-003', name: 'Mountain Peak Farms', type: 'supplier', location: 'Colombia', verified: true },
  { id: 'STK-004', name: 'Global Trade Co.', type: 'distributor', location: 'Miami, FL', verified: true },
  { id: 'STK-005', name: 'TechComponents Ltd', type: 'manufacturer', location: 'Shenzhen, China', verified: false }
];

export const mockAnalytics: AnalyticsData = {
  totalProducts: 1248,
  activeShipments: 87,
  verifiedStakeholders: 156,
  completedDeliveries: 892,
  monthlyGrowth: 23.5,
  transparencyScore: 94.2
};