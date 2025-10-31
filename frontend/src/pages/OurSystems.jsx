import React from 'react';
import { Settings, Award, Zap, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

const OurSystems = () => {
  const { data: materials, loading } = useApi('/materials');

  const systemAdvantages = [
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Engineered Solutions",
      description: "Every system is designed and tested for long-term performance in Northern climates."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Proven Technology",
      description: "We use industry-leading systems from Foundation Supportworks and premium manufacturers."
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: "Precision Installation",
      description: "Our trained crews install every system to exact specifications for maximum effectiveness."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Systems & Technology | Groundhogs Foundation Solutions"
        description="Groundhogs uses advanced foundation repair and waterproofing systems including push piers, SmartJack, engineered membranes, and more. Proven technology for Northern climates."
        keywords="foundation repair systems, push pier technology, SmartJack systems, foundation waterproofing membranes, Foundation Supportworks"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Settings className="w-16 h-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Systems & Technology
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Advanced Engineering Meets Northern Expertise
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We use proven, engineered systems specifically designed for the extreme conditions of Ontario and Manitoba.
            </p>
          </div>
        </div>
      </section>

      {/* System Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Our Systems Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {systemAdvantages.map((advantage, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-700">{advantage.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Systemization */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Systemized Excellence: 2x Faster Without Compromise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="text-lg leading-relaxed mb-4">
                At Groundhogs, we've taken traditional <strong>foundation repair</strong> and <strong>waterproofing methods</strong> and completely reimagined them. Through relentless innovation and process optimization, we've developed <strong>systemized installation protocols</strong> that allow us to complete projects <strong>up to 2x faster than our competitors</strong> — without cutting corners or compromising results.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Speed isn't about rushing — it's about efficiency.</strong> Our crews operate with precision workflows, standardized equipment setups, and engineered solutions that eliminate guesswork. Every step of a Groundhogs installation follows a proven process, from excavation to final backfill, ensuring consistent quality at significantly faster timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-orange-50 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Continuous Improvement</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't just install systems — we constantly refine them. Our field teams provide real-world feedback that drives product selection, tool innovation, and installation method improvements. This commitment to evolution means you get the benefit of decades of learned efficiency.
                </p>
              </Card>

              <Card className="p-6 bg-orange-50 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Embracing Complexity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most foundation and waterproofing work seems overwhelming to the average contractor. For us, it's where we thrive. We lean into the challenging projects — the ones requiring precision, engineering, and problem-solving — because that's what we're built to do.
                </p>
              </Card>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The Groundhogs Difference</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-orange-400 font-semibold mb-2">✓ Faster Project Completion</p>
                  <p className="text-gray-300 text-sm">Systemized workflows complete installations up to 2x faster than traditional methods</p>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-2">✓ Zero Compromise on Quality</p>
                  <p className="text-gray-300 text-sm">Speed through efficiency, not shortcuts — engineered solutions installed to exact specifications</p>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-2">✓ Proven & Refined Systems</p>
                  <p className="text-gray-300 text-sm">Decades of field experience translated into optimized installation protocols</p>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-2">✓ Built for Complexity</p>
                  <p className="text-gray-300 text-sm">We excel at the challenging projects other contractors avoid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Advanced Systems We Use at Groundhogs
              </h2>
              <p className="text-xl text-orange-600 font-semibold mb-4">
                Innovation. Precision. Proven Results.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading systems...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {materials && materials.map((material) => (
                  <Card key={material.id} className="p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{material.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{material.description}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Our Partnership with Foundation Supportworks
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Through our partnership with <strong>Foundation Supportworks of Omaha, Nebraska</strong>, we're the authorized Canadian dealer of some of the most advanced piering and waterproofing systems in North America.
              </p>
              <p className="mb-4">
                That partnership gives us access to world-class engineering, research, and innovation — combined with the hands-on, local experience that only Northern contractors understand.
              </p>
              <p>
                Every system we install is backed by rigorous testing, engineering analysis, and decades of proven performance in the harshest conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Our Systems in Action
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn which system is right for your home
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

export default OurSystems;