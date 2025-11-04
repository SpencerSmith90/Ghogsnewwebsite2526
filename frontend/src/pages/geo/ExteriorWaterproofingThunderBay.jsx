import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { CheckCircle, Clock, Shield, Zap, Phone, ArrowRight, Droplets, Snowflake, ThermometerSnowflake } from 'lucide-react';
import SEO from '../../components/SEO';

const ExteriorWaterproofingThunderBay = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does exterior waterproofing cost in Thunder Bay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full house exterior waterproofing in Thunder Bay typically ranges from $20,000 to $60,000 depending on foundation perimeter, excavation depth, soil conditions, and accessibility. Factors like Thunder Bay's clay soils and frost depth requirements can influence final pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Groundhogs 3x faster than other waterproofing contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Groundhogs completes exterior waterproofing in 1-2 days versus the industry average of 4-6 days through systemized processes, 5 dedicated full-time crews, specialized equipment, and proprietary installation methods developed over 25+ years."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Thunder Bay foundations vulnerable to water damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thunder Bay's climate presents unique challenges: heavy clay soils that expand when wet and contract when dry, extreme temperature swings from -40°C to +30°C causing frost heave, high annual snowfall (300+ cm) creating spring melt pressure, and Lake Superior humidity. These conditions make robust exterior waterproofing with rigid insulation essential."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your Thunder Bay exterior waterproofing system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Groundhogs installation includes: full perimeter excavation to footer, rigid foam insulation (frost and energy protection), Delta-MS drainage membrane, new weeping tile system with proper pitch, clean stone backfill, and grading. All installations include our robust transferable warranty."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a virtual estimate for my Thunder Bay home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Upload photos of your foundation, basement, and any water damage signs. Our estimators provide detailed quotes within hours, not days. We've systemized our process so effectively that most projects can be accurately estimated virtually."
        }
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exterior Waterproofing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Groundhogs Ltd",
      "telephone": "1-888-907-3777",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "415 Fort William Road",
        "addressLocality": "Thunder Bay",
        "addressRegion": "ON",
        "postalCode": "P7B 2Z5"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Thunder Bay",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$20000-$60000",
      "description": "Full house exterior waterproofing with rigid insulation and lifetime protection"
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Exterior Waterproofing Thunder Bay – 3x Faster, Fully Insulated, Lifetime Protection | Groundhogs"
        description="Thunder Bay's fastest exterior waterproofing service. 3x faster installation (1-2 days), rigid insulation included, robust warranty. Handle clay soils & -40°C winters. $20k-$60k. Virtual estimates in hours."
        keywords="exterior waterproofing Thunder Bay, basement waterproofing Thunder Bay, foundation waterproofing Northwestern Ontario, fast waterproofing installation, rigid insulation waterproofing, clay soil waterproofing, frost protection foundation"
        structuredData={[structuredData, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚡ Thunder Bay Headquarters • 415 Fort William Road
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exterior Waterproofing Thunder Bay – 3x Faster, Fully Insulated, Lifetime Protection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Northwestern Ontario's most trusted waterproofing system. Built for clay soils, -40°C winters, and Lake Superior humidity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
                <a href="tel:1-888-907-3777">
                  <Phone className="mr-2" /> Call 1-888-907-3777
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-slate-900 text-lg px-8 py-6">
                <Link to="/contact">
                  Get Virtual Estimate <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400">📸 Upload photos → Get quote in hours, not days</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Zap className="text-orange-600 w-5 h-5" />
              <span>3x Faster (1-2 Days)</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="text-orange-600 w-5 h-5" />
              <span>Rigid Insulation Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-orange-600 w-5 h-5" />
              <span>Robust Transferable Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-orange-600 w-5 h-5" />
              <span>Fast Virtual Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thunder Bay Climate Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Why Thunder Bay Foundations Need Superior Waterproofing
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Thunder Bay's unique climate and geology create the perfect storm for foundation water damage. Here's why our system is engineered specifically for Northwestern Ontario.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Heavy Clay Soils</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Thunder Bay's clay-heavy soils are notorious for expansion and contraction. When saturated, clay expands and exerts immense lateral pressure on foundation walls. During dry periods, it contracts and creates gaps for water infiltration. Our rigid insulation layer protects against both pressure and moisture.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSnowflake className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Extreme Temperature Swings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From -40°C winter lows to +30°C summer highs, Thunder Bay experiences 70°C annual temperature variation. This creates severe frost heave cycles that crack foundations and compromise waterproofing. Our system includes rigid insulation rated for these extremes, protecting your foundation year-round.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Snowflake className="w-6 h-6 text-cyan-600" />
                  </div>
                  <CardTitle>Heavy Snowfall & Spring Melt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    With 300+ cm of annual snowfall, Thunder Bay's spring melt creates massive water volume around foundations. Lake Superior's humidity adds year-round moisture pressure. Our complete drainage system—weeping tile, Delta-MS membrane, and proper grading—handles this water load efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                The Result? Thunder Bay homes need robust, engineered waterproofing—not basic solutions.
              </p>
              <p className="text-gray-700">
                That's why we include rigid insulation, military-grade drainage membranes, and proper weeping tile systems on every installation. It's not optional—it's essential for Northwestern Ontario's demanding conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Thunder Bay Exterior Waterproofing Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Full house exterior waterproofing typically ranges from <strong className="text-orange-600">$20,000 to $60,000</strong>
            </p>
            <div className="bg-gray-50 rounded-xl p-8 text-left">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Pricing Factors:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Foundation perimeter:</strong> Larger homes cost more (typical home: 120-180 linear feet)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Excavation depth:</strong> Thunder Bay's frost line depth (5+ feet) and clay soil removal affect labor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Site accessibility:</strong> Tight lots or obstacles increase excavation complexity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Existing conditions:</strong> Deteriorated footings or drainage issues may require additional work</span>
                </li>
              </ul>
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                <p className="text-gray-800 font-semibold mb-2">✅ What's Always Included:</p>
                <p className="text-gray-700">Rigid insulation, Delta-MS membrane, new weeping tile, clean stone backfill, grading, and our robust transferable warranty. No hidden costs.</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">Get Your Thunder Bay Virtual Estimate <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our 3x Faster Installation Process
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Completed in 1-2 days (not 4-6 days) through systemized efficiency
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">1</div>
                  <CardTitle className="text-white">Excavate</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Full perimeter excavation to footer level. Our crews use specialized equipment to move Thunder Bay's heavy clay soils efficiently.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">2</div>
                  <CardTitle className="text-white">Rigid Insulation</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Install frost-rated rigid foam insulation. Protects against -40°C temperatures and provides energy savings year-round.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">3</div>
                  <CardTitle className="text-white">Delta-MS Membrane</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Apply high-density polyethylene drainage membrane with dimpled surface for superior water management and protection.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">4</div>
                  <CardTitle className="text-white">Weeping Tile</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Install new perforated drainage pipe at footer level with proper pitch. Channels water away from foundation efficiently.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">5</div>
                  <CardTitle className="text-white">Backfill</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Backfill with clean stone and engineered soil. Proper grading ensures surface water flows away from your home.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-orange-600 rounded-xl p-6">
                <p className="text-2xl font-bold mb-2">⚡ Industry Average: 4-6 Days</p>
                <p className="text-3xl font-bold text-white">Groundhogs: 1-2 Days</p>
                <p className="text-gray-200 mt-2">Same quality. 3x faster. That's the Groundhogs difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Virtual Estimates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Fast Virtual Estimates for Thunder Bay Homeowners
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No need to wait days for an in-person visit. Get your detailed waterproofing estimate in hours.
            </p>
            <Card className="text-left bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">How It Works:</h3>
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Upload Photos</p>
                      <p className="text-gray-600">Take photos of your foundation exterior, basement interior, and any visible water damage or cracks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Provide Details</p>
                      <p className="text-gray-600">Tell us your address, approximate foundation perimeter, and describe any concerns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Get Quote Fast</p>
                      <p className="text-gray-600">Our experienced estimators analyze your submission and provide a detailed quote within hours—not days</p>
                    </div>
                  </li>
                </ol>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <p className="text-gray-800 font-semibold">
                    💡 We've systemized our process so effectively that most Thunder Bay waterproofing projects can be accurately estimated virtually. You'll get transparent pricing, a detailed scope of work, and answers to all your questions—before we ever visit your property.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">Start Your Virtual Estimate Now <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Thunder Bay Exterior Waterproofing FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How much does exterior waterproofing cost in Thunder Bay?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full house exterior waterproofing in Thunder Bay typically ranges from <strong>$20,000 to $60,000</strong> depending on foundation perimeter, excavation depth, soil conditions, and accessibility. Factors like Thunder Bay's clay soils and frost depth requirements can influence final pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why is Groundhogs 3x faster than other waterproofing contractors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Groundhogs completes exterior waterproofing in 1-2 days versus the industry average of 4-6 days through systemized processes, 5 dedicated full-time crews, specialized equipment, and proprietary installation methods developed over 25+ years.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What makes Thunder Bay foundations vulnerable to water damage?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Thunder Bay's climate presents unique challenges: heavy clay soils that expand when wet and contract when dry, extreme temperature swings from -40°C to +30°C causing frost heave, high annual snowfall (300+ cm) creating spring melt pressure, and Lake Superior humidity. These conditions make robust exterior waterproofing with rigid insulation essential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's included in your Thunder Bay exterior waterproofing system?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every Groundhogs installation includes: full perimeter excavation to footer, rigid foam insulation (frost and energy protection), Delta-MS drainage membrane, new weeping tile system with proper pitch, clean stone backfill, and grading. All installations include our robust transferable warranty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I get a virtual estimate for my Thunder Bay home?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! Upload photos of your foundation, basement, and any water damage signs. Our estimators provide detailed quotes within hours, not days. We've systemized our process so effectively that most projects can be accurately estimated virtually.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Thunder Bay Home Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            25+ years serving Northwestern Ontario. 2000+ projects completed. 3x faster installation. Robust transferable warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8 py-6">
              <a href="tel:1-888-907-3777">
                <Phone className="mr-2" /> Call 1-888-907-3777
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6">
              <Link to="/contact">
                Get Virtual Estimate <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExteriorWaterproofingThunderBay;
