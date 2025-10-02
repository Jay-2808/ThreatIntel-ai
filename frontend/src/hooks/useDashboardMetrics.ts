import { useState, useEffect } from 'react';
import { securityService } from '../services/api';

export interface DashboardMetrics {
  securityScore: number;
  activeThreats: number;
  employeeTrainingScore: number;
  recentAlerts: Array<{
    id: string;
    type: 'high' | 'medium' | 'low';
    message: string;
    timestamp: string;
  }>;
  threatMap: {
    regions: Array<{
      id: string;
      name: string;
      threatLevel: number;
      incidents: number;
    }>;
  };
}

export const useDashboardMetrics = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      const { data } = await securityService.getDashboardMetrics();
      setMetrics(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch dashboard metrics');
      console.error('Error fetching dashboard metrics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    // Set up real-time updates
    const interval = setInterval(fetchMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return { metrics, loading, error, refetch: fetchMetrics };
};
