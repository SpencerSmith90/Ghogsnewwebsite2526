import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useApi } from '../hooks/useApi';
import { getServices, getMaterials, getProjects, getPropertyTypes, getDifferentiators, getTestimonials, getVideoReels } from '../services/api';
import * as LucideIcons from 'lucide-react';
import SEO from '../components/SEO';
import { ServiceCardSkeleton, ProjectCardSkeleton, TestimonialSkeleton } from '../components/SkeletonLoader';
import VideoReelsCarousel from '../components/VideoReelsCarousel';
import AnimatedCounter from '../components/AnimatedCounter';

// Keep hero content from mock for now
const heroContent = {
  title: 'LOCAL FOUNDATION SERVICES IN ONTARIO AND MANITOBA',
  subtitle: 'Foundation Experts You Can Trust',
  description: 'Grounded in experience, ready for any challenge under your home. Proudly serving Winnipeg, Thunder Bay, Sudbury, and beyond.',
  ctaText: 'Get a Free Estimate'
};

const Home = () => {
  const { data: services, loading: servicesLoading } = useApi(getServices);
  const { data: materials, loading: materialsLoading } = useApi(getMaterials);
  const { data: projects, loading: projectsLoading } = useApi(getProjects);
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://groundhogs.ca/wp-content/uploads/2025/07/4b3410535d681cf11935b4eae51e98393481c676-2048x1280.png.webp')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-orange-400 font-semibold">
              {heroContent.subtitle}
            </p>
            <p className="text-lg mb-8 text-gray-300">
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
                <AnimatedCounter end={500} suffix="+" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Core Foundation Repair Services We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your foundation needs
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
              {services && services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover-lift card-shine cursor-pointer flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Foundation repair service`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl min-h-[3.5rem] flex items-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between pt-0">
                  <CardDescription className="text-gray-600 mb-6 line-clamp-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center mt-auto"
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Materials We Use at Groundhogs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium materials for lasting foundation solutions
            </p>
          </div>

          {materialsLoading ? (
            <div className="text-center py-8 text-gray-500">Loading materials...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {materials && materials.map((material) => (
              <div
                key={material.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-sm font-medium text-gray-900">{material.name}</h3>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Successful Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've transformed foundations across Ontario and Manitoba
            </p>
          </div>

          {projectsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {[1, 2, 3].map((i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {projects && projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="overflow-hidden hover-lift card-shine flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="text-xs font-semibold text-orange-600 mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="text-lg min-h-[3.5rem] flex items-start">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
              </div>

              <div className="text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/projects">
                    View All Projects <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
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
              <Card key={type.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{type.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why Groundhogs is the trusted choice for foundation repair
            </p>
          </div>

          {diffsLoading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators && differentiators.map((item) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <div key={item.id} className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="text-orange-600" size={32} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
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
              <Card key={testimonial.id} className="hover-lift">
                <CardHeader>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
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