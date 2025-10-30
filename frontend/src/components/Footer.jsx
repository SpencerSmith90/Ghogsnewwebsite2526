import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getSiteSettings } from '../services/api';

const Footer = () => {
  const { data: siteSettings, loading } = useApi(getSiteSettings);

  if (loading || !siteSettings) {
    return null; // Or a loading skeleton
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={siteSettings.logo}
              alt={siteSettings.company_name}
              className="h-10 mb-4"
            />
            <p className="text-sm mb-4">
              {siteSettings.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-orange-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-orange-500 transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/exterior-waterproofing" className="hover:text-orange-500 transition-colors">
                  Exterior Waterproofing
                </Link>
              </li>
              <li>
                <Link to="/services/foundation-repair-replacement" className="hover:text-orange-500 transition-colors">
                  Foundation Repair
                </Link>
              </li>
              <li>
                <Link to="/services/push-pier-systems" className="hover:text-orange-500 transition-colors">
                  Push Pier Systems
                </Link>
              </li>
              <li>
                <Link to="/services/interior-waterproofing" className="hover:text-orange-500 transition-colors">
                  Interior Waterproofing
                </Link>
              </li>
              <li>
                <Link to="/services/steel-post-beam-systems" className="hover:text-orange-500 transition-colors">
                  Steel Post & Beam
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/testimonials" className="hover:text-orange-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-orange-500 transition-colors">
                  Warranty & Guarantee
                </Link>
              </li>
              <li>
                <Link to="/our-systems" className="hover:text-orange-500 transition-colors">
                  Our Systems
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-orange-500 transition-colors">
                  FAQ & Resources
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-orange-500" />
                <span>{siteSettings.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-orange-500" />
                <a href={`tel:${siteSettings.phone}`} className="hover:text-orange-500">
                  {siteSettings.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-orange-500" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-orange-500">
                  {siteSettings.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} {siteSettings.company_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;