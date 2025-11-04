import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { CheckCircle, Clock, Shield, Zap, Phone, ArrowRight, Droplets, Snowflake, ThermometerSnowflake } from 'lucide-react';
import SEO from '../../components/SEO';

const ExteriorWaterproofingWinnipeg = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does exterior waterproofing cost in Winnipeg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full house exterior waterproofing in Winnipeg typically ranges from $20,000 to $60,000 depending on foundation perimeter, excavation depth, soil conditions, and accessibility. Winnipeg's expansive clay soils and high water table can influence final pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Why does Winnipeg have so many foundation water problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Winnipeg sits on highly expansive Winnipeg Clay, which swells dramatically when wet and shrinks when dry, exerting massive pressure on foundations. Spring flooding from Red and Assiniboine Rivers raises the water table. Extreme temperature swings from -40°C to +35°C cause severe frost heave. These conditions make professional exterior waterproofing essential."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Groundhogs 3x faster than other Winnipeg waterproofing contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Groundhogs completes exterior waterproofing in 1-2 days versus the industry average of 4-6 days through systemized processes, 5 dedicated full-time crews, specialized equipment for clay excavation, and proprietary installation methods."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your Winnipeg exterior waterproofing system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every installation includes: full perimeter excavation through clay to footer, rigid foam insulation (frost and clay pressure protection), Delta-MS drainage membrane, new weeping tile system with proper pitch, clean stone backfill, and grading. All installations include our robust transferable warranty."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a virtual estimate for my Winnipeg home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Upload photos of your foundation, basement, and any water damage signs. Our estimators provide detailed quotes within hours. We serve all of Winnipeg and surrounding Manitoba communities."
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
      "telephone": "1-888-907-3777"
    },
    "areaServed": {
      "@type": "City",
      "name": "Winnipeg",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Manitoba"
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
        title="Exterior Waterproofing Winnipeg – 3x Faster, Clay Soil Specialists, Lifetime Protection | Groundhogs"
        description="Winnipeg's fastest exterior waterproofing service. 3x faster installation (1-2 days). Specialists in expansive clay soils & spring flooding. Rigid insulation included. $20k-$60k. Virtual estimates in hours."
        keywords="exterior waterproofing Winnipeg, basement waterproofing Winnipeg, foundation waterproofing Manitoba, Winnipeg clay soil waterproofing, spring flooding foundation repair, frost protection Winnipeg"
        structuredData={[structuredData, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚡ Serving All of Winnipeg & Manitoba
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exterior Waterproofing Winnipeg – 3x Faster, Fully Insulated, Lifetime Protection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Manitoba's most trusted waterproofing system. Engineered for expansive clay soils, -40°C winters, and spring flooding.
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
              <span>Clay Soil Specialists</span>
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

      {/* Winnipeg Climate Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Why Winnipeg Foundations Face Unique Waterproofing Challenges
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Winnipeg's notorious expansive clay soils and extreme climate create some of Canada's most challenging foundation conditions. Here's why standard waterproofing fails and our system succeeds.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle>Expansive Winnipeg Clay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Winnipeg sits on some of North America's most expansive clay soils. When saturated, this clay can swell up to 10% in volume, exerting thousands of pounds of lateral pressure on foundation walls—enough to crack concrete and bow walls inward. When dry, it shrinks dramatically, creating gaps for water infiltration. Our rigid insulation creates a protective barrier against this pressure.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Spring Flooding & High Water Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Located at the confluence of the Red and Assiniboine Rivers, Winnipeg experiences frequent spring flooding. The water table rises dramatically during snowmelt, creating hydrostatic pressure that forces water through any foundation weakness. Our complete drainage system—Delta-MS membrane and weeping tile—manages this water load year after year.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSnowflake className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Extreme Temperature Extremes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Winnipeg's continental climate delivers brutal extremes: -40°C winter lows and +35°C summer highs—a staggering 75°C annual range. This creates severe frost heave cycles that crack foundations and freeze-thaw damage that deteriorates waterproofing. Our rigid insulation is rated for these extremes and protects your foundation 365 days a year.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                The Bottom Line: Winnipeg demands the most robust waterproofing systems in Canada.
              </p>
              <p className="text-gray-700">
                That's why we don't cut corners. Every Winnipeg installation includes rigid insulation, industrial-grade drainage membranes, properly pitched weeping tile, and protection engineered specifically for expansive clay soils. It's not optional—it's survival.
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
              Winnipeg Exterior Waterproofing Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Full house exterior waterproofing typically ranges from <strong className="text-orange-600">$20,000 to $60,000</strong>
            </p>
            <div className="bg-gray-50 rounded-xl p-8 text-left">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Pricing Factors:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Foundation perimeter:</strong> Larger homes require more materials and labor (typical: 120-180 linear feet)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Clay excavation depth:</strong> Winnipeg's frost line (6+ feet) and heavy clay removal require specialized equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Site accessibility:</strong> Mature trees, tight lots, or underground utilities affect excavation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Existing damage:</strong> Bowed walls, cracked footings, or deteriorated drainage may need additional repair</span>
                </li>
              </ul>
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                <p className="text-gray-800 font-semibold mb-2">✅ What's Always Included:</p>
                <p className="text-gray-700">Rigid insulation, Delta-MS membrane, new weeping tile, clean stone backfill, grading, and our robust transferable warranty. Transparent pricing with no surprises.</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">Get Your Winnipeg Virtual Estimate <ArrowRight className="ml-2" /></Link>
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
                  <p>Full perimeter excavation through Winnipeg's heavy clay to footer level using specialized equipment.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">2</div>
                  <CardTitle className="text-white">Rigid Insulation</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Install frost-rated rigid foam. Protects against -40°C frost heave and expansive clay pressure.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">3</div>
                  <CardTitle className="text-white">Delta-MS Membrane</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Apply high-density drainage membrane with dimples for superior water management.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">4</div>
                  <CardTitle className="text-white">Weeping Tile</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Install new perforated drainage pipe at footer with proper pitch to handle spring flooding.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">5</div>
                  <CardTitle className="text-white">Backfill</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Backfill with clean stone and engineered soil. Proper grading directs surface water away.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-orange-600 rounded-xl p-6">
                <p className="text-2xl font-bold mb-2">⚡ Industry Average: 4-6 Days</p>
                <p className="text-3xl font-bold text-white">Groundhogs: 1-2 Days</p>
                <p className="text-gray-200 mt-2">Same quality. 3x faster. That's the Groundhogs advantage.</p>
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
              Fast Virtual Estimates for Winnipeg Homeowners
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
                      <p className="text-gray-600">Take photos of your foundation exterior, basement interior, and any visible water damage, cracks, or bowing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Provide Details</p>
                      <p className="text-gray-600">Tell us your Winnipeg address, approximate foundation perimeter, and describe your concerns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Get Quote Fast</p>
                      <p className="text-gray-600">Our experienced estimators analyze your submission and provide a detailed, transparent quote within hours</p>
                    </div>
                  </li>
                </ol>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <p className="text-gray-800 font-semibold">
                    💡 We serve all of Winnipeg and surrounding Manitoba communities. Our estimators are familiar with every Winnipeg neighborhood's unique soil conditions and typical foundation challenges. You'll get accurate pricing tailored to your specific situation.
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
              Winnipeg Exterior Waterproofing FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How much does exterior waterproofing cost in Winnipeg?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full house exterior waterproofing in Winnipeg typically ranges from <strong>$20,000 to $60,000</strong> depending on foundation perimeter, excavation depth, soil conditions, and accessibility. Winnipeg's expansive clay soils and high water table can influence final pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why does Winnipeg have so many foundation water problems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Winnipeg sits on highly expansive Winnipeg Clay, which swells dramatically when wet and shrinks when dry, exerting massive pressure on foundations. Spring flooding from Red and Assiniboine Rivers raises the water table. Extreme temperature swings from -40°C to +35°C cause severe frost heave. These conditions make professional exterior waterproofing essential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What makes Groundhogs 3x faster than other Winnipeg waterproofing contractors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Groundhogs completes exterior waterproofing in 1-2 days versus the industry average of 4-6 days through systemized processes, 5 dedicated full-time crews, specialized equipment for clay excavation, and proprietary installation methods.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's included in your Winnipeg exterior waterproofing system?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every installation includes: full perimeter excavation through clay to footer, rigid foam insulation (frost and clay pressure protection), Delta-MS drainage membrane, new weeping tile system with proper pitch, clean stone backfill, and grading. All installations include our robust transferable warranty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I get a virtual estimate for my Winnipeg home?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! Upload photos of your foundation, basement, and any water damage signs. Our estimators provide detailed quotes within hours. We serve all of Winnipeg and surrounding Manitoba communities.
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
            Protect Your Winnipeg Home from Clay & Flooding
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Manitoba's trusted waterproofing experts. 25+ years experience. 2000+ projects. 3x faster installation. Robust transferable warranty.
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

export default ExteriorWaterproofingWinnipeg;
