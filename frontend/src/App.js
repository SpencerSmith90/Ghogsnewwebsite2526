import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import ExteriorWaterproofing from "./pages/services/ExteriorWaterproofing";
import FoundationRepair from "./pages/services/FoundationRepair";
import PushPierSystems from "./pages/services/PushPierSystems";
import InteriorWaterproofing from "./pages/services/InteriorWaterproofing";
import SteelPostBeam from "./pages/services/SteelPostBeam";
import EverBrace from "./pages/services/EverBrace";
import Testimonials from "./pages/Testimonials";
import Warranty from "./pages/Warranty";
import OurSystems from "./pages/OurSystems";
import Resources from "./pages/Resources";
import Careers from "./pages/Careers";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminServices from "./pages/admin/Services";
import AdminProjects from "./pages/admin/Projects";
import AdminBlogPosts from "./pages/admin/BlogPosts";
import AdminTestimonials from "./pages/admin/Testimonials";
import AdminContacts from "./pages/admin/Contacts";
import AdminSettings from "./pages/admin/Settings";
import AdminVideoReels from "./pages/admin/VideoReels";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes (without header/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute>
                <AdminServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/videos"
            element={
              <ProtectedRoute>
                <AdminVideoReels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <ProtectedRoute>
                <AdminBlogPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/testimonials"
            element={
              <ProtectedRoute>
                <AdminTestimonials />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contacts"
            element={
              <ProtectedRoute>
                <AdminContacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute>
                <AdminSettings />
              </ProtectedRoute>
            }
          />
          
          {/* Public Routes (with header/footer) */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/exterior-waterproofing" element={<ExteriorWaterproofing />} />
                    <Route path="/services/foundation-repair-replacement" element={<FoundationRepair />} />
                    <Route path="/services/push-pier-systems" element={<PushPierSystems />} />
                    <Route path="/services/interior-waterproofing" element={<InteriorWaterproofing />} />
                    <Route path="/services/steel-post-beam-systems" element={<SteelPostBeam />} />
                    <Route path="/services/everbrace-wall-restoration" element={<EverBrace />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service-areas" element={<ServiceAreas />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/warranty" element={<Warranty />} />
                    <Route path="/our-systems" element={<OurSystems />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service-areas" element={<ServiceAreas />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App;
