import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: "Foundation Repair",
      questions: [
        {
          q: "How do I know if I need foundation repair?",
          a: "Common signs include cracks in walls or floors, doors and windows that stick, uneven or sloping floors, water intrusion, and visible settling. If you notice any of these signs, it's best to get a professional assessment."
        },
        {
          q: "How long does foundation repair take?",
          a: "Most foundation repair projects take 1-5 days depending on the scope of work. Push pier installations typically take 1-2 days, while foundation wall reconstruction may take longer. We'll provide a detailed timeline with your estimate."
        },
        {
          q: "Will foundation repair damage my landscaping?",
          a: "We minimize disruption as much as possible. For exterior work, some excavation is necessary, but we carefully protect and restore landscaping. Interior pier systems can often avoid exterior work entirely."
        }
      ]
    },
    {
      category: "Waterproofing",
      questions: [
        {
          q: "What's the difference between interior and exterior waterproofing?",
          a: "Exterior waterproofing stops water before it reaches your foundation walls, while interior waterproofing manages water that has already entered. Exterior is more comprehensive but requires excavation. Interior is less invasive and often more cost-effective."
        },
        {
          q: "How long do waterproofing systems last?",
          a: "Our full perimeter exterior waterproofing systems come with 5-year transferable warranties. Most modern waterproofing systems built to minimum code should last 50+ years with proper maintenance. Ours are designed to last even longer and make maintenance even easier. Interior drainage systems are similarly designed for long-term durability. Sump pump lifespan varies based on water hardness and mineral content in your area — pumps handling high-mineral groundwater may require earlier replacement than those in softer water conditions."
        },
        {
          q: "Can waterproofing be done in winter?",
          a: "Our company is equipped to tackle both interior and exterior projects year-round as required. However, best practice is exterior season typically runs from March until December, and interior systems are usually installed from December until February."
        }
      ]
    },
    {
      category: "Process & Pricing",
      questions: [
        {
          q: "How much does foundation repair cost?",
          a: "Foundation repair pricing is highly subjective and varies significantly based on project scope, site conditions, and installation requirements. As a general guide: Crack repairs and smaller jobs typically run $3,000-$5,000. Foundation replacements usually cost $1,500-$2,000 per linear foot. Push pier systems often range from $3,000-$5,000 per pier depending on depth, access, and site variables. Exterior waterproofing can be $200-$500 per linear foot depending on excavation depth and drainage requirements. Interior waterproofing systems typically cost around $200 per linear foot. SmartJack post and beam systems generally run $4,000 per 10-foot span depending on beam size and load requirements. EverBrace wall restoration is often $1,000-$1,500 per linear foot based on wall condition and project complexity. Every project is unique — contact us for a free, detailed estimate tailored to your specific foundation needs."
        },
        {
          q: "Do you offer financing?",
          a: "Yes, in specific cases we offer in-house financing with specific terms and conditions. We also provide payment plans in select situations. Contact us to discuss available financing options and payment arrangements that may work for your project."
        },
        {
          q: "How long does it take to get an estimate?",
          a: "We offer fast virtual estimates to serve our customers more efficiently. Our estimators handle hundreds of inquiries every week and work diligently to provide quotes as quickly as possible. We've systemized our estimation process so effectively that even the most significant foundation failures can be accurately estimated virtually — trust us, we do this all the time. We also provide rapid virtual quotes for both interior and exterior waterproofing projects. Simply send us as much detail as possible along with photos of your foundation or waterproofing concerns, and you should receive a detailed estimate within a matter of hours or just a couple of days. For complex projects requiring on-site assessment, we'll let you know upfront."
        }
      ]
    },
    {
      category: "About Our Work",
      questions: [
        {
          q: "Are you licensed and insured?",
          a: "Yes, Groundhogs is fully licensed, insured, and bonded in all areas we serve. We carry comprehensive liability insurance and workers' compensation coverage."
        },
        {
          q: "Do you handle permits?",
          a: "Yes, we handle all permit applications and inspections. Our administrative team manages the entire process to ensure code compliance and zero headaches for you."
        },
        {
          q: "What areas do you serve?",
          a: "We serve Thunder Bay, Sudbury, Winnipeg, and surrounding communities throughout Ontario and Manitoba. Contact us to confirm service availability in your specific area."
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Resources & FAQ | Foundation Repair Guide | Groundhogs"
        description="Your guide to foundation repair and waterproofing. Get answers to common questions about foundation problems, repair processes, costs, and timelines."
        keywords="foundation repair FAQ, waterproofing questions, foundation repair guide, basement waterproofing information"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Homeowner Resources & FAQ
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your guide to understanding foundation repair and waterproofing
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">{category.category}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const faqIndex = `${catIndex}-${qIndex}`;
                    const isOpen = openFaq === faqIndex;
                    
                    return (
                      <Card key={qIndex} className="overflow-hidden">
                        <button
                          onClick={() => toggleFaq(faqIndex)}
                          className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Understanding Foundation Issues
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3>Common Foundation Problems in Northern Climates</h3>
              <p>
                Ontario and Manitoba homes face unique challenges due to extreme freeze-thaw cycles, expansive clay soils, and high water tables. Understanding these issues helps you recognize problems early and take action before they worsen.
              </p>
              
              <h3>When to Take Action</h3>
              <p>
                Foundation problems don't fix themselves — they only get worse over time. Early intervention is almost always more cost-effective than waiting. If you notice cracks, settling, or water intrusion, get a professional assessment as soon as possible.
              </p>
              
              <h3>What to Expect During Repair</h3>
              <p>
                Professional foundation repair follows a systematic process: assessment, engineering analysis, detailed estimate, proper permits, skilled installation, and thorough cleanup. At Groundhogs, we keep you informed at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to answer your questions and provide expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              <Link to="/contact" className="inline-flex items-center justify-center">
                Contact Us
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

export default Resources;