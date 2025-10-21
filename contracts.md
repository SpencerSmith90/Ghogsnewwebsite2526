# Groundhogs Website - Backend Implementation Contracts

## Overview
Building a CMS-enabled backend for the Groundhogs foundation repair website with MongoDB, FastAPI, and React admin dashboard.

## Database Models

### 1. SiteSettings
- company_name: str
- tagline: str
- description: str
- phone: str
- email: str
- address: str
- logo: str (URL)

### 2. Services
- id: str
- title: str
- slug: str
- description: str
- image: str (URL)
- featured: bool
- order: int
- created_at: datetime
- updated_at: datetime

### 3. Projects
- id: str
- title: str
- description: str
- image: str (URL)
- category: str
- created_at: datetime
- updated_at: datetime

### 4. Materials
- id: str
- name: str
- image: str (URL)
- order: int

### 5. PropertyTypes
- id: str
- type: str
- description: str
- image: str (URL)
- order: int

### 6. Differentiators
- id: str
- title: str
- description: str
- icon: str
- order: int

### 7. Testimonials
- id: str
- name: str
- location: str
- text: str
- avatar: str (URL)
- rating: int
- featured: bool
- created_at: datetime

### 8. BlogPosts
- id: str
- title: str
- slug: str
- excerpt: str
- content: str
- image: str (URL)
- author_name: str
- author_role: str
- author_avatar: str (URL)
- category: str
- featured: bool
- published: bool
- created_at: datetime
- updated_at: datetime

### 9. ContactSubmissions
- id: str
- name: str
- email: str
- phone: str
- subject: str
- message: str
- status: str (new, contacted, resolved)
- created_at: datetime

### 10. AdminUsers
- id: str
- username: str
- email: str
- password_hash: str
- created_at: datetime

## API Endpoints

### Public Endpoints (No Auth Required)
- GET /api/site-settings - Get site settings
- GET /api/services - Get all services
- GET /api/services/{slug} - Get service by slug
- GET /api/projects - Get all projects (with optional category filter)
- GET /api/materials - Get all materials
- GET /api/property-types - Get all property types
- GET /api/differentiators - Get all differentiators
- GET /api/testimonials - Get testimonials (featured first)
- GET /api/blog - Get all published blog posts (with optional category filter)
- GET /api/blog/{slug} - Get blog post by slug
- POST /api/contact - Submit contact form

### Admin Endpoints (Auth Required)
- POST /api/admin/login - Admin login
- GET /api/admin/dashboard-stats - Get dashboard statistics

- GET /api/admin/services - Get all services
- POST /api/admin/services - Create service
- PUT /api/admin/services/{id} - Update service
- DELETE /api/admin/services/{id} - Delete service

- GET /api/admin/projects - Get all projects
- POST /api/admin/projects - Create project
- PUT /api/admin/projects/{id} - Update project
- DELETE /api/admin/projects/{id} - Delete project

- GET /api/admin/blog - Get all blog posts
- POST /api/admin/blog - Create blog post
- PUT /api/admin/blog/{id} - Update blog post
- DELETE /api/admin/blog/{id} - Delete blog post

- GET /api/admin/testimonials - Get all testimonials
- POST /api/admin/testimonials - Create testimonial
- PUT /api/admin/testimonials/{id} - Update testimonial
- DELETE /api/admin/testimonials/{id} - Delete testimonial

- GET /api/admin/contacts - Get all contact submissions
- PUT /api/admin/contacts/{id} - Update contact status

- GET /api/admin/site-settings - Get site settings
- PUT /api/admin/site-settings - Update site settings

## Frontend Integration Plan

### Replace Mock Data
1. Create API service file: `/app/frontend/src/services/api.js`
2. Replace mock imports with API calls in all pages
3. Add loading states and error handling
4. Add React Query or similar for data fetching

### Admin Dashboard Routes
- /admin/login - Admin login page
- /admin/dashboard - Dashboard overview
- /admin/services - Manage services
- /admin/projects - Manage projects
- /admin/blog - Manage blog posts
- /admin/testimonials - Manage testimonials
- /admin/contacts - View contact submissions
- /admin/settings - Site settings

### Admin Features
- Simple authentication (JWT)
- CRUD operations for all content
- Image URL input fields
- Rich text editor for blog content
- Status management for contact submissions
- Dashboard with quick stats

## Implementation Priority
1. ✅ Frontend with mock data (DONE)
2. Database models and seeding with current data
3. Public API endpoints
4. Admin authentication
5. Admin API endpoints
6. Admin dashboard UI
7. Frontend integration with backend
8. Testing

## Notes
- Using image URLs (not file uploads) for simplicity
- Simple JWT authentication for admin
- All dates in UTC
- SEO meta tags handled in frontend
- No user-facing authentication needed
