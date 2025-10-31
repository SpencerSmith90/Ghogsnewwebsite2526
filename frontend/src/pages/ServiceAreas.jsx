import React from 'react';
import { Phone, Upload, CheckCircle, Star, Award, Wrench, Droplets, Construction, Mountain, Snowflake, CloudRain, Truck, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';

const ServiceAreas = () => {
  const coreServices = [
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Exterior Waterproofing — Our Flagship Service",
      description: "We stop water before it reaches your home, protecting your foundation from leaks, frost, and hydrostatic pressure. Our systems use engineered membranes, drainage boards, and sealing processes designed for Northern Ontario and Manitoba's extreme weather conditions.",
      keywords: "exterior waterproofing Ontario, basement waterproofing Thunder Bay, foundation waterproofing Manitoba",
      serviceAreas: "Thunder Bay • Shuniah • Oliver-Paipoonge • Kakabeka Falls • Nipigon • Red Rock • Sudbury • Valley East • Lively • Greater Sudbury • Chelmsford • Winnipeg • St. Andrews • Headingley • Oak Bluff • Selkirk • Steinbach • Stonewall"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Foundation Repair & Replacement for Permanent Stability",
      description: "When it comes to structural integrity, we deliver permanent, engineered solutions that fix the problem, not just cover it up. Our teams handle everything from foundation wall reconstruction and structural crack repair to full replacements. Many of our systems even have the ability to reverse foundation failure through controlled lifting and stabilization.",
      keywords: "foundation repair Ontario, foundation replacement Manitoba, structural repair contractors",
      serviceAreas: "Thunder Bay • Sudbury • Winnipeg • and surrounding regions"
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Push Pier & Pile Systems for Sinking Foundations",
      description: "Our engineered push pier systems permanently stabilize and lift settling foundations. Each pier is hydraulically driven deep into load-bearing strata, transferring the weight of your home to stable ground. Groundhogs' systems work from both inside and outside, minimizing excavation while maximizing structural gain.",
      keywords: "push pier installation Ontario, foundation stabilization Manitoba, underpinning systems",
      serviceAreas: "Thunder Bay • Oliver-Paipoonge • Nipigon • Sudbury • Lively • Winnipeg • St. Andrews • Lockport • Headingley"
    },
    {
      icon: <Droplets className="w-8 h-8 text-orange-600" />,
      title: "Interior Waterproofing Systems for Dry, Healthy Basements",
      description: "When exterior excavation isn't an option, we bring waterproofing inside. Our interior drainage channels, vapor barriers, and sump systems keep basements dry and healthy year-round, providing cost-effective protection for homes where exterior work isn't feasible.",
      keywords: "interior waterproofing Ontario, basement drainage systems Manitoba, sump pump installation Thunder Bay",
      serviceAreas: "Thunder Bay • Sudbury • Winnipeg • North Bay • St. Clements • East St. Paul"
    },
    {
      icon: <Construction className="w-8 h-8 text-orange-600" />,
      title: "Steel Post & Beam Systems for Sagging Floors",
      description: "We rebuild sagging or uneven floors with custom-engineered steel post and beam systems designed to carry real loads and restore strength beneath your home. Every system is measured, fabricated, and installed for precision, ensuring long-term stability that wood alone can't deliver.",
      keywords: "sagging floor repair Ontario, steel beam foundation support, crawlspace reinforcement Manitoba",
      serviceAreas: "Thunder Bay • Sudbury • Winnipeg • and surrounding communities"
    }
  ];

  const northernSystems = [
    {
      icon: <Mountain className="w-8 h-8 text-orange-600" />,
      title: "Bedrock vs. Clay Soil Conditions",
      description: "We anchor into granite where possible, and when soil is unstable, our pier systems bridge deep to solid strata for unmatched stability."
    },
    {
      icon: <Snowflake className="w-8 h-8 text-orange-600" />,
      title: "Freeze–Thaw Cycles",
      description: "Our membranes and drains remain flexible to -40°C and beyond, resisting frost heave and expansion that damage ordinary foundations."
    },
    {
      icon: <CloudRain className="w-8 h-8 text-orange-600" />,
      title: "High Groundwater & Storm Events",
      description: "Lake-effect rainfall and high water tables require specialized waterproofing — our exterior systems manage both pressure and flow."
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      title: "Remote Access & Short Build Seasons",
      description: "Company-owned equipment and trained local crews allow us to mobilize quickly, completing projects efficiently across Northern distances."
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "Permit & Compliance Expertise",
      description: "Our administrative team manages every step of permits, engineering stamps, and inspections, ensuring full compliance and zero headaches for homeowners."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Foundation Repair & Waterproofing in Ontario & Manitoba | Groundhogs"
        description="Groundhogs delivers engineered foundation repair, waterproofing, and stabilization systems built for Northern Ontario & Manitoba's toughest conditions."
        keywords="foundation repair Ontario, waterproofing Manitoba, foundation repair Thunder Bay, basement waterproofing Sudbury, push pier installation Winnipeg, structural repair Ontario, interior waterproofing Thunder Bay"
      />

      {/* Schema Markup for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Groundhogs",
          "image": "https://groundhogs.ca/wp-content/themes/groundhogs/img/logo-footer.svg",
          "description": "Groundhogs delivers engineered foundation repair, waterproofing, and stabilization systems built for Northern Ontario & Manitoba's toughest conditions.",
          "brand": {
            "@type": "Brand",
            "name": "Groundhogs"
          },
          "serviceType": [
            "Foundation Repair",
            "Waterproofing",
            "Push Piers",
            "Structural Repair",
            "Exterior Waterproofing",
            "Interior Waterproofing",
            "Foundation Replacement",
            "Steel Post & Beam Systems"
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": "Thunder Bay",
              "containedIn": {
                "@type": "State",
                "name": "Ontario"
              }
            },
            {
              "@type": "City",
              "name": "Sudbury",
              "containedIn": {
                "@type": "State",
                "name": "Ontario"
              }
            },
            {
              "@type": "City",
              "name": "Winnipeg",
              "containedIn": {
                "@type": "State",
                "name": "Manitoba"
              }
            },
            {
              "@type": "State",
              "name": "Ontario"
            },
            {
              "@type": "State",
              "name": "Manitoba"
            }
          ],
          "telephone": "1-888-907-3777",
          "email": "hello@groundhogs.ca",
          "url": "https://groundhogs.ca",
          "priceRange": "$$"
        })}
      </script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Expert Foundation Repair & Waterproofing Across Ontario & Manitoba
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
              Systemized Foundation Repair and Waterproofing Solutions — Strength from the Ground Up
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              At Groundhogs, we deliver engineered foundation and waterproofing systems that redefine what homeowners can expect from the construction industry.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              From Thunder Bay to Sudbury and Winnipeg, we're known for precision, integrity, and long-lasting results — solving the deepest problems beneath your home.
            </p>
          </div>
        </div>
      </section>

      {/* Free Estimate CTA */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              📞 Request Your Free Estimate
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Upload drawings, permits, or site photos — our estimators will review your project and provide a detailed, transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto">
                <Link to="/contact" className="inline-flex items-center justify-center">
                  <Upload className="mr-2" size={20} />
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
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_635dfeb0-4b33-4d25-ac66-2b110aed98d6/artifacts/0fnmlefu_Screenshot%202025-10-30%20160555.png"
                alt="Groundhogs Service Areas Map - Thunder Bay, Sudbury, Winnipeg across Ontario and Manitoba"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Foundation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Systemized Foundation Solutions Built to Last
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-2">
                Our methods are standardized, our crews are trained to perfection, and our materials are chosen for performance, not shortcuts.
              </p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Every system we install is engineered to exceed building codes, protect your investment, and restore total peace of mind.
              </p>
            </div>

            <div className="space-y-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-6xl flex-shrink-0">{service.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-800 mb-2">Service Areas:</p>
                        <p className="text-sm text-gray-700">{service.serviceAreas}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Northern Homes Need Northern Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Why Northern Homes Need Northern Solutions
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Homes across Ontario and Manitoba face unique geological challenges — and we've built our systems specifically for them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {northernSystems.map((system, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{system.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{system.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {system.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Service Areas Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Proudly Serving Ontario and Manitoba
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Groundhogs provides foundation repair, exterior waterproofing, and structural stabilization services in:
            </p>
            <p className="text-xl font-semibold text-orange-600 mb-6">
              Thunder Bay, Sudbury, Winnipeg, and surrounding areas across Ontario and Manitoba.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're expanding through trusted partnerships and continuously training crews to uphold the Groundhogs Standard of Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Foundation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Groundhogs today for a free, no-obligation foundation assessment in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Link to="/contact">
                Get Free Estimate
              </Link>
            </Button>
            <a href="tel:1-888-907-3777" className="text-white text-lg font-semibold hover:text-gray-200 flex items-center">
              <Phone className="mr-2" size={20} />
              1-888-907-3777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
