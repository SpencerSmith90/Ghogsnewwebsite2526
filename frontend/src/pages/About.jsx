import React from 'react';
import { CheckCircle, Award, Users, Target, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { differentiators } from '../mock';
import * as LucideIcons from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Groundhogs
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Foundation repair experts serving Ontario and Manitoba with proven solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Problems with foundations are more than just an annoyance for Northern Ontario residents and builders. 
                They are an uphill struggle against expanding clay, immovable Precambrian rock, and the moat-like 
                conditions caused by snow melt. Groundhogs foundation contractors were established, manned, and equipped 
                locally to help you.
              </p>
              <p className="text-gray-600 mb-6">
                We're proud to be partnered with Foundation Supportworks out of Omaha, Nebraska. Through this partnership, 
                we are the authorized dealer which allows us to provide industry-leading foundation repair services across Canada.
              </p>
              <p className="text-gray-600">
                Our team combines local expertise with cutting-edge technology and proven methods to deliver permanent 
                foundation solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why Groundhogs is the trusted choice for foundation repair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <div key={item.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="text-orange-600" size={32} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Service Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly serving communities throughout Ontario and Manitoba
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Winnipeg</h3>
                <p className="text-gray-600">Manitoba</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Thunder Bay</h3>
                <p className="text-gray-600">Ontario</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Sudbury</h3>
                <p className="text-gray-600">Ontario</p>
              </div>
            </div>
            <p className="text-center mt-8 text-gray-600">
              And surrounding areas throughout Ontario and Manitoba
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Groundhogs Difference
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our services
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;