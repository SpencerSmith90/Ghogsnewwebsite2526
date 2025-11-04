import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { CheckCircle, Clock, Shield, Zap, Phone, ArrowRight, Droplets, Mountain, ThermometerSnowflake } from 'lucide-react';
import SEO from '../../components/SEO';

const ExteriorWaterproofingSudbury = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does exterior waterproofing cost in Sudbury?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full house exterior waterproofing in Sudbury typically ranges from $20,000 to $60,000 depending on foundation perimeter, excavation depth, rock conditions, and accessibility. Sudbury's rocky terrain and mining area geology can influence final pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Why do Sudbury foundations need special waterproofing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sudbury's unique challenges include rocky, uneven terrain from historic mining that creates drainage issues, thin soil layers over bedrock that channel water directly to foundations, extreme frost depth in Northern Ontario (-50°C winter lows), and acidic groundwater from mining activity. These conditions demand robust waterproofing with rigid insulation."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Groundhogs 3x faster than other Sudbury contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Groundhogs completes exterior waterproofing in 1-2 days versus the industry average of 4-6 days through systemized processes, 5 dedicated full-time crews, specialized rock excavation equipment, and proprietary installation methods developed over 25+ years."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your Sudbury exterior waterproofing system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every installation includes: excavation to footer (often through rock), rigid foam insulation (extreme frost protection), Delta-MS drainage membrane, new weeping tile system with rock backfill, proper grading over uneven terrain, and our robust transferable warranty."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a virtual estimate for my Sudbury home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Upload photos of your foundation, basement, rock outcrops, and any water damage. Our estimators are familiar with Sudbury's unique terrain and provide detailed quotes within hours."
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
      "name": "Sudbury",
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
        title="Exterior Waterproofing Sudbury – 3x Faster, Rocky Terrain Specialists, Lifetime Protection | Groundhogs"
        description="Greater Sudbury's fastest exterior waterproofing service. 3x faster installation (1-2 days). Specialists in rocky terrain & mining area geology. Rigid insulation included. $20k-$60k. Virtual estimates in hours."
        keywords="exterior waterproofing Sudbury, basement waterproofing Sudbury, foundation waterproofing Northern Ontario, rocky terrain waterproofing, mining area foundation repair, frost protection Sudbury"
        structuredData={[structuredData, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚡ Serving Greater Sudbury & Northern Ontario
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exterior Waterproofing Sudbury – 3x Faster, Fully Insulated, Lifetime Protection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Northern Ontario's most trusted waterproofing system. Engineered for rocky terrain, mining area geology, and -50°C winters.
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
              <Mountain className="text-orange-600 w-5 h-5" />
              <span>Rocky Terrain Experts</span>
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

      {/* Sudbury Climate Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Why Sudbury Foundations Require Specialized Waterproofing
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Greater Sudbury's mining heritage and rocky terrain create unique foundation challenges unlike anywhere else in Ontario. Standard waterproofing systems fail here—our engineered approach succeeds.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-stone-600" />
                  </div>
                  <CardTitle>Rocky Mining Area Terrain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sudbury's landscape is dominated by exposed bedrock and thin soil layers—a legacy of centuries of mining. This rocky terrain creates uneven drainage patterns that channel water directly toward foundations. Excavation often encounters solid rock requiring specialized equipment. Our crews are equipped and experienced in working with Sudbury's challenging geology, including proper rock removal and drainage installation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Poor Drainage & Water Pooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Thin soil over bedrock means water can't percolate naturally—it pools on rock surfaces and flows along bedrock contours, often directly against foundations. Historic mining activity disrupted natural drainage patterns. Combined with heavy snowfall (300+ cm annually), spring melt creates concentrated water pressure. Our complete system—rigid insulation, Delta-MS membrane, and weeping tile—manages this challenging water load.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSnowflake className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Extreme Northern Ontario Winters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sudbury's continental climate delivers punishing winters with lows reaching -50°C and intense freeze-thaw cycles. Exposed bedrock conducts cold deep into the ground, increasing frost depth beyond typical Ontario standards. This creates severe frost heave that cracks foundations and compromises waterproofing. Our rigid insulation provides critical thermal protection rated for Northern Ontario's extreme conditions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                The Reality: Sudbury demands waterproofing systems engineered for mining area geology and Northern Ontario extremes.
              </p>
              <p className="text-gray-700">
                That's why every Sudbury installation includes rigid insulation for frost protection, industrial-grade Delta-MS membrane, properly installed weeping tile even in rocky conditions, and drainage design that works with Sudbury's unique terrain. It's specialized work—and we've mastered it over 25+ years.
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
              Sudbury Exterior Waterproofing Pricing
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
                  <span className="text-gray-700"><strong>Rock excavation:</strong> Sudbury's bedrock terrain may require specialized equipment and additional labor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Site terrain:</strong> Sloped lots, exposed bedrock, or challenging drainage patterns affect complexity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Existing conditions:</strong> Foundation damage, poor drainage, or mining-related soil issues may need correction</span>
                </li>
              </ul>
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                <p className="text-gray-800 font-semibold mb-2">✅ What's Always Included:</p>
                <p className="text-gray-700">Rigid insulation (Northern Ontario frost protection), Delta-MS membrane, new weeping tile with rock drainage, proper backfill and grading, and our robust transferable warranty. No hidden fees.</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">Get Your Sudbury Virtual Estimate <ArrowRight className="ml-2" /></Link>
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
              Completed in 1-2 days (not 4-6 days) even on rocky Sudbury terrain
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">1</div>
                  <CardTitle className="text-white">Excavate</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Full perimeter excavation to footer, often through rock. Our specialized equipment handles Sudbury's challenging terrain.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">2</div>
                  <CardTitle className="text-white">Rigid Insulation</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Install frost-rated rigid foam. Critical protection against -50°C Northern Ontario winters and frost heave.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">3</div>
                  <CardTitle className="text-white">Delta-MS Membrane</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Apply high-density drainage membrane. Manages water flowing over bedrock and uneven terrain.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">4</div>
                  <CardTitle className="text-white">Weeping Tile</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Install new drainage pipe at footer with proper pitch. Works effectively even in rocky conditions.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-2">5</div>
                  <CardTitle className="text-white">Backfill</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Backfill with clean stone and engineered materials. Grading designed for Sudbury's rocky terrain.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-orange-600 rounded-xl p-6">
                <p className="text-2xl font-bold mb-2">⚡ Industry Average: 4-6 Days</p>
                <p className="text-3xl font-bold text-white">Groundhogs: 1-2 Days</p>
                <p className="text-gray-200 mt-2">Even on rocky terrain. That's Sudbury expertise.</p>
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
              Fast Virtual Estimates for Sudbury Homeowners
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get your detailed waterproofing estimate in hours—even with rocky terrain and unique site conditions.
            </p>
            <Card className="text-left bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">How It Works:</h3>
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Upload Photos</p>
                      <p className="text-gray-600">Take photos of your foundation, basement, any exposed bedrock, rock outcrops, and visible water issues</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Provide Details</p>
                      <p className="text-gray-600">Tell us your Sudbury address, approximate foundation perimeter, terrain type, and describe your concerns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Get Quote Fast</p>
                      <p className="text-gray-600">Our Sudbury-experienced estimators analyze your unique site and provide accurate pricing within hours</p>
                    </div>
                  </li>
                </ol>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <p className="text-gray-800 font-semibold">
                    💡 We know Sudbury. Our estimators are familiar with the rocky terrain, mining area drainage challenges, and typical foundation issues in Greater Sudbury and Northern Ontario. You'll get transparent pricing based on real local experience.
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
              Sudbury Exterior Waterproofing FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How much does exterior waterproofing cost in Sudbury?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full house exterior waterproofing in Sudbury typically ranges from <strong>$20,000 to $60,000</strong> depending on foundation perimeter, excavation depth, rock conditions, and accessibility. Sudbury's rocky terrain and mining area geology can influence final pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why do Sudbury foundations need special waterproofing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sudbury's unique challenges include rocky, uneven terrain from historic mining that creates drainage issues, thin soil layers over bedrock that channel water directly to foundations, extreme frost depth in Northern Ontario (-50°C winter lows), and acidic groundwater from mining activity. These conditions demand robust waterproofing with rigid insulation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What makes Groundhogs 3x faster than other Sudbury contractors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Groundhogs completes exterior waterproofing in 1-2 days versus the industry average of 4-6 days through systemized processes, 5 dedicated full-time crews, specialized rock excavation equipment, and proprietary installation methods developed over 25+ years.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's included in your Sudbury exterior waterproofing system?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every installation includes: excavation to footer (often through rock), rigid foam insulation (extreme frost protection), Delta-MS drainage membrane, new weeping tile system with rock backfill, proper grading over uneven terrain, and our robust transferable warranty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I get a virtual estimate for my Sudbury home?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! Upload photos of your foundation, basement, rock outcrops, and any water damage. Our estimators are familiar with Sudbury's unique terrain and provide detailed quotes within hours.
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
            Protect Your Sudbury Home from Rock & Frost
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Northern Ontario's trusted waterproofing experts. 25+ years experience. 2000+ projects. Rocky terrain specialists. Robust transferable warranty.
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

export default ExteriorWaterproofingSudbury;
