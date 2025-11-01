#!/usr/bin/env python3
"""
Comprehensive backend API testing for Groundhogs website
Tests all public and admin endpoints with proper authentication
"""

import requests
import json
import sys
from datetime import datetime

# Use the production URL from frontend/.env
BASE_URL = "https://waterproof-blog.preview.emergentagent.com/api"

class GroundhogAPITester:
    def __init__(self):
        self.base_url = BASE_URL
        self.session = requests.Session()
        self.admin_token = None
        self.test_results = []
        
    def log_test(self, test_name, success, message="", response_data=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "message": message,
            "response_data": response_data
        })
        
    def test_public_endpoints(self):
        """Test all public API endpoints"""
        print("\n🔓 Testing Public Endpoints...")
        
        # Test root endpoint
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Root Endpoint", True, f"Status: {data.get('status', 'unknown')}")
            else:
                self.log_test("Root Endpoint", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Exception: {str(e)}")
            
        # Test site settings
        try:
            response = self.session.get(f"{self.base_url}/site-settings")
            if response.status_code == 200:
                data = response.json()
                company_name = data.get('company_name', 'Unknown')
                self.log_test("Site Settings", True, f"Company: {company_name}")
            else:
                self.log_test("Site Settings", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Site Settings", False, f"Exception: {str(e)}")
            
        # Test services
        try:
            response = self.session.get(f"{self.base_url}/services")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Services List", True, f"Found {len(data)} services")
                
                # Test individual service by slug
                if data and len(data) > 0:
                    first_service_slug = data[0].get('slug')
                    if first_service_slug:
                        service_response = self.session.get(f"{self.base_url}/services/{first_service_slug}")
                        if service_response.status_code == 200:
                            service_data = service_response.json()
                            self.log_test("Service by Slug", True, f"Retrieved: {service_data.get('title', 'Unknown')}")
                        else:
                            self.log_test("Service by Slug", False, f"Status code: {service_response.status_code}")
            else:
                self.log_test("Services List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Services List", False, f"Exception: {str(e)}")
            
        # Test projects (without filter)
        try:
            response = self.session.get(f"{self.base_url}/projects")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Projects List", True, f"Found {len(data)} projects")
            else:
                self.log_test("Projects List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Projects List", False, f"Exception: {str(e)}")
            
        # Test projects with category filter
        try:
            response = self.session.get(f"{self.base_url}/projects?category=Replacement")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Projects by Category", True, f"Found {len(data)} replacement projects")
            else:
                self.log_test("Projects by Category", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Projects by Category", False, f"Exception: {str(e)}")
            
        # Test materials
        try:
            response = self.session.get(f"{self.base_url}/materials")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Materials List", True, f"Found {len(data)} materials")
            else:
                self.log_test("Materials List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Materials List", False, f"Exception: {str(e)}")
            
        # Test property types
        try:
            response = self.session.get(f"{self.base_url}/property-types")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Property Types", True, f"Found {len(data)} property types")
            else:
                self.log_test("Property Types", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Property Types", False, f"Exception: {str(e)}")
            
        # Test differentiators
        try:
            response = self.session.get(f"{self.base_url}/differentiators")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Differentiators", True, f"Found {len(data)} differentiators")
            else:
                self.log_test("Differentiators", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Differentiators", False, f"Exception: {str(e)}")
            
        # Test testimonials
        try:
            response = self.session.get(f"{self.base_url}/testimonials")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Testimonials", True, f"Found {len(data)} testimonials")
            else:
                self.log_test("Testimonials", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Testimonials", False, f"Exception: {str(e)}")
            
        # Test blog posts (without filter)
        try:
            response = self.session.get(f"{self.base_url}/blog")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Blog Posts", True, f"Found {len(data)} published posts")
                
                # Test individual blog post by slug
                if data and len(data) > 0:
                    first_post_slug = data[0].get('slug')
                    if first_post_slug:
                        post_response = self.session.get(f"{self.base_url}/blog/{first_post_slug}")
                        if post_response.status_code == 200:
                            post_data = post_response.json()
                            self.log_test("Blog Post by Slug", True, f"Retrieved: {post_data.get('title', 'Unknown')}")
                        else:
                            self.log_test("Blog Post by Slug", False, f"Status code: {post_response.status_code}")
            else:
                self.log_test("Blog Posts", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Blog Posts", False, f"Exception: {str(e)}")
            
        # Test blog posts with category filter
        try:
            response = self.session.get(f"{self.base_url}/blog?category=Foundation Repair")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Blog Posts by Category", True, f"Found {len(data)} foundation repair posts")
            else:
                self.log_test("Blog Posts by Category", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Blog Posts by Category", False, f"Exception: {str(e)}")
            
        # Test contact form submission
        try:
            contact_data = {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "phone": "555-123-4567",
                "subject": "Foundation Inspection Request",
                "message": "I need a foundation inspection for my home. There are some cracks appearing in the basement walls."
            }
            response = self.session.post(f"{self.base_url}/contact", json=contact_data)
            if response.status_code == 200:
                data = response.json()
                self.log_test("Contact Form Submission", True, f"Contact ID: {data.get('id', 'Unknown')}")
            else:
                self.log_test("Contact Form Submission", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Contact Form Submission", False, f"Exception: {str(e)}")
            
    def admin_login(self):
        """Login to admin and get JWT token"""
        print("\n🔐 Testing Admin Authentication...")
        
        try:
            login_data = {
                "username": "admin",
                "password": "admin123"
            }
            response = self.session.post(f"{self.base_url}/admin/login", json=login_data)
            
            if response.status_code == 200:
                data = response.json()
                self.admin_token = data.get('access_token')
                self.session.headers.update({'Authorization': f'Bearer {self.admin_token}'})
                self.log_test("Admin Login", True, "Successfully authenticated")
                return True
            else:
                self.log_test("Admin Login", False, f"Status code: {response.status_code}")
                return False
        except Exception as e:
            self.log_test("Admin Login", False, f"Exception: {str(e)}")
            return False
            
    def test_admin_endpoints(self):
        """Test admin endpoints (requires authentication)"""
        if not self.admin_token:
            print("❌ Skipping admin tests - no authentication token")
            return
            
        print("\n🔒 Testing Admin Endpoints...")
        
        # Test dashboard stats
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard-stats")
            if response.status_code == 200:
                data = response.json()
                stats = f"Services: {data.get('services', 0)}, Projects: {data.get('projects', 0)}, Blog: {data.get('blog_posts', 0)}, Contacts: {data.get('new_contacts', 0)}"
                self.log_test("Dashboard Stats", True, stats)
            else:
                self.log_test("Dashboard Stats", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Dashboard Stats", False, f"Exception: {str(e)}")
            
        # Test admin services list
        try:
            response = self.session.get(f"{self.base_url}/admin/services")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Admin Services List", True, f"Found {len(data)} services")
            else:
                self.log_test("Admin Services List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Admin Services List", False, f"Exception: {str(e)}")
            
        # Test admin projects list
        try:
            response = self.session.get(f"{self.base_url}/admin/projects")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Admin Projects List", True, f"Found {len(data)} projects")
            else:
                self.log_test("Admin Projects List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Admin Projects List", False, f"Exception: {str(e)}")
            
        # Test admin blog posts list
        try:
            response = self.session.get(f"{self.base_url}/admin/blog")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Admin Blog Posts List", True, f"Found {len(data)} blog posts")
            else:
                self.log_test("Admin Blog Posts List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Admin Blog Posts List", False, f"Exception: {str(e)}")
            
        # Test admin testimonials list
        try:
            response = self.session.get(f"{self.base_url}/admin/testimonials")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Admin Testimonials List", True, f"Found {len(data)} testimonials")
            else:
                self.log_test("Admin Testimonials List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Admin Testimonials List", False, f"Exception: {str(e)}")
            
        # Test admin contacts list
        try:
            response = self.session.get(f"{self.base_url}/admin/contacts")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Admin Contacts List", True, f"Found {len(data)} contact submissions")
            else:
                self.log_test("Admin Contacts List", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Admin Contacts List", False, f"Exception: {str(e)}")
            
        # Test admin site settings
        try:
            response = self.session.get(f"{self.base_url}/admin/site-settings")
            if response.status_code == 200:
                data = response.json()
                self.log_test("Admin Site Settings", True, f"Company: {data.get('company_name', 'Unknown')}")
            else:
                self.log_test("Admin Site Settings", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Admin Site Settings", False, f"Exception: {str(e)}")
            
        # Test CRUD operations - Create a new service
        try:
            new_service = {
                "title": "Test Service",
                "slug": "test-service",
                "description": "This is a test service created during API testing",
                "image": "https://example.com/test-image.jpg",
                "featured": False,
                "order": 99
            }
            response = self.session.post(f"{self.base_url}/admin/services", json=new_service)
            if response.status_code == 200:
                data = response.json()
                service_id = data.get('id')
                self.log_test("Create Service", True, f"Created service with ID: {service_id}")
                
                # Test updating the service
                if service_id:
                    update_data = {"title": "Updated Test Service"}
                    update_response = self.session.put(f"{self.base_url}/admin/services/{service_id}", json=update_data)
                    if update_response.status_code == 200:
                        self.log_test("Update Service", True, "Service updated successfully")
                    else:
                        self.log_test("Update Service", False, f"Status code: {update_response.status_code}")
                        
                    # Test deleting the service
                    delete_response = self.session.delete(f"{self.base_url}/admin/services/{service_id}")
                    if delete_response.status_code == 200:
                        self.log_test("Delete Service", True, "Service deleted successfully")
                    else:
                        self.log_test("Delete Service", False, f"Status code: {delete_response.status_code}")
            else:
                self.log_test("Create Service", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Create Service", False, f"Exception: {str(e)}")
            
    def test_error_scenarios(self):
        """Test error handling scenarios"""
        print("\n⚠️  Testing Error Scenarios...")
        
        # Test non-existent service
        try:
            response = self.session.get(f"{self.base_url}/services/non-existent-service")
            if response.status_code == 404:
                self.log_test("Non-existent Service", True, "Correctly returned 404")
            else:
                self.log_test("Non-existent Service", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("Non-existent Service", False, f"Exception: {str(e)}")
            
        # Test non-existent blog post
        try:
            response = self.session.get(f"{self.base_url}/blog/non-existent-post")
            if response.status_code == 404:
                self.log_test("Non-existent Blog Post", True, "Correctly returned 404")
            else:
                self.log_test("Non-existent Blog Post", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("Non-existent Blog Post", False, f"Exception: {str(e)}")
            
        # Test admin endpoint without authentication
        try:
            # Create a new session without auth headers
            no_auth_session = requests.Session()
            response = no_auth_session.get(f"{self.base_url}/admin/dashboard-stats")
            if response.status_code == 401:
                self.log_test("Unauthorized Admin Access", True, "Correctly returned 401")
            else:
                self.log_test("Unauthorized Admin Access", False, f"Expected 401, got {response.status_code}")
        except Exception as e:
            self.log_test("Unauthorized Admin Access", False, f"Exception: {str(e)}")
            
        # Test invalid login credentials
        try:
            no_auth_session = requests.Session()
            invalid_login = {
                "username": "invalid",
                "password": "invalid"
            }
            response = no_auth_session.post(f"{self.base_url}/admin/login", json=invalid_login)
            if response.status_code == 401:
                self.log_test("Invalid Login Credentials", True, "Correctly returned 401")
            else:
                self.log_test("Invalid Login Credentials", False, f"Expected 401, got {response.status_code}")
        except Exception as e:
            self.log_test("Invalid Login Credentials", False, f"Exception: {str(e)}")
            
    def run_all_tests(self):
        """Run all test suites"""
        print(f"🚀 Starting Groundhogs API Tests")
        print(f"📍 Base URL: {self.base_url}")
        print(f"⏰ Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        # Run test suites
        self.test_public_endpoints()
        
        if self.admin_login():
            self.test_admin_endpoints()
        
        self.test_error_scenarios()
        
        # Print summary
        self.print_summary()
        
    def print_summary(self):
        """Print test summary"""
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result['success'])
        failed_tests = total_tests - passed_tests
        
        print(f"\n📊 TEST SUMMARY")
        print(f"{'='*50}")
        print(f"Total Tests: {total_tests}")
        print(f"✅ Passed: {passed_tests}")
        print(f"❌ Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print(f"\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result['success']:
                    print(f"   • {result['test']}: {result['message']}")
                    
        print(f"\n⏰ Test completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        # Return exit code based on results
        return 0 if failed_tests == 0 else 1

if __name__ == "__main__":
    tester = GroundhogAPITester()
    exit_code = tester.run_all_tests()
    sys.exit(exit_code)