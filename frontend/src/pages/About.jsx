import React from 'react';
import { CheckCircle, Target, Users, Award, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const differentiators = [
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Root Cause Eradication",
      description: "We don't mask symptoms. Our trained estimators and engineers diagnose the real problem and build a plan that eliminates it permanently."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Exclusive Products & Engineering",
      description: "As authorized installers for advanced pier, brace, and waterproofing systems, we deliver technology beyond what typical contractors can offer."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Elite Tradespeople You Can Trust",
      description: "Our crews show up on time, protect your home, and document every step. Professionalism is the Groundhogs standard, not the exception."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Systemized Efficiency",
      description: "We don't just work hard — we work smart. Through refined systems and workflow discipline, we complete projects up to 50% faster than industry norms without compromising quality."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Compliance & Accountability",
      description: "From permits to engineering stamps and transparent billing, every detail is code-compliant, documented, and honest."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Groundhogs | Foundation Repair Experts in Ontario & Manitoba"
        description="Groundhogs delivers real foundation repair solutions in Ontario & Manitoba — engineered systems, expert crews, and results that stand the test of time."
        keywords="foundation repair Ontario, permanent foundation solutions, engineered foundation systems, waterproofing contractors Manitoba, foundation contractors Ontario, Foundation Supportworks Canada"
      />

      {/* Schema Markup for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Groundhogs",
          "url": "https://www.groundhogs.ca",
          "logo": "https://groundhogs.ca/wp-content/themes/groundhogs/img/logo-footer.svg",
          "description": "Groundhogs is a foundation repair and waterproofing company serving Ontario and Manitoba, delivering engineered, permanent solutions with expert crews.",
          "areaServed": ["Ontario", "Manitoba", "Thunder Bay", "Sudbury", "Winnipeg"],
          "foundingDate": "2019",
          "brand": "Groundhogs",
          "slogan": "Strength from the Ground Up",
          "telephone": "1-888-907-3777",
          "email": "hello@groundhogs.ca"
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Groundhogs — Redefining Foundation Repair in Ontario & Manitoba
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Foundation Repair Experts Redefining the Standard
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              At Groundhogs, we're not here to be just another contractor — we're here to solve the foundation problem at its root.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Across Ontario and Manitoba, countless homeowners have been left with temporary fixes, guesswork repairs, and unskilled workmanship disguised as solutions.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We built Groundhogs to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Mission — Real Solutions. Real Skill. Real Results.
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-6 leading-relaxed">
                We believe homeowners deserve more than a patch job and a promise. They deserve truth, transparency, and systems that last a lifetime.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                That's why we've made it our mission to restore trust in the foundation industry — one home at a time.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900">We invest heavily in:</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Better systems</p>
                    <p className="text-gray-700">Engineered, tested, and refined for long-term performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Better people</p>
                    <p className="text-gray-700">Trained professionals who care as much about the work as the homeowner.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Better results</p>
                    <p className="text-gray-700">Permanent repairs backed by engineering, not sales pitches.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-900">
                Groundhogs exists to bring real craftsmanship, real integrity, and real structure back to an industry that's lost too much of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Our Story — Built from the Ground Up in Northern Ontario
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-6 leading-relaxed">
                Foundation problems in Northern Ontario and Manitoba aren't just an inconvenience — they're a battle against harsh geology, deep frost, and unpredictable soil.
                Expanding clays, immovable bedrock, and seasonal flooding test every structure built above them.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Groundhogs was born out of that environment — designed, staffed, and equipped locally to provide real, engineered solutions for the toughest conditions.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Through our partnership with <strong>Foundation Supportworks of Omaha, Nebraska</strong>, we're the authorized Canadian dealer of some of the most advanced piering and waterproofing systems in North America.
              </p>
              <p className="text-lg leading-relaxed">
                That partnership gives us access to world-class engineering, research, and innovation — combined with the hands-on, local experience that only Northern contractors understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                What Sets Groundhogs Apart
              </h2>
              <div className="max-w-3xl mx-auto space-y-3 text-lg text-gray-700 mb-8">
                <p>We don't sell products — we solve root causes.</p>
                <p>We don't rush jobs — we systemize excellence.</p>
                <p>And we don't chase volume — we build a name that stands for doing things right.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex gap-4 items-start">
                    <div className="bg-orange-100 rounded-full p-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Service Area — Proudly Serving Ontario and Manitoba
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide foundation repair and waterproofing services across:
            </p>
            <p className="text-2xl font-semibold text-orange-600 mb-8">
              Thunder Bay, Sudbury, Winnipeg, and surrounding communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every project, no matter how remote, receives the same standard of care, communication, and engineered precision that defines Groundhogs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Vision — Building Trust, One Foundation at a Time
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-4 leading-relaxed">
                We're not trying to be the biggest — we're building something better.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                A trusted national name that stands for truth, craftsmanship, and results that last.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Because every strong home, every solid company, and every meaningful reputation begins the same way —
              </p>
              <p className="text-2xl font-bold text-orange-600">
                from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Groundhogs Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation foundation assessment
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;