import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEO from '../components/SEO';

const WaterproofingCalculator = () => {
  const [linearFeet, setLinearFeet] = useState(150);
  const [includeSump, setIncludeSump] = useState(false);
  
  // Automatic tiered pricing based on linear feet
  const getCostPerFoot = (feet) => {
    if (feet > 130) return 250;
    if (feet >= 50) return 350;
    return 400;
  };
  
  const costPerFoot = getCostPerFoot(linearFeet);
  const baseCalc = linearFeet * costPerFoot;
  const sumpCost = includeSump ? 4000 : 0;
  const grandTotal = baseCalc + sumpCost;

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
    "name": "Exterior Waterproofing Cost Calculator",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "200-500",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "200-500",
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
        title="Instant Exterior Waterproofing Estimate Calculator | Groundhogs"
        description="Calculate your exterior waterproofing cost instantly. Get accurate estimates based on foundation perimeter and optional sump pump installation."
        keywords="exterior waterproofing cost calculator, waterproofing estimate, foundation waterproofing price, basement waterproofing cost"
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
                  Instant Exterior Waterproofing Estimate
                </CardTitle>
                <p className="text-gray-300">Get your personalized cost estimate in seconds</p>
              </CardHeader>

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
                        {linearFeet > 130 && '(Volume discount applied)'}
                        {linearFeet >= 50 && linearFeet <= 130 && '(Standard rate)'}
                        {linearFeet < 50 && '(Small project rate)'}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Sump Pump Checkbox */}
                <div className="mb-8">
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

                {/* Results */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Your Estimate</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Foundation Waterproofing ({linearFeet} ft × ${costPerFoot}/ft)</span>
                      <span className="font-semibold">${baseCalc.toLocaleString()}</span>
                    </div>
                    
                    {includeSump && (
                      <div className="flex justify-between text-gray-700">
                        <span>Sump Pump & Pit</span>
                        <span className="font-semibold">$4,000</span>
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

                {/* CTA Button */}
                <Button asChild size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                  <Link to={`/contact?calc=${grandTotal}`}>
                    Get Binding Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterproofingCalculator;
