import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Award, Users, Zap, ArrowRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const ThunderBay = () => {
  const services = [
    {
      title: "Foundation Repair & Replacement",
      description: "Complete foundation reconstruction, crack repair, and structural restoration for Thunder Bay homes and businesses.",
      link: "/services/foundation-repair-replacement"
    },
    {
      title: "Exterior Waterproofing",
      description: "Thunder Bay's most trusted exterior waterproofing system - engineered to handle Northern Ontario's extreme weather.",
      link: "/services/exterior-waterproofing"
    },
    {
      title: "Interior Waterproofing",
      description: "Interior drainage systems and waterproofing solutions perfect for Thunder Bay's challenging conditions.",
      link: "/services/interior-waterproofing"
    },
    {
      title: "Push Pier & Concentric Pier Systems",
      description: "Advanced underpinning systems for Thunder Bay's clay soil and bedrock conditions.",
      link: "/services/push-pier-systems"
    },
    {
      title: "EverBrace™ Wall Restoration",
      description: "The ultimate solution for failing foundation walls in older Thunder Bay homes.",
      link: "/services/everbrace-wall-restoration"
    },
    {
      title: "Steel Post & Beam Systems",
      description: "SmartJack® systems to repair sagging floors and strengthen Thunder Bay foundations.",
      link: "/services/steel-post-beam-systems"
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "25+ Years Thunder Bay Experience",
      description: "Over two decades serving Thunder Bay and Northwestern Ontario with proven foundation solutions."
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Thunder Bay Headquarters",
      description: "Located at 415 Fort William Road - your local foundation repair experts with a permanent Thunder Bay presence."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Elite Cross-Trained Crews",
      description: "Thunder Bay's most skilled foundation teams - not just workers, but leaders in carpentry, masonry, and structural science."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "2x Faster Completion",
      description: "Systemized processes mean Thunder Bay homeowners get their foundations repaired in half the time without compromising quality."
    }
  ];

  const thunderBayProblems = [
    {
      problem: "Clay Soil Expansion & Contraction",
      solution: "Thunder Bay's expansive clay soils cause significant foundation movement. Our advanced pier systems bypass problem soils and anchor to stable bedrock."
    },
    {
      problem: "Extreme Freeze-Thaw Cycles",
      solution: "Thunder Bay's harsh winters create intense freeze-thaw pressure. Our waterproofing systems are rated for -40 and beyond, protecting your foundation year-round."
    },
    {
      problem: "High Water Table Issues",
      solution: "Many Thunder Bay properties face water table challenges. Our interior and exterior drainage systems keep basements dry regardless of groundwater levels."
    },
    {
      problem: "Aging Foundation Infrastructure",
      solution: "Older Thunder Bay homes often have deteriorating stone or concrete foundations. Our EverBrace™ and reconstruction services restore structural integrity."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Thunder Bay Foundation Repair & Waterproofing | 25+ Years | #1 Rated"
        description="Thunder Bay's longest-serving foundation repair company. 25+ years, 2000+ projects, Thunder Bay headquarters at 415 Fort William Road. Foundation Supportworks authorized dealer. Call 1-888-907-3777 for free inspection."
        keywords="Thunder Bay foundation repair, basement waterproofing Thunder Bay, foundation company Thunder Bay, sump pump installation Thunder Bay, weeping tile Thunder Bay, foundation crack repair Thunder Bay, underpinning Thunder Bay, Thunder Bay waterproofing contractors"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Groundhogs - Thunder Bay",
          "image": "https://groundhogs.ca/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "415 Fort William Road",
            "addressLocality": "Thunder Bay",
            "addressRegion": "ON",
            "postalCode": "P7B 2Z5",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.382221,
            "longitude": -89.247330
          },
          "telephone": "1-888-907-3777",
          "email": "hello@groundhogs.ca",
          "url": "https://groundhogs.ca/thunder-bay-foundation-repair",
          "priceRange": "$$",
          "areaServed": {
            "@type": "City",
            "name": "Thunder Bay",
            "containedInPlace": {
              "@type": "State",
              "name": "Ontario"
            }
          },
          "description": "Thunder Bay's premier foundation repair and waterproofing company with 25+ years of experience serving Northwestern Ontario.",
          "foundingDate": "1990s",
          "slogan": "Thunder Bay's Longest-Serving Foundation Repair Company"
        })}
      </script>

      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does foundation repair cost in Thunder Bay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Foundation repair costs in Thunder Bay typically range from $3,000 to $15,000 depending on the severity of the damage, type of repair needed, and accessibility. Minor crack repairs may cost $500-$2,000, while major foundation stabilization with push piers can range from $8,000-$15,000. Groundhogs offers free inspections and estimates for all Thunder Bay properties."
              }
            },
            {
              "@type": "Question",
              "name": "Who is the best foundation repair company in Thunder Bay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Groundhogs is Thunder Bay's longest-serving foundation repair company with 25+ years of experience and headquarters located at 415 Fort William Road. We're the only Foundation Supportworks authorized dealer in Thunder Bay with access to advanced systems like EverBrace, Concentric Piers, and PowerBrace that other Thunder Bay contractors don't have."
              }
            },
            {
              "@type": "Question",
              "name": "How long does basement waterproofing last in Thunder Bay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professional basement waterproofing in Thunder Bay should last 20-30 years or more when done correctly. Groundhogs waterproofing systems are specifically engineered for Thunder Bay's challenging conditions - rated for temperatures of -40 and beyond, designed to handle Northwestern Ontario's heavy rainfall and snowmelt."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a permit for foundation repair in Thunder Bay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In Thunder Bay, most foundation repair work requires permits and engineering approval, especially for structural repairs like underpinning, push piers, or major excavation work. Groundhogs handles all permit applications and works closely with Thunder Bay's structural engineers to ensure your foundation repair meets all City of Thunder Bay building codes."
              }
            },
            {
              "@type": "Question",
              "name": "What causes foundation problems in Thunder Bay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Thunder Bay foundations face unique challenges: expansive clay soils, extreme freeze-thaw cycles (temperatures from -40°C to +30°C), high water tables near Lake Superior, and heavy spring snowmelt. These conditions cause foundation settling, cracking, bowing walls, and water intrusion."
              }
            },
            {
              "@type": "Question",
              "name": "How long does foundation repair take in Thunder Bay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Thunder Bay foundation repair projects are completed in 2-5 days. Simple crack repairs can be done in 1 day, while comprehensive foundation stabilization with push piers typically takes 3-5 days. Groundhogs uses systemized processes that complete Thunder Bay foundation repairs 2x faster than traditional methods."
              }
            },
            {
              "@type": "Question",
              "name": "Can foundation repair be done in Thunder Bay's winter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Groundhogs offers year-round foundation repair services in Thunder Bay. Some interior repairs can be done anytime. For exterior work, we assess conditions and use specialized techniques for winter weather. We typically recommend scheduling major exterior work during warmer months (May-October) for optimal results."
              }
            }
          ]
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Thunder Bay's Longest-Serving Foundation Repair Company - Since 1990s
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Thunder Bay Foundation Repair & Waterproofing Experts
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              25+ Years Serving Thunder Bay & Northwestern Ontario | Thunder Bay Headquarters
            </p>
            <div className="text-lg text-gray-200 leading-relaxed mb-8 space-y-4">
              <p>
                When Thunder Bay homeowners need foundation repair, they call Groundhogs - <strong>Thunder Bay's most trusted and longest-serving foundation repair company</strong> with our headquarters right here at 415 Fort William Road.
              </p>
              <p>
                Proudly Thunder Bay-owned and operated, we're your local Thunder Bay foundation experts backed by 25+ years of experience, 2000+ successful projects, and the most advanced foundation repair technology in Northwestern Ontario. <strong>Your Thunder Bay neighbors trust Groundhogs.</strong>
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

      {/* Why Thunder Bay Chooses Groundhogs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Thunder Bay Homeowners Choose Groundhogs
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                As Thunder Bay's premier foundation repair company, we deliver what other Thunder Bay contractors can't match - experience, technology, and results that last.
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
                Thunder Bay's Foundation Supportworks Authorized Dealer
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Groundhogs is Thunder Bay's exclusive authorized dealer for Foundation Supportworks - North America's most advanced foundation repair systems. This partnership gives Thunder Bay homeowners access to technology and engineering that other local contractors simply don't have.
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

      {/* Common Thunder Bay Foundation Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Common Foundation Problems in Thunder Bay
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Thunder Bay's unique geology and climate create specific foundation challenges. Our 25+ years of Thunder Bay experience means we know exactly how to solve them.
            </p>

            <div className="space-y-6">
              {thunderBayProblems.map((item, index) => (
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
                "In Thunder Bay's challenging conditions, you need more than a general contractor - you need foundation specialists."
              </p>
              <p className="text-lg text-gray-300">
                That's why Thunder Bay homeowners trust Groundhogs for foundation repairs that truly last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thunder Bay Foundation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Our Thunder Bay Foundation Repair Services
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              From minor crack repairs to complete foundation reconstruction, Groundhogs delivers comprehensive foundation solutions throughout Thunder Bay and Northwestern Ontario.
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

      {/* Thunder Bay Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Serving Thunder Bay & Northwestern Ontario
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              While our headquarters is located at 415 Fort William Road in Thunder Bay, we proudly serve all of Northwestern Ontario including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Thunder Bay</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Fort William</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Port Arthur</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Nipigon</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Terrace Bay</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Marathon</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Geraldton</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">Atikokan</p>
              </div>
            </div>

            <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Thunder Bay Headquarters</h3>
              <p className="text-lg mb-2">415 Fort William Road</p>
              <p className="text-lg mb-2">Thunder Bay, Ontario P7B 2Z5</p>
              <p className="text-lg font-semibold mb-4">Call: 1-888-907-3777</p>
              <p className="text-sm opacity-90">
                Office Hours: Monday to Friday, 9am to 5pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Groundhogs vs Other Thunder Bay Companies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Groundhogs vs Other Thunder Bay Foundation Companies
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
                    <th className="border p-4 text-center">Other Thunder Bay Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">Experience</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">25+ Years</td>
                    <td className="border p-4 text-center">5-12 Years</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Markets Served</td>
                    <td className="border p-4 text-center bg-orange-50 font-bold">Thunder Bay, Winnipeg, Sudbury</td>
                    <td className="border p-4 text-center">Thunder Bay Only</td>
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
                When your Thunder Bay home's foundation is at stake, choose the company with proven experience, superior technology, and a track record of success.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link to="/contact">
                  Get Your Free Thunder Bay Foundation Inspection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thunder Bay FAQ Section with Schema */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Thunder Bay Foundation Repair FAQ
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Answers to common questions from Thunder Bay homeowners about foundation repair and basement waterproofing
            </p>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does foundation repair cost in Thunder Bay?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Foundation repair costs in Thunder Bay typically range from $3,000 to $15,000 depending on the severity of the damage, type of repair needed, and accessibility. Minor crack repairs may cost $500-$2,000, while major foundation stabilization with push piers can range from $8,000-$15,000. Thunder Bay's clay soil and extreme freeze-thaw cycles often require specialized solutions. Groundhogs offers free inspections and estimates for all Thunder Bay properties - call 1-888-907-3777 to schedule yours today.
                </p>
              </Card>

              {/* FAQ 2 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Who is the best foundation repair company in Thunder Bay?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Groundhogs is Thunder Bay's longest-serving foundation repair company with 25+ years of experience and our headquarters located at 415 Fort William Road. We're the only Foundation Supportworks authorized dealer in Thunder Bay, giving us access to advanced systems like EverBrace™, Concentric Piers, and PowerBrace™ that other Thunder Bay contractors don't have. With 2000+ successful projects and an elite team of cross-trained specialists, Thunder Bay homeowners consistently choose Groundhogs for permanent foundation solutions.
                </p>
              </Card>

              {/* FAQ 3 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does basement waterproofing last in Thunder Bay?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional basement waterproofing in Thunder Bay, when done correctly, should last 20-30 years or more. Groundhogs' waterproofing systems are specifically engineered for Thunder Bay's challenging conditions - rated for temperatures of -40 and beyond. Our exterior waterproofing includes Delta-MS membranes, proper drainage systems, and weeping tiles designed to handle Northwestern Ontario's heavy rainfall and snowmelt. All our Thunder Bay waterproofing projects come with warranties for your peace of mind.
                </p>
              </Card>

              {/* FAQ 4 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need a permit for foundation repair in Thunder Bay?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In Thunder Bay, most foundation repair work requires permits and engineering approval, especially for structural repairs like underpinning, push piers, or major excavation work. Groundhogs handles all permit applications and works closely with Thunder Bay's best structural engineers to ensure your foundation repair meets all City of Thunder Bay building codes and provincial requirements. We manage the entire permit process so you don't have to worry about Thunder Bay's municipal requirements.
                </p>
              </Card>

              {/* FAQ 5 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What causes foundation problems in Thunder Bay?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Thunder Bay foundations face unique challenges: expansive clay soils that swell and shrink with moisture changes, extreme freeze-thaw cycles (temperatures from -40°C to +30°C), high water tables near Lake Superior, and heavy spring snowmelt. These conditions cause foundation settling, cracking, bowing walls, and water intrusion. Groundhogs has 25+ years of experience solving these specific Thunder Bay foundation problems with proven solutions engineered for Northwestern Ontario's demanding climate.
                </p>
              </Card>

              {/* FAQ 6 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does foundation repair take in Thunder Bay?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most Thunder Bay foundation repair projects are completed in 2-5 days, depending on the scope of work. Simple crack repairs can be done in 1 day, while comprehensive foundation stabilization with push piers or underpinning typically takes 3-5 days. Groundhogs uses systemized processes that allow us to complete Thunder Bay foundation repairs 2x faster than traditional methods without compromising quality. We provide clear timelines during your free Thunder Bay inspection.
                </p>
              </Card>

              {/* FAQ 7 */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can foundation repair be done in Thunder Bay's winter?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! While many Thunder Bay contractors shut down in winter, Groundhogs offers year-round foundation repair services. Some interior repairs like crack sealing and interior waterproofing can be done anytime. For exterior work, we carefully assess conditions and use specialized techniques to work safely in Thunder Bay's winter weather when needed. However, we typically recommend scheduling major exterior work during warmer months (May-October) for optimal results in Thunder Bay's climate.
                </p>
              </Card>
            </div>

            <div className="mt-12 text-center bg-orange-50 rounded-lg p-8">
              <p className="text-lg text-gray-900 mb-4">
                <strong>Have more questions about your Thunder Bay foundation?</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Our Thunder Bay foundation experts are here to help. Call us for a free, no-obligation inspection and estimate.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <a href="tel:1-888-907-3777">
                  <Phone className="mr-2" size={20} />
                  Call 1-888-907-3777
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your Thunder Bay Foundation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Thunder Bay's most trusted foundation repair company today for your free, no-obligation inspection and estimate.
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
            Serving Thunder Bay & Northwestern Ontario Since the 1990s
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThunderBay;
