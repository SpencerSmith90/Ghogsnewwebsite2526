import React from 'react';
import { Users, Briefcase, TrendingUp, Heart, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';

const Careers = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Career Growth",
      description: "We invest in training and development, helping our team members advance their skills and careers."
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: "Work-Life Balance",
      description: "We respect our team's personal time and strive to maintain healthy work schedules."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Culture",
      description: "Join a crew that takes pride in their work and supports each other every day."
    }
  ];

  const positions = [
    {
      title: "Foundation Repair Technician",
      description: "Hands-on role installing push piers, repairing foundations, and working with engineered systems. Training provided."
    },
    {
      title: "Waterproofing Specialist",
      description: "Install exterior and interior waterproofing systems, drainage solutions, and vapor barriers."
    },
    {
      title: "Excavation Operator",
      description: "Operate excavation equipment for foundation repair and waterproofing projects. Valid license required."
    },
    {
      title: "Project Estimator",
      description: "Assess foundation issues, design repair solutions, and provide detailed estimates to homeowners."
    }
  ];

  const values = [
    "Safety first, always",
    "Quality over shortcuts",
    "Respect for homeowners and property",
    "Continuous learning and improvement",
    "Honest communication",
    "Pride in craftsmanship"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Careers at Groundhogs | Join Our Foundation Repair Team"
        description="Join the Groundhogs team. We're hiring foundation repair technicians, waterproofing specialists, and skilled tradespeople in Ontario and Manitoba."
        keywords="foundation repair jobs Ontario, waterproofing careers Manitoba, construction jobs Thunder Bay, skilled trades careers"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Careers at Groundhogs
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Build a Career with a Company That's Building Something Better
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We're looking for skilled, dedicated professionals who want to do work that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Work at Groundhogs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              The Groundhogs Way
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Current Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{position.title}</h3>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              What We Offer
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <ul className="space-y-3">
                <li><strong>Competitive wages:</strong> We pay for skill, experience, and quality work</li>
                <li><strong>Benefits package:</strong> Health coverage and retirement planning options</li>
                <li><strong>Professional training:</strong> Learn advanced systems and techniques</li>
                <li><strong>Company equipment:</strong> Work with quality tools and modern systems</li>
                <li><strong>Stable year-round work:</strong> Both interior and exterior projects</li>
                <li><strong>Advancement opportunities:</strong> Grow into leadership and specialized roles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who take pride in their work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              <Link to="/contact" className="inline-flex items-center justify-center">
                Apply Now
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

export default Careers;