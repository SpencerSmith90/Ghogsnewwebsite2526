import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const EverBrace = () => {
  const benefits = [
    "Permanent stabilization without full foundation replacement",
    "No exterior excavation required — ideal for properties with landscaping, driveways, or decks",
    "Restores structural integrity to failing stone, block, and poured concrete walls",
    "Steel I-beam panels transfer loads and prevent further movement",
    "Cost-effective alternative to complete foundation replacement",
    "Minimal disruption to your home and property",
    "Engineered solution backed by structural analysis"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assessment & Engineering Analysis",
      description: "Our experts evaluate wall condition, degree of failure, and load-bearing requirements to design the optimal EverBrace configuration."
    },
    {
      step: "2",
      title: "Steel I-Beam Panel Installation",
      description: "Rigid, galvanized steel I-beam panels are custom-fitted and installed against the interior of the compromised foundation wall."
    },
    {
      step: "3",
      title: "Structural Connection & Load Transfer",
      description: "The EverBrace panels are anchored to the floor slab and secured to the rim joist above, creating a continuous load-bearing wall that bypasses the failing foundation."
    },
    {
      step: "4",
      title: "Wall Stabilization & Reinforcement",
      description: "The system permanently stabilizes the wall, preventing further movement, bowing, or collapse while restoring structural integrity."
    }
  ];

  const whenToUse = [
    {
      title: "Severely Deteriorating Stone Foundations",
      description: "Old stone and mortar foundations that are crumbling, shifting, or losing structural capacity — especially common in century homes."
    },
    {
      title: "Limited or No Exterior Access",
      description: "Properties where excavation isn't feasible due to driveways, attached garages, landscaping, or neighboring structures."
    },
    {
      title: "Block or Concrete Walls with Extreme Bowing",
      description: "Walls that have bowed beyond the point where traditional bracing systems can provide adequate support."
    },
    {
      title: "Dugout & Basement Lowering Projects",
      description: "Creating additional basement depth by supporting the perimeter foundation walls during excavation and providing permanent structural reinforcement."
    },
    {
      title: "Alternative to Full Foundation Replacement",
      description: "When foundation replacement is cost-prohibitive, logistically challenging, or structurally unnecessary — EverBrace provides a permanent engineered solution at a fraction of the cost."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Sudbury", "Winnipeg", "and surrounding areas throughout Ontario and Manitoba"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="EverBrace Foundation Wall System Ontario & Manitoba | Stone Foundation Repair"
        description="EverBrace steel I-beam wall restoration system for failing stone, block, and concrete foundations. Permanent alternative to foundation replacement. Ideal for dugouts and limited access properties."
        keywords="EverBrace system Ontario, stone foundation repair Manitoba, foundation wall restoration, basement underpinning Thunder Bay, dugout foundation support, failing foundation alternative, EverBrace installation Sudbury, foundation replacement alternative Winnipeg"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "EverBrace Foundation Wall Restoration System",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area
          })),
          "description": "EverBrace steel I-beam wall restoration system providing permanent stabilization for failing foundation walls without requiring full replacement or exterior excavation."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              EverBrace™ Wall Restoration System: Permanent Stabilization Without Replacement
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              The Ultimate Solution for Failing Foundation Walls
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              When your foundation walls are severely compromised, bowing, or deteriorating — but full replacement isn't practical — the EverBrace™ system provides a permanent, engineered alternative.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Using rigid steel I-beam panels, EverBrace restores structural integrity to failing stone, block, and concrete walls without exterior excavation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Choose EverBrace™ Wall Restoration?
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
              How EverBrace™ Works
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

      {/* When to Use EverBrace */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              When is EverBrace™ the Right Solution?
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

      {/* What is Basement Underpinning & Dugout Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              EverBrace™ for Basement Underpinning & Dugout Projects
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-4 leading-relaxed">
                <strong>Basement underpinning</strong> involves excavating additional depth below an existing foundation to create more usable basement space — often called a <strong>"dugout"</strong> or <strong>"basement lowering"</strong>.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                During a dugout project, the existing foundation walls must be supported and reinforced to handle new loads and prevent failure. The <strong>EverBrace™ system</strong> is ideal for this application because:
              </p>
              <ul className="space-y-2 mb-6 text-lg">
                <li>✓ It provides continuous perimeter wall support during excavation</li>
                <li>✓ Steel I-beam panels distribute loads and prevent wall collapse</li>
                <li>✓ No exterior excavation required — work is done entirely from the interior</li>
                <li>✓ Permanent structural solution that remains in place after completion</li>
                <li>✓ Ideal for older homes with stone or block foundations prone to settling</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Whether you're creating additional living space, increasing ceiling height, or underpinning for structural reasons, <strong>EverBrace™</strong> ensures your foundation walls remain stable and secure throughout the process and for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not Full Replacement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Choose EverBrace™ Over Full Foundation Replacement?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Full foundation replacement</strong> often involves excavating around the entire home, temporarily supporting the structure, removing the old foundation, and building a new one. This process can cost <strong>$50,000–$150,000+</strong> and disrupt your life for weeks or months.
              </p>
              <p>
                <strong>EverBrace™</strong> offers a permanent, engineered alternative at a <strong>fraction of the cost</strong>, with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No exterior excavation — protecting landscaping, driveways, and neighboring structures</li>
                <li>Faster installation — typically completed in days, not weeks</li>
                <li>Permanent structural reinforcement that meets or exceeds building codes</li>
                <li>Ideal when access constraints make replacement impractical</li>
              </ul>
              <p>
                If your foundation walls are failing but the footings remain sound, <strong>EverBrace™ can save you tens of thousands of dollars</strong> while delivering the same structural stability as a full replacement.
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
              EverBrace™ Installation in Ontario & Manitoba
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-800">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700">
              Groundhogs is a certified EverBrace™ installer serving homeowners across Northern Ontario and Manitoba with permanent foundation wall restoration solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is EverBrace™ Right for Your Foundation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our foundation specialists for a free assessment and engineered solution for your failing foundation walls
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

export default EverBrace;
