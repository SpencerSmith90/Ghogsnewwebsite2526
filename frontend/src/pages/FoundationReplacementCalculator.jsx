import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import SEO from '../components/SEO';
import { toast } from 'sonner';

const FoundationReplacementCalculator = () => {
  const [linearFeet, setLinearFeet] = useState(150);
  const [includeSump, setIncludeSump] = useState(false);
  const [includeEngineering, setIncludeEngineering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });
  
  // Automatic tiered pricing based on linear feet - FOUNDATION REPLACEMENT RATES
  const getCostPerFoot = (feet) => {
    if (feet > 50) return 1000;
    if (feet >= 21) return 1100;
    return 1200;
  };
  
  const costPerFoot = getCostPerFoot(linearFeet);
  const baseCalc = linearFeet * costPerFoot;
  const sumpCost = includeSump ? 4000 : 0;
  const engineeringCost = includeEngineering ? 5000 : 0;
  const grandTotal = baseCalc + sumpCost + engineeringCost;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      
      const estimateDetails = `
FOUNDATION REPLACEMENT CALCULATOR ESTIMATE REQUEST

Foundation Perimeter: ${linearFeet} linear feet
Cost Per Foot: $${costPerFoot}/ft (${linearFeet > 50 ? 'Volume discount' : linearFeet >= 21 ? 'Standard rate' : 'Small project rate'})
Base Foundation Replacement Cost: $${baseCalc.toLocaleString()}
${includeSump ? `Sump Pump & Pit: $4,000` : ''}
${includeEngineering ? `Engineering & Permitting: $5,000` : ''}
ESTIMATED TOTAL: $${grandTotal.toLocaleString()}

*This is an automated estimate. A formal quote will be provided after site assessment.

Customer Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
      `.trim();
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          subject: `Foundation Replacement Calculator Quote - $${grandTotal.toLocaleString()} Estimate`,
          message: estimateDetails,
          photo_urls: []
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you!",
          description: "Our team will review your request and respond within 24 hours.",
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: ''
        });
        setLinearFeet(150);
        setIncludeSump(false);
        setIncludeEngineering(false);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or call us at 1-888-907-3777",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateSliderBg = (elementId, value, min, max) => {
    const slider = document.getElementById(elementId);
    if (slider) {
      const percent = ((value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, #f97316 0%, #f97316 ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`;
    }
  };

  useEffect(() => {
    updateSliderBg('feetSlider', linearFeet, 10, 300);
  }, [linearFeet]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Foundation Replacement Cost Calculator",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "1000-1200",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1000-1200",
        "priceCurrency": "USD",
        "unitText": "LINEAR_FOOT"
      }
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Groundhogs Ltd",
      "telephone": "1-888-907-3777",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "415 Fort William Road",
        "addressLocality": "Thunder Bay",
        "addressRegion": "ON",
        "postalCode": "P7B 2Z5"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Instant Foundation Replacement Estimate Calculator | Groundhogs"
        description="Calculate your foundation replacement cost instantly. Get accurate estimates based on foundation perimeter, engineering, and permitting requirements."
        keywords="foundation replacement cost calculator, foundation repair estimate, concrete foundation replacement cost"
        structuredData={structuredData}
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Back Navigation */}
            <div className="mb-6">
              <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2">
                ← Back to Home Page
              </Link>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="text-center border-b bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-t-lg">
                <CardTitle className="text-3xl md:text-4xl mb-2">
                  Instant Foundation Replacement Estimate
                </CardTitle>
                <p className="text-gray-300">Get your personalized cost estimate in seconds</p>
              </CardHeader>

              {/* Service Area Banner */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-6 text-center">
                <p className="text-sm md:text-base font-semibold">
                  🏆 Proudly Serving{' '}
                  <Link to="/thunder-bay-foundation-repair" className="underline hover:text-orange-100 transition-colors">Thunder Bay</Link>
                  {', '}
                  <Link to="/winnipeg-foundation-repair" className="underline hover:text-orange-100 transition-colors">Winnipeg</Link>
                  {' & '}
                  <Link to="/sudbury-foundation-repair" className="underline hover:text-orange-100 transition-colors">Sudbury</Link>
                </p>
              </div>

              <CardContent className="p-8">
                {/* Linear Feet Input */}
                <div className="mb-8">
                  <label htmlFor="linearFeet" className="block text-sm font-semibold mb-2 text-gray-700">
                    Foundation Perimeter (Linear Feet) 
                    <span className="text-gray-500 font-normal text-sm ml-2">
                      (Average home is approximately 150 linear feet in perimeter)
                    </span>
                  </label>
                  <div className="flex gap-4 items-center mb-4">
                    <input
                      type="number"
                      id="linearFeet"
                      min="10"
                      max="300"
                      step="1"
                      value={linearFeet}
                      onChange={(e) => setLinearFeet(Math.max(10, Math.min(300, Number(e.target.value))))}
                      className="w-32 px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold text-lg focus:outline-none focus:border-orange-500"
                    />
                    <span className="text-lg font-bold text-orange-600 min-w-20">{linearFeet} ft</span>
                  </div>
                  <input
                    type="range"
                    id="feetSlider"
                    min="10"
                    max="300"
                    step="1"
                    value={linearFeet}
                    onChange={(e) => setLinearFeet(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${((linearFeet - 10) / (300 - 10)) * 100}%, #e5e7eb ${((linearFeet - 10) / (300 - 10)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Current Rate:</strong> ${costPerFoot}/ft
                      <span className="text-blue-600 ml-2">
                        {linearFeet > 50 && '(Volume discount applied)'}
                        {linearFeet >= 21 && linearFeet <= 50 && '(Standard rate)'}
                        {linearFeet <= 20 && '(Small project rate)'}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Sump Pump Checkbox */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:border-orange-500 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      id="sumpPump"
                      checked={includeSump}
                      onChange={(e) => setIncludeSump(e.target.checked)}
                      className="w-6 h-6 cursor-pointer accent-orange-600"
                    />
                    <label htmlFor="sumpPump" className="font-semibold text-gray-700 cursor-pointer flex-1">
                      Add Sump Pump & Pit (+$4,000)
                    </label>
                  </div>
                </div>

                {/* Engineering & Permitting Checkbox */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:border-orange-500 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      id="engineering"
                      checked={includeEngineering}
                      onChange={(e) => setIncludeEngineering(e.target.checked)}
                      className="w-6 h-6 cursor-pointer accent-orange-600"
                    />
                    <label htmlFor="engineering" className="font-semibold text-gray-700 cursor-pointer flex-1">
                      Add Engineering & Permitting (+$5,000)
                    </label>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Your Estimate</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Foundation Replacement ({linearFeet} ft × ${costPerFoot}/ft)</span>
                      <span className="font-semibold">${baseCalc.toLocaleString()}</span>
                    </div>
                    
                    {includeSump && (
                      <div className="flex justify-between text-gray-700">
                        <span>Sump Pump & Pit</span>
                        <span className="font-semibold">$4,000</span>
                      </div>
                    )}

                    {includeEngineering && (
                      <div className="flex justify-between text-gray-700">
                        <span>Engineering & Permitting</span>
                        <span className="font-semibold">$5,000</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-2xl font-bold text-gray-900 pt-4 border-t-2 border-orange-400">
                      <span>Grand Total</span>
                      <span>${grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic text-center mt-4">
                    *Total excludes applicable taxes
                  </p>
                </div>

                {/* Why Choose Groundhogs Section */}
                <div className="border-t-2 border-gray-200 pt-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Choose Groundhogs?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Fully Engineered Solutions</h4>
                          <p className="text-sm text-gray-700">We understand the value of proper engineering and permits and we don't cut corners.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Specialized Foundation Replacement Crews</h4>
                          <p className="text-sm text-gray-700">Fully trained crews who specialize in only foundation replacements. Nothing else. This is all they do.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Robust Transferable Warranty</h4>
                          <p className="text-sm text-gray-700">Industry-leading warranty that protects your investment and transfers to future homeowners.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Least Invasive Approach</h4>
                          <p className="text-sm text-gray-700">Most foundation replacements do not displace homeowners at all. Even when replacing an entire foundation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900 text-white p-4 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-1">
                      🏆 25+ Years Experience • 2000+ Projects Completed • 98% Client Satisfaction
                    </p>
                    <p className="text-sm text-gray-300">
                      Ontario & Manitoba's most trusted foundation experts
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-t-2 border-gray-200 pt-6 mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Submit for Formal Quote</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Enter your contact information below and we'll provide a detailed formal quote within 24 hours.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Smith"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(555) 123-4567"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2 text-gray-700">
                      Property Address *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 Main Street"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">
                      City *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Thunder Bay"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Your Estimate:</strong> ${grandTotal.toLocaleString()} ({linearFeet} ft × ${costPerFoot}/ft{includeSump ? ' + Sump' : ''}{includeEngineering ? ' + Engineering' : ''})
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      This estimate will be automatically included in your quote request.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit for Formal Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationReplacementCalculator;
