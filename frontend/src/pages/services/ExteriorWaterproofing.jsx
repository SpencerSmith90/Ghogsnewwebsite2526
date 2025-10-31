import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const ExteriorWaterproofing = () => {
  const benefits = [
    "Stops water before it reaches your foundation walls",
    "Protects against frost heave and hydrostatic pressure",
    "Engineered membranes rated for -40°C and beyond Northern conditions",
    "Prevents basement flooding and moisture damage",
    "Increases property value and structural integrity",
    "Long-term solution backed by engineering"
  ];

  const process = [
    {
      step: "1",
      title: "Site Assessment & Excavation",
      description: "Our crews carefully excavate around your foundation to expose the full exterior wall surface."
    },
    {
      step: "2",
      title: "Surface Preparation",
      description: "We clean and prepare the foundation wall, repairing any cracks or structural damage."
    },
    {
      step: "3",
      title: "Membrane Installation",
      description: "Apply engineered waterproof membranes and drainage boards designed for extreme Northern climates."
    },
    {
      step: "4",
      title: "Enhanced Insulation & Protection Layer",
      description: "Install rigid insulation seamlessly around your foundation, providing superior thermal insulation for energy efficiency. All joints are professionally sealed, creating a second waterproofing barrier while protecting your foundation from backfill pressure, rocks, and freeze-thaw damage. This advanced dual-layer system exceeds standard building code requirements."
    },
    {
      step: "5",
      title: "Drainage System",
      description: "Install perimeter drainage tile connected to proper discharge points or sump systems."
    },
    {
      step: "6",
      title: "Backfill & Restoration",
      description: "Carefully backfill with properly graded material and restore landscaping to original or better condition."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Shuniah", "Oliver-Paipoonge", "Kakabeka Falls", "Nipigon", "Red Rock",
    "Sudbury", "Valley East", "Lively", "Greater Sudbury", "Chelmsford",
    "Winnipeg", "St. Andrews", "Headingley", "Oak Bluff", "Selkirk", "Steinbach", "Stonewall"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Exterior Waterproofing Ontario & Manitoba | Groundhogs Foundation Repair"
        description="Expert exterior waterproofing services in Thunder Bay, Sudbury, and Winnipeg. Engineered systems that protect your foundation from water damage, frost, and hydrostatic pressure."
        keywords="exterior waterproofing Ontario, basement waterproofing Thunder Bay, foundation waterproofing Manitoba, exterior foundation waterproofing Sudbury, waterproofing contractors Winnipeg"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Exterior Waterproofing",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area
          })),
          "description": "Professional exterior waterproofing services using engineered membranes and drainage systems for Northern Ontario and Manitoba foundations."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Exterior Waterproofing — Our Flagship Service
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Stop Water Before It Reaches Your Home
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Our flagship exterior waterproofing service is the foundation of our reputation across Ontario and Manitoba.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We protect your foundation from leaks, frost, and hydrostatic pressure using engineered membranes, drainage boards, and sealing processes designed specifically for Northern Ontario and Manitoba's extreme weather conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Exterior Waterproofing?
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Our Proven 5-Step Process
            </h2>
            <div className="space-y-6">
              {process.map((item, index) => (
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

      {/* Why Choose Groundhogs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Choose Groundhogs for Exterior Waterproofing?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Northern Climate Expertise:</strong> Our systems are specifically engineered for Ontario and Manitoba's freeze-thaw cycles, high groundwater tables, and extreme temperature swings.
              </p>
              <p className="mb-4">
                <strong>Premium Materials:</strong> We use only the highest-grade waterproofing membranes that remain flexible to -40°C and beyond and resist punctures, tears, and UV degradation.
              </p>
              <p className="mb-4">
                <strong>Proper Drainage:</strong> Every waterproofing system includes comprehensive perimeter drainage to manage both surface water and hydrostatic pressure.
              </p>
              <p>
                <strong>Lifetime Protection:</strong> When done right, exterior waterproofing is a permanent solution. We don't cut corners — we build systems that last.
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
              <Link to="/services/interior-waterproofing" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Interior Waterproofing</span>
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
            Protect Your Foundation Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation assessment from our exterior waterproofing experts
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

export default ExteriorWaterproofing;
