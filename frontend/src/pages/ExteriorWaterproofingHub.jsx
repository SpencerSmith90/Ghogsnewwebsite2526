import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Zap, Shield, Clock, Phone, ArrowRight, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const ExteriorWaterproofingHub = () => {
  const [activeTab, setActiveTab] = useState('thunder-bay');

  const cities = {
    'thunder-bay': {
      name: 'Thunder Bay',
      slug: '/exterior-waterproofing-thunder-bay',
      description: 'Headquarters: 415 Fort William Road',
      challenges: ['Heavy clay soils', 'Lake Superior humidity', '300+ cm annual snowfall', '-40°C winter extremes'],
      stats: '500+ Thunder Bay projects completed'
    },
    'winnipeg': {
      name: 'Winnipeg',
      slug: '/exterior-waterproofing-winnipeg',
      description: 'Serving all of Manitoba',
      challenges: ['Expansive Winnipeg Clay', 'Spring flooding pressure', 'Red & Assiniboine Rivers', '-40°C to +35°C extremes'],
      stats: 'Expanding Manitoba coverage'
    },
    'sudbury': {
      name: 'Sudbury',
      slug: '/exterior-waterproofing-sudbury',
      description: 'Greater Sudbury & Northern Ontario',
      challenges: ['Rocky mining terrain', 'Exposed bedrock', 'Thin soil layers', '-50°C Northern winters'],
      stats: 'Sudbury\'s most trusted'
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exterior Waterproofing",
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
    },
    "areaServed": [
      {"@type": "City", "name": "Thunder Bay"},
      {"@type": "City", "name": "Winnipeg"},
      {"@type": "City", "name": "Sudbury"}
    ],
    "offers": {
      "@type": "Offer",
      "priceRange": "$20000-$60000",
      "description": "3x faster exterior waterproofing with rigid insulation and robust transferable warranty"
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Exterior Waterproofing – 3x Faster Across Ontario & Manitoba | Groundhogs"
        description="Professional exterior waterproofing in Thunder Bay, Winnipeg & Sudbury. 3x faster installation (1-2 days). 5 full-time crews. Rigid insulation included. Robust transferable warranty. Virtual estimates in hours."
        keywords="exterior waterproofing Ontario, exterior waterproofing Manitoba, basement waterproofing Thunder Bay Winnipeg Sudbury, fast waterproofing installation, rigid insulation waterproofing"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚡ #1 Exterior Waterproofing Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exterior Waterproofing – 3x Faster Across Ontario & Manitoba
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Complete exterior waterproofing with rigid insulation, installed 3x faster than traditional methods. Serving Thunder Bay, Winnipeg, and Sudbury with 5 full-time crews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
                <a href="tel:1-888-907-3777">
                  <Phone className="mr-2" /> Call 1-888-907-3777
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-slate-900 text-lg px-8 py-6">
                <Link to="/contact">
                  Upload Photos → Get Quote in Hours <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Zap className="text-orange-600 w-5 h-5" />
              <span>3x Faster (1-2 Days)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-600 w-5 h-5" />
              <span>5 Full-Time Crews</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-orange-600 w-5 h-5" />
              <span>Rigid Insulation Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-orange-600 w-5 h-5" />
              <span>Fast Virtual Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              500+ Waterproofing Jobs Completed with 3x Speed System
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've perfected exterior waterproofing through systemized processes, specialized crews, and proprietary methods developed over 25+ years.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-2">1-2</div>
                <div className="text-gray-700 font-semibold">Days to Complete</div>
                <div className="text-sm text-gray-500 mt-1">(Industry: 4-6 days)</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-2">$20K-$60K</div>
                <div className="text-gray-700 font-semibold">Typical Range</div>
                <div className="text-sm text-gray-500 mt-1">Full house perimeter</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Include Rigid Insulation</div>
                <div className="text-sm text-gray-500 mt-1">Frost & energy protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Choose Your City for Local Details
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('thunder-bay')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'thunder-bay'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MapPin className="inline-block w-5 h-5 mr-2" />
                Thunder Bay
              </button>
              <button
                onClick={() => setActiveTab('winnipeg')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'winnipeg'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MapPin className="inline-block w-5 h-5 mr-2" />
                Winnipeg
              </button>
              <button
                onClick={() => setActiveTab('sudbury')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'sudbury'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MapPin className="inline-block w-5 h-5 mr-2" />
                Sudbury
              </button>
            </div>

            {/* Tab Content */}
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-orange-600">
                  {cities[activeTab].name} Exterior Waterproofing
                </CardTitle>
                <p className="text-gray-600 text-lg">{cities[activeTab].description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Local Climate Challenges:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {cities[activeTab].challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg mb-6">
                  <p className="text-gray-800 font-semibold">{cities[activeTab].stats}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 flex-1">
                    <Link to={cities[activeTab].slug}>
                      View {cities[activeTab].name} Details <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link to="/contact">
                      Get Virtual Estimate <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              What's Included in Every Installation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={24} />
                    Full Excavation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete perimeter excavation to footer level, regardless of soil type (clay, rock, or mixed).</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={24} />
                    Rigid Insulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Frost-rated rigid foam insulation for thermal protection and energy savings. Essential for extreme climates.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={24} />
                    Delta-MS Membrane
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">High-density polyethylene drainage membrane with dimpled surface for superior water management.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={24} />
                    Weeping Tile System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">New perforated drainage pipe at footer level with proper pitch to channel water away efficiently.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={24} />
                    Clean Backfill
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Clean stone backfill around drainage and engineered soil for proper compaction and drainage.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={24} />
                    Robust Warranty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our robust transferable warranty protects your investment and adds value to your property.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Estimate CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upload Photos → Get Quote in Hours
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our virtual estimate process is fast, accurate, and convenient. No need to wait days for an in-person visit. Get transparent pricing based on your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8 py-6">
              <Link to="/contact">
                Start Virtual Estimate <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6">
              <a href="tel:1-888-907-3777">
                <Phone className="mr-2" /> Or Call 1-888-907-3777
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExteriorWaterproofingHub;
