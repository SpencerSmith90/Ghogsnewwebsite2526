import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const InteriorWaterproofing = () => {
  const benefits = [
    "Cost-effective alternative when exterior excavation isn't possible",
    "Keeps basements dry without major landscaping disruption",
    "Advanced drainage channels and vapor barriers",
    "Professional sump pump systems with battery backup",
    "Ideal for finished basements or tight urban properties",
    "Year-round protection against moisture and humidity"
  ];

  const components = [
    {
      title: "Perimeter Drainage Channel",
      description: "Interior drainage track installed at the base of foundation walls to capture water before it enters the basement."
    },
    {
      title: "Sump Pump System",
      description: "Professional-grade sump pump with battery backup ensures continuous protection even during power outages."
    },
    {
      title: "Vapor Barriers",
      description: "Heavy-duty vapor barriers prevent moisture transmission through concrete walls and floors."
    },
    {
      title: "Dehumidification",
      description: "Optional whole-basement dehumidification systems maintain optimal humidity levels and air quality."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Sudbury", "Winnipeg", "North Bay", "St. Clements", "East St. Paul"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Interior Waterproofing Ontario & Manitoba | Basement Drainage Systems"
        description="Professional interior waterproofing in Thunder Bay, Sudbury, and Winnipeg. Keep your basement dry with drainage channels, sump pumps, and vapor barriers."
        keywords="interior waterproofing Ontario, basement drainage systems Manitoba, sump pump installation Thunder Bay, interior basement waterproofing Sudbury, drainage systems Winnipeg"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Interior Waterproofing",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area
          })),
          "description": "Professional interior waterproofing systems including drainage channels, sump pumps, and vapor barriers for dry, healthy basements."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Interior Waterproofing Systems for Dry, Healthy Basements
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Effective Protection from the Inside
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              When exterior excavation isn't an option, we bring waterproofing inside.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our interior drainage channels, vapor barriers, and sump systems keep basements dry and healthy year-round, providing cost-effective protection for homes where exterior work isn't feasible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Interior Waterproofing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Feature Images Gallery */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Professional Interior Waterproofing Installation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://customer-assets.emergentagent.com/job_foundation-fix/artifacts/lnz9qyot_IMG_9999.JPG"
                    alt="Interior waterproofing with Delta-MS membrane system installed on foundation walls"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://customer-assets.emergentagent.com/job_foundation-fix/artifacts/x542zgo1_IMG_9997.JPG"
                    alt="Professional interior drainage membrane and waterproofing barrier installation"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6 text-lg">
                Delta-MS membrane system with interior drainage providing complete basement protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Interior Waterproofing System Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {components.map((component, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{component.title}</h3>
                  <p className="text-gray-700">{component.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Interior */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              When Interior Waterproofing Is the Right Choice
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Finished Basements:</strong> Avoid disrupting completed interior spaces or expensive exterior landscaping.
              </p>
              <p className="mb-4">
                <strong>Urban Properties:</strong> Limited exterior access or shared walls make interior systems more practical.
              </p>
              <p className="mb-4">
                <strong>Budget Considerations:</strong> Interior waterproofing typically costs less than full exterior excavation and membrane installation.
              </p>
              <p className="mb-4">
                <strong>Seasonal Constraints:</strong> Can be installed year-round regardless of weather conditions.
              </p>
              <p>
                <strong>Complementary Protection:</strong> Often used in combination with exterior waterproofing for comprehensive moisture management.
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
              <Link to="/services/exterior-waterproofing" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Exterior Waterproofing</span>
                <ArrowRight className="text-orange-600" />
              </Link>
              <Link to="/services/foundation-repair-replacement" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Foundation Repair & Replacement</span>
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
            Keep Your Basement Dry Year-Round
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free assessment and customized interior waterproofing solution
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

export default InteriorWaterproofing;