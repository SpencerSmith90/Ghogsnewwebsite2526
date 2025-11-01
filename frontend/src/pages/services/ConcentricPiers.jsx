import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const ConcentricPiers = () => {
  const benefits = [
    "Direct load transfer from beams to bedrock or load-bearing strata",
    "Ideal for weak soil conditions where traditional concrete footings fail",
    "No bending forces — concentric loading provides superior stability",
    "Perfect for confined spaces like crawl spaces and tunnels",
    "Works with SmartJack® systems for complete crawl space support",
    "Specialized hydraulic equipment for tight access areas",
    "Eliminates the need for costly excavation in many applications",
    "Engineered deep foundation solution for permanent results"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assessment & Load Analysis",
      description: "Our expert technicians evaluate your foundation beams, crawl space structure, and soil conditions to determine pier placement and depth requirements."
    },
    {
      step: "2",
      title: "Hydraulic Pier Installation",
      description: "Using specialized hydraulic equipment designed for confined spaces, we drive galvanized steel pier sections directly below the foundation wall or beam until reaching bedrock or competent load-bearing strata. Concentric piers are ideal for both crawl spaces and full basements, providing versatile solutions for any foundation configuration."
    },
    {
      step: "3",
      title: "SmartJack® Adapter Connection",
      description: "A custom adapter plate connects the concentric pier to our adjustable SmartJack® crawl space support posts, creating a direct load path from your home's beams to the stable ground below. This system excels at point load distribution in both full basements and crawl spaces, ensuring optimal structural support where it's needed most."
    },
    {
      step: "4",
      title: "Load Transfer & Stabilization",
      description: "The system transfers the structural load directly down through the pier to bedrock, bypassing weak or settling soil and permanently stabilizing your foundation."
    }
  ];

  const whenToUse = [
    {
      title: "Weak or Unstable Soil Conditions",
      description: "When traditional concrete footings can't provide adequate support due to clay, fill soil, or other unstable subsurface conditions."
    },
    {
      title: "Crawl Space Foundation Support",
      description: "Provides deep foundation support directly beneath crawl space beams where conventional push piers can't be installed due to access restrictions."
    },
    {
      title: "Confined Space Applications",
      description: "Perfect for tunnels, low-clearance crawl spaces, and areas where traditional excavation equipment can't operate."
    },
    {
      title: "Supplemental Beam Support",
      description: "Works in tandem with SmartJack® systems to provide permanent, engineered support for sagging or undersized floor beams."
    },
    {
      title: "Point Load Stabilization",
      description: "Ideal for transferring concentrated loads from posts, columns, or grade beams directly to stable strata without eccentric loading."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Sudbury", "Winnipeg", "and surrounding areas throughout Ontario and Manitoba"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Concentric Pier Systems Ontario Manitoba | Deep Foundation Piles & Underpinning"
        description="Concentric pier foundation systems for crawl spaces and weak soil. Direct load transfer from beams to bedrock with SmartJack integration. Expert installation in Thunder Bay, Sudbury, Winnipeg."
        keywords="concentric piers Ontario, foundation piles Manitoba, crawl space underpinning, deep foundation systems Thunder Bay, concentric pier installation Sudbury, foundation pier systems Winnipeg, weak soil foundation repair, push pier piles"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concentric Pier Foundation Systems",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area
          })),
          "description": "Concentric pier systems providing deep foundation support by transferring loads directly from beams to bedrock or load-bearing strata, ideal for crawl spaces and weak soil conditions."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Concentric Pier Systems: Deep Foundation Support for Crawl Spaces & Weak Soil
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Direct Load Transfer from Beams to Bedrock
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Concentric piers are engineered foundation piling systems that provide permanent support where traditional concrete footings fail.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              By driving steel piers directly to bedrock or competent strata beneath your foundation beams, we create a stable load path that bypasses weak soil — ideal for crawl spaces, confined areas, and challenging soil conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Concentric Pier Systems?
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
              How Concentric Pier Installation Works
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

      {/* When to Use */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              When Are Concentric Piers the Right Solution?
            </h2>
            <div className="space-y-6">
              {whenToUse.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concentric vs Traditional Push Piers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Concentric Piers vs. Traditional Push Piers
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-4 leading-relaxed">
                Unlike traditional <strong>"side-load" push pier systems</strong> that attach to the exterior of foundations, <strong>concentric piers are installed directly below foundation walls or beams</strong>. This eliminates the eccentric loading and bending forces that side-load systems experience.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Concentric piers</strong> are especially valuable in <strong>crawl spaces</strong>, <strong>confined areas</strong>, or when obstructions prevent traditional exterior pier installation. They're also ideal when you need to provide <strong>deep foundation support beneath existing beams</strong> without major excavation.
              </p>
              <p className="text-lg leading-relaxed">
                When paired with <strong>SmartJack® adjustable support posts</strong>, concentric piers create a complete structural system: the pier provides the deep foundation anchored to bedrock, while the SmartJack transfers and distributes the load from your floor beams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Concentric Pier Installation in Ontario & Manitoba
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-800">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700">
              Groundhogs is one of the few foundation repair contractors in Northern Ontario and Manitoba equipped with specialized hydraulic systems for concentric pier installation in confined spaces.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Deep Foundation Support for Weak Soil or Crawl Spaces?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our foundation specialists for a free assessment and engineered concentric pier solution
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

export default ConcentricPiers;
