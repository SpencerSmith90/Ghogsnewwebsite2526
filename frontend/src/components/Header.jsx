import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [calculatorsDropdownOpen, setCalculatorsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Why Groundhogs', path: '/why-groundhogs' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Exterior Waterproofing — Flagship Service', path: '/services/exterior-waterproofing', flagship: true },
    { name: 'Foundation Repair & Replacement', path: '/services/foundation-repair-replacement' },
    { name: 'Push Pier Systems', path: '/services/push-pier-systems' },
    { name: 'Concentric Pier Systems', path: '/services/concentric-pier-systems' },
    { name: 'Interior Waterproofing', path: '/services/interior-waterproofing' },
    { name: 'Steel Post & Beam Systems', path: '/services/steel-post-beam-systems' },
    { name: 'EverBrace™ Wall Restoration', path: '/services/everbrace-wall-restoration' }
  ];

  const resourceLinks = [
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Warranty & Guarantee', path: '/warranty' },
    { name: 'Our Systems & Technology', path: '/our-systems' },
    { name: 'Resources & FAQ', path: '/resources' },
    { name: 'Careers', path: '/careers' }
  ];

  const calculatorLinks = [
    { name: 'Exterior Waterproofing Calculator', path: '/widgets/waterproofing-calculator.html' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://customer-assets.emergentagent.com/job_waterproof-blog/artifacts/c30ca5bf_IMG_0121.png"
              alt="Groundhogs"
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  location.pathname === link.path
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-1 ${
                  location.pathname.startsWith('/services')
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block px-4 py-3 text-sm transition-colors hover:bg-orange-50 ${
                          service.flagship 
                            ? 'font-semibold text-orange-600 hover:text-orange-700' 
                            : 'text-gray-700 hover:text-orange-600'
                        } ${location.pathname === service.path ? 'bg-orange-50' : ''}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  location.pathname === link.path
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-1 ${
                  resourceLinks.some(r => location.pathname === r.path)
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    {resourceLinks.map((resource) => (
                      <Link
                        key={resource.path}
                        to={resource.path}
                        className={`block px-4 py-3 text-sm transition-colors hover:bg-orange-50 text-gray-700 hover:text-orange-600 ${
                          location.pathname === resource.path ? 'bg-orange-50' : ''
                        }`}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cost Calculators Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCalculatorsDropdownOpen(true)}
              onMouseLeave={() => setCalculatorsDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-1 ${
                  location.pathname.includes('/widgets/')
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                Cost Calculators
                <ChevronDown size={16} className={`transition-transform ${calculatorsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {calculatorsDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    {calculatorLinks.map((calc) => (
                      <a
                        key={calc.path}
                        href={calc.path}
                        className="block px-4 py-3 text-sm transition-colors hover:bg-orange-50 text-gray-700 hover:text-orange-600"
                      >
                        {calc.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  location.pathname === link.path
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:1-888-907-3777" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-lg transition-colors">
              <span className="text-2xl">📞</span>
              <span>1-888-907-3777</span>
            </a>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  location.pathname === '/'
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-1 w-full ${
                    location.pathname.startsWith('/services')
                      ? 'text-orange-600'
                      : 'text-gray-700'
                  }`}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm transition-colors hover:text-orange-600 ${
                          service.flagship 
                            ? 'font-semibold text-orange-600' 
                            : 'text-gray-600'
                        } ${location.pathname === service.path ? 'text-orange-600' : ''}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resources Dropdown */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-1 w-full ${
                    resourceLinks.some(r => location.pathname === r.path)
                      ? 'text-orange-600'
                      : 'text-gray-700'
                  }`}
                >
                  Resources
                  <ChevronDown size={16} className={`transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {resourceLinks.map((resource) => (
                      <Link
                        key={resource.path}
                        to={resource.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm transition-colors hover:text-orange-600 text-gray-600 ${
                          location.pathname === resource.path ? 'text-orange-600' : ''
                        }`}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Cost Calculators Dropdown */}
              <div>
                <button
                  onClick={() => setMobileCalculatorsOpen(!mobileCalculatorsOpen)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-1 w-full ${
                    location.pathname.includes('/widgets/')
                      ? 'text-orange-600'
                      : 'text-gray-700'
                  }`}
                >
                  Cost Calculators
                  <ChevronDown size={16} className={`transition-transform ${mobileCalculatorsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileCalculatorsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {calculatorLinks.map((calc) => (
                      <a
                        key={calc.path}
                        href={calc.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm transition-colors hover:text-orange-600 text-gray-600"
                      >
                        {calc.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    location.pathname === link.path
                      ? 'text-orange-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Phone Number - Mobile */}
              <a 
                href="tel:1-888-907-3777" 
                className="block text-center bg-orange-100 text-orange-600 font-bold text-xl py-4 rounded-lg hover:bg-orange-200 transition-colors mt-4"
              >
                📞 1-888-907-3777
              </a>
              
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white w-full mt-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;