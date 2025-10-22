import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Public API calls
export const getSiteSettings = () => api.get('/site-settings');
export const getServices = () => api.get('/services');
export const getServiceBySlug = (slug) => api.get(`/services/${slug}`);
export const getProjects = (category = null) => api.get('/projects', { params: { category } });
export const getMaterials = () => api.get('/materials');
export const getPropertyTypes = () => api.get('/property-types');
export const getDifferentiators = () => api.get('/differentiators');
export const getTestimonials = () => api.get('/testimonials');
export const getBlogPosts = (category = null) => api.get('/blog', { params: { category } });
export const getBlogPostBySlug = (slug) => api.get(`/blog/${slug}`);
export const submitContact = (data) => api.post('/contact', data);

// Admin API calls
export const adminLogin = (credentials) => api.post('/admin/login', credentials);
export const getDashboardStats = () => api.get('/admin/dashboard-stats');

// Admin Services
export const adminGetServices = () => api.get('/admin/services');
export const adminCreateService = (data) => api.post('/admin/services', data);
export const adminUpdateService = (id, data) => api.put(`/admin/services/${id}`, data);
export const adminDeleteService = (id) => api.delete(`/admin/services/${id}`);

// Admin Projects
export const adminGetProjects = () => api.get('/admin/projects');
export const adminCreateProject = (data) => api.post('/admin/projects', data);
export const adminUpdateProject = (id, data) => api.put(`/admin/projects/${id}`, data);
export const adminDeleteProject = (id) => api.delete(`/admin/projects/${id}`);

// Admin Blog
export const adminGetBlogPosts = () => api.get('/admin/blog');
export const adminCreateBlogPost = (data) => api.post('/admin/blog', data);
export const adminUpdateBlogPost = (id, data) => api.put(`/admin/blog/${id}`, data);
export const adminDeleteBlogPost = (id) => api.delete(`/admin/blog/${id}`);

// Admin Testimonials
export const adminGetTestimonials = () => api.get('/admin/testimonials');
export const adminCreateTestimonial = (data) => api.post('/admin/testimonials', data);
export const adminUpdateTestimonial = (id, data) => api.put(`/admin/testimonials/${id}`, data);
export const adminDeleteTestimonial = (id) => api.delete(`/admin/testimonials/${id}`);

// Admin Contacts
export const adminGetContacts = () => api.get('/admin/contacts');
export const adminUpdateContactStatus = (id, status) => api.put(`/admin/contacts/${id}`, { status });

// Admin Site Settings
export const adminGetSiteSettings = () => api.get('/admin/site-settings');
export const adminUpdateSiteSettings = (data) => api.put('/admin/site-settings', data);

// Video Reels (Public)
export const getVideoReels = () => api.get('/video-reels');

// Admin Video Reels
export const adminGetVideoReels = () => api.get('/admin/video-reels');
export const adminCreateVideoReel = (data) => api.post('/admin/video-reels', data);
export const adminUpdateVideoReel = (id, data) => api.put(`/admin/video-reels/${id}`, data);
export const adminDeleteVideoReel = (id) => api.delete(`/admin/video-reels/${id}`);

export default api;