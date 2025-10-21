import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Admin Routes (without header/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
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
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
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
  );
}

export default App;
