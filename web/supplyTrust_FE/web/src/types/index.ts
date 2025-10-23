export interface Product {
  id: string;
  name: string;
  category: string;
  status: 'in-transit' | 'delivered' | 'manufacturing' | 'verified';
  location: string;
  lastUpdated: string;
  blockchainHash: string;
  stakeholders: Stakeholder[];
  journey: JourneyStep[];
}

export interface Stakeholder {
  id: string;
  name: string;
  type: 'manufacturer' | 'supplier' | 'distributor' | 'retailer';
  location: string;
  verified: boolean;
}

export interface JourneyStep {
  id: string;
  location: string;
  timestamp: string;
  action: string;
  stakeholder: string;
  verified: boolean;
}

export interface AnalyticsData {
  totalProducts: number;
  activeShipments: number;
  verifiedStakeholders: number;
  completedDeliveries: number;
  monthlyGrowth: number;
  transparencyScore: number;
}