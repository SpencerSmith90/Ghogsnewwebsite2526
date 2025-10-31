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

      {/* Warranty Coverage Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Warranty Coverage by Product & System
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="text-lg mb-6 leading-relaxed">
                At Groundhogs, we understand that <strong>foundation repair warranties</strong> and <strong>waterproofing guarantees</strong> are as important as the work itself. Our warranty coverage varies by product, installation method, and project scope to provide the most comprehensive protection specific to your needs.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Steel Foundation Systems — 25-Year Manufacturer Warranty
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our <strong>steel foundation repair products</strong> including <strong>push pier systems</strong>, <strong>PowerBrace™ wall supports</strong>, <strong>SmartJack® crawl space posts</strong>, and <strong>steel I-beam systems</strong> are backed by a <strong>25-year manufacturer warranty</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These engineered steel products are designed and manufactured to withstand extreme loads and environmental conditions, providing long-term structural stability for foundations across Ontario and Manitoba.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Full Perimeter Waterproofing Systems — 5-Year Transferable Warranty
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our <strong>exterior waterproofing systems</strong> that include <strong>full perimeter excavation</strong>, <strong>membrane installation</strong>, <strong>drainage board application</strong>, and <strong>perimeter drain systems</strong> come with a <strong>5-year fully transferable warranty</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This warranty covers both materials and workmanship, protecting against water intrusion and ensuring your basement stays dry. The transferable nature of this warranty adds significant value if you sell your home, providing peace of mind to future homeowners.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Job-Specific Warranty Protection
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Because every foundation and waterproofing project is unique, <strong>warranty coverage varies based on the specific products installed</strong>, <strong>installation methods used</strong>, and <strong>site conditions</strong>. This ensures you receive warranty protection tailored to your exact project scope.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  During your free estimate, we provide a detailed breakdown of all warranty coverage applicable to your project, including manufacturer warranties, workmanship guarantees, and system performance expectations.
                </p>
              </Card>
            </div>

            <div className="mt-8 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <p className="text-gray-800 font-semibold mb-2">
                All Warranties Include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Written warranty documentation provided at project completion</li>
                <li>✓ Clear terms with no hidden fine print or exclusions</li>
                <li>✓ Backed by a company with decades of foundation repair experience</li>
                <li>✓ Support from our local Ontario and Manitoba service teams</li>
              </ul>
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