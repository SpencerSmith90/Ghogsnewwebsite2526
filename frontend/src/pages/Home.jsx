import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Zap, FileCheck, Award, Wrench, Droplets, Construction } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useApi } from '../hooks/useApi';
import { getServices, getMaterials, getPropertyTypes, getDifferentiators, getTestimonials, getVideoReels } from '../services/api';
import * as LucideIcons from 'lucide-react';
import SEO from '../components/SEO';
import { ServiceCardSkeleton, TestimonialSkeleton } from '../components/SkeletonLoader';
import VideoReelsCarousel from '../components/VideoReelsCarousel';
import AnimatedCounter from '../components/AnimatedCounter';

// Hero content
const heroContent = {
  title: 'Ontario & Manitoba\'s Most Trusted Foundation Specialists',
  subtitle: '',
  description: 'Groundhogs delivers trusted, engineered, long-term foundation solutions built on experience, precision, and pride. Serving Winnipeg, Thunder Bay, Sudbury and in-between.',
  ctaText: 'Get a Free Estimate'
};

const Home = () => {
  const { data: services, loading: servicesLoading } = useApi(getServices);
  const { data: materials, loading: materialsLoading } = useApi(getMaterials);
  const { data: propertyTypes, loading: typesLoading } = useApi(getPropertyTypes);
  const { data: differentiators, loading: diffsLoading } = useApi(getDifferentiators);
  const { data: testimonials, loading: testimonialsLoading } = useApi(getTestimonials);
  const { data: videoReels, loading: reelsLoading } = useApi(getVideoReels);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Groundhogs",
    "description": "Foundation Repair Experts in Ontario & Manitoba",
    "url": "https://groundhogs.ca",
    "telephone": "1-800-GROUNDHOGS",
    "email": "info@groundhogs.ca",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Ontario and Manitoba",
      "addressCountry": "CA"
    },
    "areaServed": ["Ontario", "Manitoba", "Winnipeg", "Thunder Bay", "Sudbury"],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Groundhogs - Foundation Repair Experts in Ontario & Manitoba"
        description="Professional foundation repair, waterproofing, and pier installation services. Serving Winnipeg, Thunder Bay, Sudbury, and surrounding areas."
        keywords="foundation repair Ontario, foundation repair Manitoba, waterproofing, push pier installation, foundation experts Winnipeg, Thunder Bay foundation repair"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 animate-gradient">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://customer-assets.emergentagent.com/job_groundhogs-seo/artifacts/g1ptxv1v_Groundhogs-6.jpeg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {heroContent.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {heroContent.description}
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 animate-pulse-slow hover:animate-none shadow-xl hover:shadow-2xl">
              <Link to="/contact" className="no-hover">
                {heroContent.ctaText} <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={2000} suffix="+" />
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-gray-600">Expert Technicians</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reels Section */}
      {videoReels && videoReels.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                See Our Work in Action
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Watch real projects and learn about our foundation repair process
              </p>
            </div>
            <VideoReelsCarousel reels={videoReels} />
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Core Foundation Services
            </h2>
            <p className="text-xl font-semibold text-orange-600 mb-6">
              Systemized Solutions. Built to Last.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
              Our reputation is built on precision, reliability, and results that stand the test of time.
              We specialize in Exterior Waterproofing and Foundation Repair & Replacement, serving homeowners across Ontario and Manitoba including Thunder Bay, Winnipeg, and Sudbury.
            </p>
          </div>

          {servicesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <ServiceCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services && services.map((service) => {
                const isParamount = service.slug === 'exterior-waterproofing';
                // Assign icons based on service slug
                const serviceIcons = {
                  'exterior-waterproofing': <Star className="w-8 h-8 text-orange-600" />,
                  'foundation-replacement': <Award className="w-8 h-8 text-orange-600" />,
                  'push-piers': <Wrench className="w-8 h-8 text-orange-600" />,
                  'interior-waterproofing': <Droplets className="w-8 h-8 text-orange-600" />,
                  'steel-post-beam': <Construction className="w-8 h-8 text-orange-600" />
                };
                const icon = serviceIcons[service.slug] || <Wrench className="w-8 h-8 text-orange-600" />;
                
                return (
              <Card key={service.id} className={`overflow-hidden hover-lift card-shine cursor-pointer flex flex-col h-full ${
                isParamount ? 'border-2 border-orange-500 shadow-xl relative' : ''
              }`}>
                {isParamount && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
                      Our Flagship Service
                    </div>
                  </div>
                )}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Foundation repair service`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className={`flex-grow ${isParamount ? 'bg-orange-50' : ''}`}>
                  <CardTitle className="text-xl min-h-[3.5rem] flex items-start">
                    <span className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">{icon}</span>
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className={`flex flex-col justify-between pt-0 ${isParamount ? 'bg-orange-50' : ''}`}>
                  <CardDescription className="text-gray-600 mb-6 line-clamp-5 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link
                    to={`/services#${service.slug}`}
                    className={`font-semibold inline-flex items-center mt-auto ${
                      isParamount ? 'text-orange-600 hover:text-orange-700 text-lg' : 'text-orange-600 hover:text-orange-700'
                    }`}
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* Materials/Systems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              ⚙️ Advanced Systems We Use at Groundhogs
            </h2>
            <p className="text-xl font-semibold text-orange-600 mb-6">
              Innovation. Precision. Proven Results.
            </p>
            <div className="max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed mb-6 space-y-3">
              <p>
                We're always pushing for better — smarter systems, stronger materials, and more efficient methods.
                Through our strategic partnerships, Groundhogs delivers industry-leading foundation and waterproofing systems that go beyond minimum building code standards.
              </p>
              <p>
                Every product we use is carefully selected for its long-term performance, engineering integrity, and proven results in Ontario and Manitoba's toughest conditions.
              </p>
            </div>
          </div>

          {materialsLoading ? (
            <div className="text-center py-8 text-gray-500">Loading systems...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {materials && materials.map((material) => (
                <Card
                  key={material.id}
                  className="bg-white hover:shadow-xl transition-shadow flex flex-col h-full"
                >
                  <div className="aspect-video overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={material.image}
                      alt={material.name}
                      loading="lazy"
                      className={`w-full h-full ${material.name === 'Push Pier & Pile Systems' ? 'object-cover' : 'object-contain'}`}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{material.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {material.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
              </div>

              {/* Closing Line */}
              <div className="text-center py-8 px-6">
                <p className="text-lg md:text-xl text-gray-700 font-medium max-w-4xl mx-auto">
                  Groundhogs combines engineering, innovation, and experience to deliver the most advanced foundation systems available in Canada — protecting homes for generations.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Property Types We Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for every property type
            </p>
          </div>

          {typesLoading ? (
            <div className="text-center py-8 text-gray-500">Loading property types...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyTypes && propertyTypes.map((type) => (
              <Card key={type.id} className="overflow-hidden hover-lift card-shine flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.type}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg min-h-[2rem] flex items-center">{type.type}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              What Makes Groundhogs Different
            </h2>
            <p className="text-xl font-semibold text-orange-600 mb-6">
              Trusted. Proven. Built to Last.
            </p>
            <div className="max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed mb-6 space-y-3">
              <p>
                We don't chase surface fixes, we solve root problems with precision and purpose.
              </p>
              <p>
                Groundhogs is redefining foundation repair across Ontario and Manitoba through smarter systems, disciplined execution, and a deep respect for every home we work under.
              </p>
            </div>
          </div>

          {/* Team at Work Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://customer-assets.emergentagent.com/job_635dfeb0-4b33-4d25-ac66-2b110aed98d6/artifacts/ncgkdha4_Groundhogs-2.jpeg"
                alt="Groundhogs team at work on foundation repair project"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://customer-assets.emergentagent.com/job_635dfeb0-4b33-4d25-ac66-2b110aed98d6/artifacts/9o4c00sv_Groundhogs-3.jpeg"
                alt="Professional foundation repair crew working"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {diffsLoading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators && differentiators.map((item, index) => {
                // Map icons to each differentiator
                const iconMap = {
                  0: <CheckCircle className="w-8 h-8 text-orange-600" />, // Root Cause
                  1: <Star className="w-8 h-8 text-orange-600" />, // Exclusive Systems
                  2: <Users className="w-8 h-8 text-orange-600" />, // Elite Tradespeople (need to import)
                  3: <Zap className="w-8 h-8 text-orange-600" />, // Systemized Efficiency (need to import)
                  4: <FileCheck className="w-8 h-8 text-orange-600" /> // Compliance (need to import)
                };
                
                return (
                <Card key={item.id} className="hover-lift flex flex-col h-full p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-orange-100 rounded-full p-4 mb-4">
                      {iconMap[index] || <CheckCircle className="w-8 h-8 text-orange-600" />}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    {item.tagline && (
                      <p className="text-base font-semibold text-gray-800 mb-3">
                        {item.tagline}
                      </p>
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 text-base leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                </Card>
              )})}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Satisfied Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          {testimonialsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <TestimonialSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials && testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift flex flex-col h-full">
                <CardHeader className="flex-grow">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-base italic line-clamp-5">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} from ${testimonial.location}`}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We proudly serve specific areas throughout Ontario and Manitoba including Winnipeg, Thunder Bay, and Sudbury.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_635dfeb0-4b33-4d25-ac66-2b110aed98d6/artifacts/0fnmlefu_Screenshot%202025-10-30%20160555.png"
                alt="Service Areas Map - Winnipeg, Thunder Bay, and Sudbury"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/service-areas">
                  Learn More About Our Service Areas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Stop Cracks and Settling Before They Get Worse
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Groundhogs for lasting foundation solutions. Get your free estimate today!
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover-lift">
            <Link to="/contact" className="no-hover">
              Contact Us Now <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;