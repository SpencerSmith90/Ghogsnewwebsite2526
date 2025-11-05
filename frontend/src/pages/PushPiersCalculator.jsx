import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import SEO from '../components/SEO';
import { toast } from 'sonner';

const PushPiersCalculator = () => {
  const [linearFeet, setLinearFeet] = useState(20);
  const [includeEngineering, setIncludeEngineering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });
  
  // Push Pier Calculation: Piers spaced every 5 feet at $3,500 per pier
  const piersNeeded = Math.ceil(linearFeet / 5);
  const costPerPier = 3500;
  const baseCalc = piersNeeded * costPerPier;
  const engineeringCost = includeEngineering ? 5000 : 0;
  const grandTotal = baseCalc + engineeringCost;
  
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
PUSH PIERS CALCULATOR ESTIMATE REQUEST

Settling Area Length: ${linearFeet} linear feet
Piers Required: ${piersNeeded} piers (spaced every 5 feet)
Cost Per Pier: $${costPerPier.toLocaleString()}
Base Push Pier Installation Cost: $${baseCalc.toLocaleString()}
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
          subject: `Push Piers Calculator Quote - $${grandTotal.toLocaleString()} Estimate`,
          message: estimateDetails,
          photo_urls: []
        }),
      });

      if (response.ok) {
        toast.success("Thank you! Our team will review your request and respond within 24 hours.");
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: ''
        });
        setLinearFeet(20);
        setIncludeEngineering(false);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error("Submission Error. Please try again or call us at 1-888-907-3777");
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
    updateSliderBg('feetSlider', linearFeet, 5, 100);
  }, [linearFeet]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Push Piers Cost Calculator",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "3500",
      "priceCurrency": "USD",
      "description": "Push pier installation at $3,500 per pier"
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
        title="Instant Push Piers Estimate Calculator | Groundhogs"
        description="Calculate your push pier foundation repair cost instantly. Get accurate estimates based on settling area length with piers spaced every 5 feet."
        keywords="push piers cost calculator, foundation pier estimate, underpinning cost calculator, foundation stabilization"
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
                  Instant Push Piers Estimate
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
                    Length of Settling Area (Linear Feet) 
                    <span className="text-gray-500 font-normal text-sm ml-2">
                      (Piers spaced approximately every 5 feet)
                    </span>
                  </label>
                  <div className="flex gap-4 items-center mb-4">
                    <input
                      type="number"
                      id="linearFeet"
                      min="5"
                      max="100"
                      step="1"
                      value={linearFeet}
                      onChange={(e) => setLinearFeet(Math.max(5, Math.min(100, Number(e.target.value))))}
                      className="w-32 px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold text-lg focus:outline-none focus:border-orange-500"
                    />
                    <span className="text-lg font-bold text-orange-600 min-w-20">{linearFeet} ft</span>
                  </div>
                  <input
                    type="range"
                    id="feetSlider"
                    min="5"
                    max="100"
                    step="1"
                    value={linearFeet}
                    onChange={(e) => setLinearFeet(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${((linearFeet - 5) / (100 - 5)) * 100}%, #e5e7eb ${((linearFeet - 5) / (100 - 5)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Piers Required:</strong> {piersNeeded} piers
                      <span className="text-blue-600 ml-2">
                        (${costPerPier.toLocaleString()} per pier)
                      </span>
                    </p>
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
                      <span>Push Pier Installation ({piersNeeded} piers × ${costPerPier.toLocaleString()})</span>
                      <span className="font-semibold">${baseCalc.toLocaleString()}</span>
                    </div>

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

                {/* Disclaimer */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> All online cost calculations are estimates only and are not binding. Final pricing must be confirmed by one of our professional estimators following an on-site assessment of your property.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Groundhogs Section */}
                <div className="border-t-2 border-gray-200 pt-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Choose Groundhogs?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Permanent Foundation Stabilization</h4>
                          <p className="text-sm text-gray-700">Push piers are driven to bedrock or load-bearing strata—providing permanent, engineered support.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Fast Installation</h4>
                          <p className="text-sm text-gray-700">Most push pier projects completed in 1-2 days with minimal disruption to your property.</p>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Lift & Stabilize</h4>
                          <p className="text-sm text-gray-700">Push piers not only stabilize your foundation—they can often lift it back to its original position.</p>
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
                      <strong>Your Estimate:</strong> ${grandTotal.toLocaleString()} ({piersNeeded} piers{includeEngineering ? ' + Engineering' : ''})
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

export default PushPiersCalculator;
