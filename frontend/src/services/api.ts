import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const securityService = {
  getDashboardMetrics: () => api.get('/api/metrics/dashboard'),
  getSecurityScore: () => api.get('/api/metrics/security-score'),
  getRecentAlerts: () => api.get('/api/alerts/recent'),
  getThreatMap: () => api.get('/api/threats/map'),
};

export const phishingService = {
  getCampaigns: () => api.get('/api/phishing/campaigns'),
  createCampaign: (data: any) => api.post('/api/phishing/campaigns', data),
  getCampaignResults: (id: string) => api.get(`/api/phishing/campaigns/${id}/results`),
};

export const trainingService = {
  getModules: () => api.get('/api/training/modules'),
  getEmployeeProgress: () => api.get('/api/training/progress'),
  getCertifications: () => api.get('/api/training/certifications'),
  completeModule: (moduleId: string) => api.post(`/api/training/modules/${moduleId}/complete`),
};

export const authService = {
  login: (credentials: { email: string; password: string }) => 
    api.post('/api/auth/login', credentials),
  register: (userData: any) => api.post('/api/auth/register', userData),
  logout: () => api.post('/api/auth/logout'),
  getCurrentUser: () => api.get('/api/auth/me'),
};

export default api;
