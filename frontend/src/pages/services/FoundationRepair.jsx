import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const FoundationRepair = () => {
  const benefits = [
    "Permanent, engineered solutions — not temporary fixes",
    "Stops foundation settling and wall movement",
    "Reverses structural damage through controlled lifting",
    "Prevents further cracking and water intrusion",
    "Protects property value and investment",
    "Backed by engineering analysis and code compliance"
  ];

  const services = [
    {
      title: "Foundation Wall Reconstruction",
      description: "Complete rebuild of damaged or failing foundation walls using modern materials and techniques."
    },
    {
      title: "Structural Crack Repair",
      description: "Professional repair of foundation cracks with epoxy injection or carbon fiber reinforcement systems."
    },
    {
      title: "Foundation Replacement",
      description: "Full foundation replacement when existing structure is beyond economical repair."
    },
    {
      title: "Controlled Foundation Lifting",
      description: "Hydraulic lifting systems to restore foundations to original position and grade."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Sudbury", "Winnipeg", "and surrounding regions throughout Ontario and Manitoba"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Foundation Repair & Replacement Ontario & Manitoba | Groundhogs"
        description="Expert foundation repair and replacement in Thunder Bay, Sudbury, and Winnipeg. Permanent engineered solutions for settling foundations, cracks, and structural damage."
        keywords="foundation repair Ontario, foundation replacement Manitoba, structural repair contractors, foundation crack repair Thunder Bay, foundation contractors Sudbury, foundation repair Winnipeg"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Foundation Repair & Replacement",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": [
            {"@type": "City", "name": "Thunder Bay"},
            {"@type": "City", "name": "Sudbury"},
            {"@type": "City", "name": "Winnipeg"}
          ],
          "description": "Professional foundation repair and replacement services delivering permanent, engineered solutions for structural integrity."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Foundation Repair & Replacement for Permanent Stability
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Fix the Problem, Not Just the Symptoms
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              When it comes to structural integrity, we deliver permanent, engineered solutions that fix the problem — not just cover it up.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our teams handle everything from foundation wall reconstruction and structural crack repair to full replacements. Many of our systems even have the ability to reverse foundation failure through controlled lifting and stabilization.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Choose Professional Foundation Repair?
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

      {/* Services We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Foundation Repair Services We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Groundhogs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              The Groundhogs Difference in Foundation Repair
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Engineering-First Approach:</strong> Every repair begins with proper assessment and engineering analysis to identify the root cause — not just symptoms.
              </p>
              <p className="mb-4">
                <strong>Permanent Solutions:</strong> We use proven systems and materials designed for long-term structural performance, not quick fixes that fail in years.
              </p>
              <p className="mb-4">
                <strong>Code Compliance:</strong> All foundation work meets or exceeds Ontario and Manitoba building codes with proper permits and inspections.
              </p>
              <p>
                <strong>Transparent Process:</strong> From assessment to completion, we document every step and keep you informed throughout the entire repair process.
              </p>
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
              <Link to="/services/push-pier-systems" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Push Pier Systems</span>
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
            Get Your Foundation Repaired Right
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for a comprehensive foundation assessment and engineered repair solution
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

export default FoundationRepair;