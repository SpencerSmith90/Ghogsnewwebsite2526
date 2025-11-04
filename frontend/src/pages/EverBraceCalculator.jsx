import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import SEO from '../components/SEO';
import { useToast } from '../hooks/use-toast';

const EverBraceCalculator = () => {
  const { toast } = useToast();
  const [linearFeet, setLinearFeet] = useState(10);
  const [includeInteriorWaterproofing, setIncludeInteriorWaterproofing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });
  
  // EverBrace Calculation: $800 per linear foot
  const costPerFoot = 800;
  const everBraceCost = linearFeet * costPerFoot;
  
  // Optional Interior Waterproofing: $150 per linear foot
  const interiorWaterproofingCost = includeInteriorWaterproofing ? linearFeet * 150 : 0;
  
  const grandTotal = everBraceCost + interiorWaterproofingCost;
  
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
EVERBRACE WALL RESTORATION CALCULATOR ESTIMATE REQUEST

Linear Feet Required: ${linearFeet} feet
EverBrace System: ${linearFeet} ft × $${costPerFoot}/ft = $${everBraceCost.toLocaleString()}
${includeInteriorWaterproofing ? `Interior Waterproofing: ${linearFeet} ft × $150/ft = $${interiorWaterproofingCost.toLocaleString()}` : 'Interior Waterproofing: Not included'}

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
          subject: `EverBrace Calculator Quote - $${grandTotal.toLocaleString()} Estimate`,
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
        setLinearFeet(10);
        setIncludeInteriorWaterproofing(false);
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
    updateSliderBg('feetSlider', linearFeet, 10, 100);
  }, [linearFeet]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EverBrace Wall Restoration Cost Calculator",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "800",
      "priceCurrency": "USD",
      "description": "EverBrace wall restoration at $800 per linear foot"
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
        title="Instant EverBrace Wall Restoration Estimate Calculator | Groundhogs"
        description="Calculate your EverBrace foundation wall restoration cost instantly. Get accurate estimates based on linear footage with optional interior waterproofing."
        keywords="everbrace cost calculator, wall restoration estimate, foundation wall repair cost, basement wall stabilization calculator"
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
                  Instant EverBrace Wall Restoration Estimate
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
                    Wall Length Required (Linear Feet) 
                    <span className="text-gray-500 font-normal text-sm ml-2">
                      (Minimum 10 feet)
                    </span>
                  </label>
                  <div className="flex gap-4 items-center mb-4">
                    <input
                      type="number"
                      id="linearFeet"
                      min="10"
                      max="100"
                      step="1"
                      value={linearFeet}
                      onChange={(e) => setLinearFeet(Math.max(10, Math.min(100, Number(e.target.value))))}
                      className="w-32 px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold text-lg focus:outline-none focus:border-orange-500"
                    />
                    <span className="text-lg font-bold text-orange-600 min-w-20">{linearFeet} ft</span>
                  </div>
                  <input
                    type="range"
                    id="feetSlider"
                    min="10"
                    max="100"
                    step="1"
                    value={linearFeet}
                    onChange={(e) => setLinearFeet(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${((linearFeet - 10) / (100 - 10)) * 100}%, #e5e7eb ${((linearFeet - 10) / (100 - 10)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>EverBrace System:</strong> {linearFeet} linear feet
                      <span className="text-blue-600 ml-2">
                        (${costPerFoot}/ft)
                      </span>
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Steel I-beam and rigid foam panel system for permanent wall stabilization
                    </p>
                  </div>
                </div>

                {/* Optional Interior Waterproofing */}
                <div className="mb-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="interiorWaterproofing"
                      checked={includeInteriorWaterproofing}
                      onChange={(e) => setIncludeInteriorWaterproofing(e.target.checked)}
                      className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <label htmlFor="interiorWaterproofing" className="font-semibold text-gray-900 cursor-pointer">
                        Add Interior Waterproofing (+$150/ft)
                      </label>
                      <p className="text-sm text-gray-600 mt-1">
                        Includes drainage system, vapor barrier, and sump pump integration to keep your basement dry.
                      </p>
                      {includeInteriorWaterproofing && (
                        <div className="mt-3 p-3 bg-white border border-blue-300 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Interior Waterproofing Cost:</strong> {linearFeet} ft × $150/ft = 
                            <span className="font-bold ml-2 text-orange-600">
                              +${interiorWaterproofingCost.toLocaleString()}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Your Estimate</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>EverBrace System ({linearFeet} ft × ${costPerFoot}/ft)</span>
                      <span className="font-semibold">${everBraceCost.toLocaleString()}</span>
                    </div>
                    
                    {includeInteriorWaterproofing && (
                      <div className="flex justify-between text-gray-700">
                        <span>Interior Waterproofing ({linearFeet} ft × $150/ft)</span>
                        <span className="font-semibold">${interiorWaterproofingCost.toLocaleString()}</span>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">No Excavation Required</h4>
                          <p className="text-sm text-gray-700">EverBrace is installed from inside your basement, saving time, money, and your landscaping.</p>
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
                          <h4 className="font-bold text-gray-900 mb-1">Faster Installation</h4>
                          <p className="text-sm text-gray-700">Most EverBrace installations completed in 2-3 days compared to weeks for traditional methods.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Permanent Structural Repair</h4>
                          <p className="text-sm text-gray-700">Steel I-beam system permanently stabilizes bowing, cracked, or failing foundation walls.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Lifetime Transferable Warranty</h4>
                          <p className="text-sm text-gray-700">Industry-leading warranty protects your investment and adds value when selling your home.</p>
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
                <form onSubmit={handleSubmit} className="border-t-2 border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Submit for Formal Quote</h3>
                  <p className="text-sm text-gray-600 text-center mb-6">
                    Enter your contact information below and we'll provide a detailed formal quote within 24 hours.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Thunder Bay"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800 text-center">
                      <strong>Your Estimate:</strong> ${grandTotal.toLocaleString()} ({linearFeet} ft{includeInteriorWaterproofing ? ' + Interior Waterproofing' : ''})
                    </p>
                    <p className="text-xs text-blue-600 text-center mt-1">
                      This estimate will be automatically included in your quote request.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 font-bold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit for Formal Quote'}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to be contacted by Groundhogs Ltd regarding your quote request.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EverBraceCalculator;
