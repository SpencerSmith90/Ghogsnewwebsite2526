import React from 'react';
import { Shield, CheckCircle, Phone, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';

const Warranty = () => {
  const warrantyFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Comprehensive Coverage",
      description: "Our warranty covers materials, workmanship, and system performance for the full warranty period."
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "Written & Transferable",
      description: "Every warranty is provided in writing and can be transferred to future homeowners, protecting your investment."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      title: "Backed by Engineering",
      description: "Our solutions are engineered for long-term performance, not quick fixes that fail in years."
    }
  ];

  const guarantees = [
    "Lifetime warranty on push pier systems",
    "25-year warranty on exterior waterproofing membranes",
    "Manufacturer warranties on all materials",
    "Workmanship guarantee on all installations",
    "Code-compliant installations with permits",
    "Free annual inspections for warranty holders"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Warranty & Guarantee | Groundhogs Foundation Repair"
        description="Groundhogs stands behind every foundation repair and waterproofing project with comprehensive warranties. Lifetime warranties on pier systems, 25-year waterproofing coverage."
        keywords="foundation repair warranty Ontario, waterproofing guarantee Manitoba, lifetime foundation warranty, foundation repair guarantee Thunder Bay"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Warranty & Guarantee
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              We Stand Behind Every Project with Comprehensive Protection
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              At Groundhogs, we don't just promise results — we guarantee them in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              What Our Warranty Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {warrantyFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Our Guarantee to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{guarantee}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Our Warranty Matters
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Peace of Mind:</strong> Foundation and waterproofing work is a significant investment. Our comprehensive warranty ensures you're protected long after we've completed the job.
              </p>
              <p className="mb-4">
                <strong>Property Value Protection:</strong> A transferable warranty adds value to your home and provides reassurance to future buyers.
              </p>
              <p className="mb-4">
                <strong>Quality Assurance:</strong> We only offer warranties we're confident we can honor. Our track record speaks for itself — we build systems to last.
              </p>
              <p>
                <strong>No Hidden Fine Print:</strong> Our warranties are straightforward, written in plain language, and backed by a company committed to doing things right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free Estimate with Warranty Details
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every quote includes full warranty information in writing
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

export default Warranty;