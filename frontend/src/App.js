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
import WhyGroundhogs from "./pages/WhyGroundhogs";
import ServiceAreas from "./pages/ServiceAreas";
import ThunderBay from "./pages/ThunderBay";
import Winnipeg from "./pages/Winnipeg";
import Sudbury from "./pages/Sudbury";
import ExteriorWaterproofing from "./pages/services/ExteriorWaterproofing";
import FoundationRepair from "./pages/services/FoundationRepair";
import PushPierSystems from "./pages/services/PushPierSystems";
import InteriorWaterproofing from "./pages/services/InteriorWaterproofing";
import SteelPostBeam from "./pages/services/SteelPostBeam";
import EverBrace from "./pages/services/EverBrace";
import ConcentricPiers from "./pages/services/ConcentricPiers";
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
import AdvancedExteriorWaterproofing from "./pages/blog/AdvancedExteriorWaterproofing";
import InteriorWaterproofingSystems from "./pages/blog/InteriorWaterproofingSystems";
import ExteriorWaterproofingHub from "./pages/ExteriorWaterproofingHub";
import ExteriorWaterproofingThunderBay from "./pages/geo/ExteriorWaterproofingThunderBay";
import ExteriorWaterproofingWinnipeg from "./pages/geo/ExteriorWaterproofingWinnipeg";
import ExteriorWaterproofingSudbury from "./pages/geo/ExteriorWaterproofingSudbury";
import WaterproofingCalculator from "./pages/WaterproofingCalculator";

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
                    <Route path="/services/concentric-pier-systems" element={<ConcentricPiers />} />
                    <Route path="/exterior-waterproofing" element={<ExteriorWaterproofingHub />} />
                    <Route path="/exterior-waterproofing-thunder-bay" element={<ExteriorWaterproofingThunderBay />} />
                    <Route path="/exterior-waterproofing-winnipeg" element={<ExteriorWaterproofingWinnipeg />} />
                    <Route path="/exterior-waterproofing-sudbury" element={<ExteriorWaterproofingSudbury />} />
                    <Route path="/thunder-bay-foundation-repair" element={<ThunderBay />} />
                    <Route path="/winnipeg-foundation-repair" element={<Winnipeg />} />
                    <Route path="/sudbury-foundation-repair" element={<Sudbury />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/why-groundhogs" element={<WhyGroundhogs />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/advanced-exterior-waterproofing-thunder-bay" element={<AdvancedExteriorWaterproofing />} />
                    <Route path="/blog/interior-waterproofing-systems" element={<InteriorWaterproofingSystems />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service-areas" element={<ServiceAreas />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/warranty" element={<Warranty />} />
                    <Route path="/our-systems" element={<OurSystems />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/careers" element={<Careers />} />
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
