import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Award, Users, Zap, ArrowRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Winnipeg = () => {
  const services = [
    {
      title: "Foundation Repair & Replacement",
      description: "Complete foundation reconstruction and repair solutions engineered for Winnipeg's challenging clay soil conditions.",
      link: "/services/foundation-repair-replacement"
    },
    {
      title: "Exterior Waterproofing",
      description: "Winnipeg's most reliable exterior waterproofing systems - designed to handle Manitoba's extreme weather.",
      link: "/services/exterior-waterproofing"
    },
    {
      title: "Interior Waterproofing",
      description: "Interior drainage and waterproofing solutions for Winnipeg basements facing high water tables.",
      link: "/services/interior-waterproofing"
    },
    {
      title: "Push Pier & Concentric Pier Systems",
      description: "Advanced foundation underpinning specifically engineered for Winnipeg's expansive clay soils.",
      link: "/services/push-pier-systems"
    },
    {
      title: "EverBrace™ Wall Restoration",
      description: "Permanent solutions for bowing and failing foundation walls in Winnipeg homes.",
      link: "/services/everbrace-wall-restoration"
    },
    {
      title: "Steel Post & Beam Systems",
      description: "SmartJack® systems to repair sagging floors and strengthen Winnipeg foundations.",
      link: "/services/steel-post-beam-systems"
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "25+ Years Foundation Experience Coming to Manitoba",
      description: "Groundhogs is bringing over two decades of proven foundation expertise to Winnipeg, with 2000+ successful projects across Ontario establishing our reputation for excellence."
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Serving All of Winnipeg",
      description: "From East Kildonan to Charleswood, River Heights to St. Vital - we serve every Winnipeg neighborhood with expert foundation repair."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Elite Cross-Trained Crews",
      description: "Winnipeg's most skilled foundation teams - leaders in carpentry, masonry, concrete work, and structural engineering."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "2x Faster Completion",
      description: "Systemized processes mean Winnipeg homeowners get foundations repaired in half the time without compromising quality."
    }
  ];

  const winnipegProblems = [
    {
      problem: "Expansive Clay Soil Movement",
      solution: "Winnipeg sits on some of Manitoba's most expansive clay soils, causing significant foundation shifting. Our pier systems bypass problem soils and anchor to stable bedrock beneath the clay layer."
    },
    {
      problem: "Extreme Temperature Fluctuations",
      solution: "Winnipeg's temperature swings from -40°C to +30°C create intense foundation stress. Our waterproofing and structural systems are specifically engineered for Manitoba's climate extremes."
    },
    {
      problem: "Spring Flooding & High Water Tables",
      solution: "Winnipeg's spring flooding events and high water tables threaten basement integrity. Our comprehensive drainage and waterproofing systems protect against Manitoba's most severe water challenges."
    },
    {
      problem: "Foundation Frost Heave",
      solution: "Winnipeg's deep frost penetration causes foundation heaving and cracking. Our repairs address frost-related damage with solutions engineered for Manitoba's harsh winters."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Foundation Repair Winnipeg | 25+ Years Experience | Call 1-888-907-3777"
        description="Winnipeg's most trusted foundation repair and waterproofing company. 25+ years Manitoba experience, 2000+ projects completed. Serving all of Winnipeg & Manitoba. Call 1-888-907-3777 for a free estimate."
        keywords="foundation repair Winnipeg, basement waterproofing Winnipeg, foundation contractors Winnipeg, foundation crack repair Winnipeg, waterproofing companies Winnipeg, underpinning Winnipeg, basement flooding Winnipeg, foundation experts Winnipeg Manitoba"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Groundhogs - Winnipeg",
          "image": "https://groundhogs.ca/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Winnipeg",
            "addressRegion": "MB",
            "addressCountry": "CA"
          },
          "telephone": "1-888-907-3777",
          "email": "hello@groundhogs.ca",
          "url": "https://groundhogs.ca/winnipeg-foundation-repair",
          "priceRange": "$$",
          "areaServed": {
            "@type": "City",
            "name": "Winnipeg",
            "containedInPlace": {
              "@type": "State",
              "name": "Manitoba"
            }
          },
          "description": "Winnipeg's premier foundation repair and waterproofing company with 25+ years of Manitoba experience."
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Winnipeg's #1 Rated Foundation Repair Company
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Winnipeg Foundation Repair & Waterproofing Specialists
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Bringing 25+ Years of Ontario Foundation Expertise to Manitoba
            </p>
            <div className="text-lg text-gray-200 leading-relaxed mb-8 space-y-4">
              <p>
                Groundhogs is expanding to Winnipeg, bringing over 25 years of proven foundation repair and waterproofing expertise to Manitoba homeowners.
              </p>
              <p>
                Serving all Winnipeg neighborhoods from East Kildonan to Charleswood, we're bringing Manitoba the same advanced foundation technology, elite crews, and proven systems that have successfully completed 2000+ projects across Ontario.
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

      {/* Why Winnipeg Chooses Groundhogs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Winnipeg Homeowners Choose Groundhogs
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Groundhogs is expanding to Winnipeg, bringing proven foundation repair expertise, advanced technology, and results built to last in Manitoba's challenging climate.
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
                Manitoba's Foundation Supportworks Authorized Dealer
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Groundhogs is Manitoba's authorized dealer for Foundation Supportworks - North America's most advanced foundation repair systems. This partnership gives Winnipeg homeowners access to technology and engineering that other local Manitoba contractors simply can't provide.
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

      {/* Common Winnipeg Foundation Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Common Foundation Problems in Winnipeg
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Winnipeg's unique geology and Manitoba's extreme climate create specific foundation challenges. Groundhogs is bringing 25+ years of experience solving these exact problems in similar Northern climates.
            </p>

            <div className="space-y-6">
              {winnipegProblems.map((item, index) => (
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
                "Winnipeg's foundation challenges require Manitoba expertise - not guesswork."
              </p>
              <p className="text-lg text-gray-300">
                That's why Winnipeg homeowners trust Groundhogs for foundation repairs engineered for Manitoba's toughest conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Winnipeg Foundation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Our Winnipeg Foundation Repair Services
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              From minor crack repairs to complete foundation reconstruction, Groundhogs delivers comprehensive foundation solutions throughout Winnipeg and all of Manitoba.
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

      {/* Winnipeg Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Serving All of Winnipeg & Manitoba
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We proudly serve all Winnipeg neighborhoods and surrounding Manitoba communities including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Winnipeg</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Brandon</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Steinbach</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Portage la Prairie</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Selkirk</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Winkler</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Morden</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Thompson</p>
              </div>
            </div>

            <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Serving Winnipeg & Manitoba</h3>
              <p className="text-lg font-semibold mb-4">Call: 1-888-907-3777</p>
              <p className="text-lg mb-2">From East Kildonan to Charleswood</p>
              <p className="text-lg mb-4">River Heights to St. Vital - We Serve All Winnipeg</p>
              <p className="text-sm opacity-90">
                Office Hours: Monday to Friday, 9am to 5pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Groundhogs vs Other Winnipeg Companies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Groundhogs vs Other Winnipeg Foundation Companies
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
                    <th className="border p-4 text-center">Other Winnipeg Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">Manitoba Experience</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">25+ Years</td>
                    <td className="border p-4 text-center">5-15 Years</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Markets Served</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">Thunder Bay, Winnipeg, Sudbury</td>
                    <td className="border p-4 text-center">Winnipeg Only</td>
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
                  <tr>
                    <td className="border p-4 font-semibold">Crew Training</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">Elite Cross-Trained</td>
                    <td className="border p-4 text-center">Basic Training</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Project Speed</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">2x Faster</td>
                    <td className="border p-4 text-center">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">
                When your Winnipeg home's foundation is at stake, choose the company with proven Manitoba experience, superior technology, and a track record of success.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link to="/contact">
                  Get Your Free Winnipeg Foundation Inspection
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
            Ready to Fix Your Winnipeg Foundation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Manitoba's most trusted foundation repair company today for your free, no-obligation inspection and estimate.
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
            Serving Winnipeg & All of Manitoba for 25+ Years
          </p>
        </div>
      </section>
    </div>
  );
};

export default Winnipeg;
