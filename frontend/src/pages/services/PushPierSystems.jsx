import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const PushPierSystems = () => {
  const benefits = [
    "Permanent stabilization of settling foundations",
    "Hydraulically driven to load-bearing strata",
    "Can be installed from interior or exterior",
    "Minimal excavation required",
    "Reverses foundation settlement through controlled lifting",
    "Engineered load transfer to stable soil or bedrock"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Strategic Placement",
      description: "Piers are positioned at critical load-bearing points along the foundation based on engineering analysis."
    },
    {
      step: "2",
      title: "Hydraulic Installation",
      description: "Steel pier sections are hydraulically driven deep into the ground until they reach stable soil or bedrock."
    },
    {
      step: "3",
      title: "Load Transfer",
      description: "Foundation brackets connect the pier system to your foundation, transferring the structural load to stable ground."
    },
    {
      step: "4",
      title: "Controlled Lifting (if needed)",
      description: "In many cases, we can lift the foundation back toward its original position, closing cracks and restoring level floors."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Oliver-Paipoonge", "Nipigon",
    "Sudbury", "Lively",
    "Winnipeg", "St. Andrews", "Lockport", "Headingley"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Push Pier Systems & Basement Underpinning Ontario & Manitoba"
        description="Expert push pier installation and basement underpinning in Thunder Bay, Sudbury, and Winnipeg. Permanently stabilize and lift settling foundations with engineered underpinning systems."
        keywords="basement underpinning Ontario, underpinning Manitoba, push pier installation, foundation underpinning Thunder Bay, underpinning contractors Sudbury, basement underpinning Winnipeg, push pier underpinning systems"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Push Pier Systems",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area
          })),
          "description": "Engineered push pier systems for permanent foundation stabilization and lifting of settling foundations."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Push Pier Systems & Basement Underpinning for Sinking Foundations
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Permanent Stabilization. Controlled Lifting. Engineered Underpinning.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Our engineered push pier underpinning systems permanently stabilize and lift settling foundations.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Each pier is hydraulically driven deep into load-bearing strata, transferring the weight of your home to stable ground. Groundhogs' underpinning systems work from both inside and outside, minimizing excavation while maximizing structural gain.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Feature Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://customer-assets.emergentagent.com/job_groundhogs-seo/artifacts/rb9oihh2_Groundhogs-8.jpeg"
                alt="Push pier system installation with hydraulic equipment"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Push Pier Underpinning Systems Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              How Push Pier Underpinning Works
            </h2>
            <div className="space-y-6">
              {howItWorks.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6 items-start">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Push Piers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              When Do You Need Push Pier Systems?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Foundation Settlement</h3>
                <p className="text-gray-700">Your foundation is sinking into unstable soil, causing cracks and structural damage.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Uneven Floors</h3>
                <p className="text-gray-700">Floors are sloping or uneven due to foundation movement and settling.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Cracked Walls</h3>
                <p className="text-gray-700">Interior and exterior walls show diagonal or stair-step cracks from foundation movement.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Door & Window Issues</h3>
                <p className="text-gray-700">Doors and windows stick or won't close properly due to foundation settling.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              <MapPin className="inline-block mr-2 mb-1" size={32} />
              Serving Ontario & Manitoba
            </h2>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>Service Areas:</strong>
              </p>
              <p className="text-gray-600">
                {serviceAreas.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Related Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/services/foundation-repair-replacement" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Foundation Repair & Replacement</span>
                <ArrowRight className="text-orange-600" />
              </Link>
              <Link to="/services/steel-post-beam-systems" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Steel Post & Beam Systems</span>
                <ArrowRight className="text-orange-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stabilize Your Foundation Permanently
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free assessment and engineered solution for your settling foundation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              <Link to="/contact" className="inline-flex items-center justify-center">
                Get Free Estimate
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-6 h-auto">
              <a href="tel:1-888-907-3777" className="inline-flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                1-888-907-3777
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PushPierSystems;