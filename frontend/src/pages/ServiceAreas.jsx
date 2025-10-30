import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Winnipeg, MB",
      description: "Serving all of Winnipeg and surrounding areas with expert foundation repair and waterproofing services."
    },
    {
      name: "Thunder Bay, ON",
      description: "Providing reliable foundation solutions throughout Thunder Bay and Northern Ontario communities."
    },
    {
      name: "Sudbury, ON",
      description: "Trusted foundation repair experts serving Sudbury and the Greater Sudbury Area."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Service Areas - Groundhogs Foundation Repair"
        description="Groundhogs serves Ontario and Manitoba including Winnipeg, Thunder Bay, and Sudbury with professional foundation repair and waterproofing services."
        keywords="foundation repair Winnipeg, foundation repair Thunder Bay, foundation repair Sudbury, Manitoba foundation repair, Ontario foundation repair"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Service Areas
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We proudly serve specific areas throughout Ontario and Manitoba including Winnipeg, Thunder Bay, and Sudbury.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Winnipeg,MB|Thunder+Bay,ON|Sudbury,ON&center=48.5,-91&zoom=5"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Groundhogs Service Areas - Winnipeg, Thunder Bay, and Sudbury"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Areas We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Comprehensive Coverage Across Ontario & Manitoba
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Groundhogs specializes in foundation repair, waterproofing, and structural solutions across key regions in Ontario and Manitoba. Our experienced teams are strategically positioned to serve you efficiently and effectively.
              </p>
              <p className="text-lg mb-6">
                Whether you're dealing with foundation cracks, water intrusion, settlement issues, or need preventative maintenance, our certified technicians bring decades of combined experience to every project.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Groundhogs?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Local expertise with deep understanding of regional soil conditions and climate challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Fast response times within our service areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Licensed, insured, and code-compliant workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Comprehensive warranties on all foundation work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Advanced pier systems and engineered waterproofing solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation foundation assessment in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Link to="/contact">
                Get Free Estimate
              </Link>
            </Button>
            <a href="tel:1-888-907-3777" className="text-white text-lg font-semibold hover:text-gray-200 flex items-center">
              <Phone className="mr-2" size={20} />
              1-888-907-3777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
