import React from 'react';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Link } from 'react-router-dom';

const SteelPostBeam = () => {
  const benefits = [
    "Stops sagging, bouncing, or uneven floors",
    "Custom-engineered for your specific load requirements",
    "Steel construction provides superior strength vs. wood",
    "Adjustable system allows for future fine-tuning",
    "Minimal disruption to existing spaces",
    "Permanent solution with long-term stability"
  ];

  const problems = [
    {
      title: "Sagging Floors",
      description: "Floor joists have weakened or settled, causing visible sagging in main floor or upper levels."
    },
    {
      title: "Bouncy or Springy Floors",
      description: "Floors feel unstable or bounce when walking, indicating inadequate support structure."
    },
    {
      title: "Cracked Floor Tiles",
      description: "Floor movement has caused ceramic or stone tiles to crack or become loose."
    },
    {
      title: "Crawl Space Issues",
      description: "Wooden support posts in crawl space are rotting, settling, or inadequate for current loads."
    }
  ];

  const serviceAreas = [
    "Thunder Bay", "Sudbury", "Winnipeg", "and surrounding communities"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Steel Post & Beam Systems Ontario & Manitoba | Sagging Floor Repair"
        description="Professional steel post and beam installation in Thunder Bay, Sudbury, and Winnipeg. Fix sagging floors with custom-engineered structural support systems."
        keywords="sagging floor repair Ontario, steel beam foundation support, crawlspace reinforcement Manitoba, floor support systems Thunder Bay, steel posts Sudbury, structural beams Winnipeg"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Steel Post & Beam Systems",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Groundhogs"
          },
          "areaServed": [
            {"@type": "City", "name": "Thunder Bay"},
            {"@type": "City", "name": "Sudbury"},
            {"@type": "City", "name": "Winnipeg"}
          ],
          "description": "Custom-engineered steel post and beam systems for repairing sagging floors and strengthening crawl spaces."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Steel Post & Beam Systems for Sagging Floors
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Engineered Strength Beneath Your Home
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              We rebuild sagging or uneven floors with custom-engineered steel post and beam systems designed to carry real loads and restore strength beneath your home.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Every system is measured, fabricated, and installed for precision, ensuring long-term stability that wood alone can't deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Steel Post & Beam Systems?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Feature Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://customer-assets.emergentagent.com/job_groundhogs-seo/artifacts/lubny32g_smartjack-install_2024_HI-RES-355.jpg"
                alt="SmartJack steel post and beam system installation in basement crawl space"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Floor Problems We Solve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{problem.title}</h3>
                  <p className="text-gray-700">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              The Groundhogs Approach to Floor Support
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="mb-4">
                <strong>Engineering Assessment:</strong> We calculate actual load requirements based on your home's structure, not guesswork or generic solutions.
              </p>
              <p className="mb-4">
                <strong>Custom Fabrication:</strong> Steel beams and posts are cut and fabricated to exact specifications for your project.
              </p>
              <p className="mb-4">
                <strong>Precision Installation:</strong> Posts are installed on proper footings with adjustable heads, allowing for controlled lifting and future adjustments.
              </p>
              <p className="mb-4">
                <strong>SmartJack® Systems:</strong> Where appropriate, we install SmartJack® adjustable steel post systems — engineered specifically for crawl space support.
              </p>
              <p>
                <strong>Long-Term Performance:</strong> Steel doesn't rot, warp, or deteriorate like wood. Your floors stay level and solid for decades.
              </p>
            </div>

            {/* Second Feature Image */}
            <div className="rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto">
              <img
                src="https://customer-assets.emergentagent.com/job_groundhogs-seo/artifacts/1qsm4tfv_2020_01_31%20104%20Smartjack.jpg"
                alt="Completed SmartJack steel post installation supporting floor joists in crawl space"
                loading="lazy"
                className="w-full h-auto"
              />
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
              <Link to="/services/push-pier-systems" className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-600 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-900">Push Pier Systems</span>
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
            Fix Your Sagging Floors Permanently
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free structural assessment and custom steel support solution
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

export default SteelPostBeam;