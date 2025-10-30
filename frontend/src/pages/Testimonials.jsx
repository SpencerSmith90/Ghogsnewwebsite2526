import React from 'react';
import { Star, Quote, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

const Testimonials = () => {
  const { data: testimonials, loading } = useApi('/testimonials');

  return (
    <div className="min-h-screen">
      <SEO
        title="Customer Testimonials | Groundhogs Foundation Repair Reviews"
        description="Read real reviews from Ontario and Manitoba homeowners. See why Groundhogs is trusted for foundation repair, waterproofing, and structural solutions."
        keywords="foundation repair reviews Ontario, Groundhogs testimonials, basement waterproofing reviews Manitoba, foundation contractor reviews Thunder Bay"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Real homeowners. Real results. Real reviews from across Ontario and Manitoba.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading testimonials...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials && testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-600 text-orange-600" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-orange-600 mb-3" />
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Why Homeowners Trust Groundhogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">2000+</div>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">5-Star</div>
                <p className="text-gray-700">Customer Ratings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-gray-700">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Thousands of Satisfied Homeowners
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Groundhogs difference for yourself
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

export default Testimonials;