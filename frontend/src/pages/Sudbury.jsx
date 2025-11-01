import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Award, Users, Zap, ArrowRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Sudbury = () => {
  const services = [
    {
      title: "Foundation Repair & Replacement",
      description: "Expert foundation reconstruction and repair for Sudbury's unique geological challenges and mining area concerns.",
      link: "/services/foundation-repair-replacement"
    },
    {
      title: "Exterior Waterproofing",
      description: "Sudbury's premier exterior waterproofing systems engineered for Northern Ontario's demanding climate.",
      link: "/services/exterior-waterproofing"
    },
    {
      title: "Interior Waterproofing",
      description: "Interior drainage and waterproofing solutions for Greater Sudbury basements and crawl spaces.",
      link: "/services/interior-waterproofing"
    },
    {
      title: "Push Pier & Concentric Pier Systems",
      description: "Advanced underpinning systems designed for Sudbury's rocky terrain and soil conditions.",
      link: "/services/push-pier-systems"
    },
    {
      title: "EverBrace™ Wall Restoration",
      description: "Permanent wall stabilization for Sudbury's older homes with deteriorating foundations.",
      link: "/services/everbrace-wall-restoration"
    },
    {
      title: "Steel Post & Beam Systems",
      description: "SmartJack® systems to reinforce sagging floors in Sudbury homes.",
      link: "/services/steel-post-beam-systems"
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Quickly Earned Sudbury's Trust",
      description: "In just a few years serving Greater Sudbury, we've become the region's most trusted foundation company through exceptional results and proven 25+ year expertise from across Northern Ontario."
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Serving All of Greater Sudbury",
      description: "From Azilda to Dowling, Chelmsford to Lively - we serve every Sudbury community with expert foundation repair."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Elite Cross-Trained Crews",
      description: "Sudbury's most skilled foundation specialists - leaders in structural repair and waterproofing."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "2x Faster Completion",
      description: "Systemized excellence means Sudbury projects completed in half the time with superior quality."
    }
  ];

  const sudburyProblems = [
    {
      problem: "Rocky Mining Area Terrain",
      solution: "Sudbury's unique mining geology and rocky terrain create specific foundation challenges. Our specialized equipment and techniques handle Sudbury's toughest bedrock conditions."
    },
    {
      problem: "Acidic Soil from Historical Mining",
      solution: "Greater Sudbury's soil chemistry affects foundation materials differently. Our systems use materials specifically rated for Sudbury's soil conditions."
    },
    {
      problem: "Extreme Northern Ontario Weather",
      solution: "Sudbury's harsh winters and temperature extremes stress foundations year-round. Our solutions are engineered for Northern Ontario's most demanding climate."
    },
    {
      problem: "Settlement in Fill Areas",
      solution: "Many Sudbury properties were built on fill material. Our pier systems reach stable bedrock, bypassing problematic fill and clay layers."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Foundation Repair Sudbury | 25+ Years Experience | Call 1-888-907-3777"
        description="Greater Sudbury's most trusted foundation repair and waterproofing company. 25+ years Northern Ontario experience, 2000+ projects completed. Serving all of Sudbury. Call 1-888-907-3777 for a free estimate."
        keywords="foundation repair Sudbury, basement waterproofing Sudbury, foundation contractors Sudbury, foundation crack repair Sudbury, waterproofing companies Sudbury, underpinning Sudbury, basement flooding Sudbury, foundation experts Greater Sudbury Ontario"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Groundhogs - Sudbury",
          "image": "https://groundhogs.ca/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sudbury",
            "addressRegion": "ON",
            "addressCountry": "CA"
          },
          "telephone": "1-888-907-3777",
          "email": "hello@groundhogs.ca",
          "url": "https://groundhogs.ca/sudbury-foundation-repair",
          "priceRange": "$$",
          "areaServed": {
            "@type": "City",
            "name": "Sudbury",
            "containedInPlace": {
              "@type": "State",
              "name": "Ontario"
            }
          },
          "description": "Greater Sudbury's premier foundation repair and waterproofing company with 25+ years of Northern Ontario experience."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Sudbury's #1 Rated Foundation Repair Company
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sudbury Foundation Repair & Waterproofing Professionals
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Already Sudbury's Most Trusted - Backed by 25+ Years of Northern Ontario Expertise
            </p>
            <div className="text-lg text-gray-200 leading-relaxed mb-8 space-y-4">
              <p>
                In just a few years, Groundhogs has become Greater Sudbury's most trusted foundation repair company - bringing over 25 years of proven Northern Ontario expertise to the region.
              </p>
              <p>
                Serving all of Greater Sudbury from Azilda to Dowling, Chelmsford to Lively, we've quickly earned our reputation through exceptional work, advanced technology, and the same elite crews that have completed 2000+ projects across Ontario.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
                <a href="tel:1-888-907-3777" className="inline-flex items-center">
                  <Phone className="mr-2" size={20} />
                  Call 1-888-907-3777
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-slate-900">
                <Link to="/contact">
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sudbury Chooses Groundhogs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Sudbury Homeowners Choose Groundhogs
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Already recognized as Greater Sudbury's premier foundation repair company, Groundhogs delivers proven expertise, advanced technology, and lasting results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {advantages.map((item, index) => (
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

            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Northern Ontario's Foundation Supportworks Authorized Dealer
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Groundhogs is Northern Ontario's authorized dealer for Foundation Supportworks - North America's most advanced foundation repair systems. Sudbury homeowners get access to technology other local contractors can't provide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-900">
                <span className="bg-white px-4 py-2 rounded-full">✓ EverBrace™ Systems</span>
                <span className="bg-white px-4 py-2 rounded-full">✓ Concentric Piers</span>
                <span className="bg-white px-4 py-2 rounded-full">✓ PowerBrace™</span>
                <span className="bg-white px-4 py-2 rounded-full">✓ GeoLock® Anchors</span>
                <span className="bg-white px-4 py-2 rounded-full">✓ SmartJack® Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Sudbury Foundation Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Common Foundation Problems in Greater Sudbury
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Sudbury's unique mining geology and Northern Ontario climate create specific foundation challenges. With 25+ years solving these exact problems across Northern Ontario, we know exactly how to address them.
            </p>

            <div className="space-y-6">
              {sudburyProblems.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.problem}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-slate-900 text-white rounded-lg p-8 text-center">
              <p className="text-xl md:text-2xl font-bold mb-4">
                "In just a few years, Groundhogs has become Sudbury's go-to foundation experts."
              </p>
              <p className="text-lg text-gray-300">
                Greater Sudbury homeowners choose Groundhogs for foundation repairs backed by 25+ years of Northern Ontario expertise and proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sudbury Foundation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Our Sudbury Foundation Repair Services
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Groundhogs has quickly become Greater Sudbury's most trusted foundation company, delivering comprehensive solutions backed by 2000+ successful projects across Northern Ontario.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center mt-auto"
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link to="/services">
                  View All Foundation Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sudbury Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Serving All of Greater Sudbury & Northern Ontario
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We proudly serve all Greater Sudbury communities and Northern Ontario including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Sudbury</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Azilda</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Chelmsford</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Lively</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Dowling</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Capreol</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Valley East</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Walden</p>
              </div>
            </div>

            <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Serving Greater Sudbury & Northern Ontario</h3>
              <p className="text-lg font-semibold mb-4">Call: 1-888-907-3777</p>
              <p className="text-lg mb-4">From Azilda to Lively - We Serve All of Sudbury</p>
              <p className="text-sm opacity-90">
                Office Hours: Monday to Friday, 9am to 5pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Groundhogs vs Other Sudbury Foundation Companies
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-4 text-left">Feature</th>
                    <th className="border p-4 text-center bg-orange-50">
                      <Star className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <span className="font-bold text-orange-600">Groundhogs</span>
                    </th>
                    <th className="border p-4 text-center">Other Sudbury Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">Northern Ontario Experience</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">25+ Years</td>
                    <td className="border p-4 text-center">5-15 Years</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Markets Served</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">Thunder Bay, Winnipeg, Sudbury</td>
                    <td className="border p-4 text-center">Sudbury Only</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Foundation Supportworks Dealer</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">✓ Authorized</td>
                    <td className="border p-4 text-center">✗ Not Authorized</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Advanced Systems</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">EverBrace™, Concentric Piers</td>
                    <td className="border p-4 text-center">Basic Only</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Projects Completed</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">2000+</td>
                    <td className="border p-4 text-center">Fewer Than 500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">
                When your Sudbury home's foundation needs repair, choose Northern Ontario's most trusted experts with 25+ years of proven experience and a track record of 2000+ successful projects.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link to="/contact">
                  Get Your Free Sudbury Foundation Inspection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your Sudbury Foundation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Greater Sudbury's most trusted foundation repair company today for your free, no-obligation inspection and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
              <a href="tel:1-888-907-3777" className="inline-flex items-center">
                <Phone className="mr-2" size={20} />
                Call 1-888-907-3777
              </a>
            </Button>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-6">
              <Link to="/contact">
                Request Free Estimate
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Already Sudbury's Most Trusted - Backed by 25+ Years Northern Ontario Expertise
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sudbury;
