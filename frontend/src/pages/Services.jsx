import React from 'react';
import { services } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Foundation Repair Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Comprehensive foundation solutions backed by expert service and proven methods
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Professional assessment and diagnosis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Engineered solutions for lasting results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Expert installation with minimal disruption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Warranty-backed workmanship</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-orange-600 hover:bg-orange-700">
                    <Link to="/contact">Get a Free Estimate</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Wall Stabilization',
              'Crawl Space Repair',
              'Sump Pump Installation',
              'Foundation Leveling',
              'Crack Repair',
              'Drainage Solutions'
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" size={20} />
                    {service}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Professional {service.toLowerCase()} services with guaranteed results.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix Your Foundation?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free, no-obligation estimate
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link to="/contact">Schedule Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;