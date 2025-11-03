import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Award, Shield, Users, Clock, Wrench, BadgeCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';

const WhyGroundhogs = () => {
  const comparisonPoints = [
    {
      feature: "Experience",
      groundhogs: "25+ years specializing in foundation repair",
      others: "General contractors dabbling in foundations",
      icon: Award
    },
    {
      feature: "Engineered Solutions",
      groundhogs: "Every project engineered by certified professionals",
      others: "One-size-fits-all approaches",
      icon: Wrench
    },
    {
      feature: "Warranty",
      groundhogs: "Lifetime transferable warranty on most services",
      others: "Limited or no warranty coverage",
      icon: Shield
    },
    {
      feature: "Installation Speed",
      groundhogs: "2x faster installation with advanced systems",
      others: "Slow, outdated methods that take weeks",
      icon: Clock
    },
    {
      feature: "Crew Training",
      groundhogs: "Expert technicians trained on our proprietary systems",
      others: "Day laborers with minimal foundation training",
      icon: Users
    },
    {
      feature: "Materials",
      groundhogs: "Commercial-grade materials rated for extreme climates",
      others: "Basic residential-grade products",
      icon: BadgeCheck
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Why Choose Groundhogs vs Other Foundation Companies | Groundhogs"
        description="See why Groundhogs is Ontario & Manitoba's #1 foundation repair company. Compare our 25+ years of experience, engineered solutions, and lifetime warranties against typical contractors."
        keywords="foundation repair comparison, why choose Groundhogs, best foundation repair Ontario, foundation repair experts Manitoba, foundation repair warranty"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Groundhogs vs Other Foundation Companies?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Not all foundation companies are created equal. See why homeowners across Ontario & Manitoba trust Groundhogs.
            </p>
            
            {/* Phone CTA */}
            <div className="mb-6">
              <a href="tel:1-888-907-3777" className="inline-block">
                <div className="text-3xl md:text-4xl font-bold text-white bg-orange-600 px-8 py-4 rounded-lg hover:bg-orange-700 transition-all shadow-2xl hover:scale-105">
                  📞 1-888-907-3777
                </div>
              </a>
              <p className="text-sm text-gray-300 mt-2">Call Now for Your Free Estimate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-slate-900 text-white">
                <div className="p-4 md:p-6"></div>
                <div className="p-4 md:p-6 text-center border-l border-orange-600">
                  <h3 className="text-xl md:text-2xl font-bold text-orange-500">Groundhogs</h3>
                  <p className="text-sm text-gray-300 mt-1">Ontario & Manitoba's #1</p>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-gray-700">
                  <h3 className="text-xl md:text-2xl font-bold">Other Companies</h3>
                  <p className="text-sm text-gray-400 mt-1">Typical Contractors</p>
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisonPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div 
                    key={index} 
                    className={`grid grid-cols-3 border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    {/* Feature Name */}
                    <div className="p-4 md:p-6 flex items-center gap-3">
                      <Icon className="text-orange-600 flex-shrink-0" size={24} />
                      <span className="font-bold text-gray-900">{point.feature}</span>
                    </div>
                    
                    {/* Groundhogs */}
                    <div className="p-4 md:p-6 border-l border-orange-200 bg-orange-50/50">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm md:text-base text-gray-700">{point.groundhogs}</span>
                      </div>
                    </div>
                    
                    {/* Others */}
                    <div className="p-4 md:p-6 border-l border-gray-200">
                      <div className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm md:text-base text-gray-600">{point.others}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center bg-slate-900 text-white p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience the Groundhogs Difference
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join 2,000+ satisfied homeowners who chose engineered solutions over quick fixes.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="tel:1-888-907-3777" className="inline-block">
                  <div className="text-2xl md:text-3xl font-bold text-white bg-orange-600 px-8 py-4 rounded-lg hover:bg-orange-700 transition-all shadow-xl">
                    📞 1-888-907-3777
                  </div>
                </a>
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8 py-6">
                  <Link to="/contact">Get Your Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Sets Groundhogs Apart
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-600 mb-4">
                  <Award size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">25+ Years Experience</h3>
                <p className="text-gray-600">
                  Thunder Bay's longest-serving foundation company. We've seen it all and fixed it all.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-600 mb-4">
                  <Shield size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Lifetime Warranties</h3>
                <p className="text-gray-600">
                  Transferable warranties that protect your investment for as long as you own your home.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-600 mb-4">
                  <Users size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">
                  Our crews are foundation specialists, not general contractors learning on your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyGroundhogs;
