import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const blogPosts = [
    {
      slug: 'interior-waterproofing-systems',
      title: 'Interior Waterproofing Systems: When & Why They Work Best',
      excerpt: 'Learn when interior waterproofing is the right solution for your basement. Discover how interior systems control water, reduce humidity, and protect your home when exterior excavation isn\'t possible.',
      category: 'Waterproofing',
      date: 'November 3, 2025',
      author: 'Groundhogs Team',
      image: 'https://customer-assets.emergentagent.com/job_foundation-fix/artifacts/interior-waterproofing-system.jpg'
    },
    {
      slug: 'advanced-exterior-waterproofing-thunder-bay',
      title: 'Advanced Exterior Waterproofing Systems in Thunder Bay: How We Install 2x Faster',
      excerpt: 'Discover how Groundhogs completes exterior waterproofing projects in 3-5 days (not 7-10 days) using advanced systems, elite crews, and systemized processes.',
      category: 'Waterproofing',
      date: 'November 1, 2025',
      author: 'Groundhogs Team',
      image: 'https://customer-assets.emergentagent.com/job_foundation-fix/artifacts/gcc633o0_wp.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Foundation Repair Blog & Insights | Groundhogs Thunder Bay"
        description="Expert foundation repair tips, guides, and insights from Thunder Bay's longest-serving foundation company. Learn about waterproofing, foundation systems, and home protection."
        keywords="foundation repair blog, basement waterproofing tips, Thunder Bay foundation advice, waterproofing guides"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Foundation Repair Insights & Expert Tips
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Expert foundation repair guides from Thunder Bay's longest-serving foundation company
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center text-xs">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        Read Article <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="mt-16 text-center bg-gray-50 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Articles Coming Soon
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                We're preparing comprehensive foundation repair guides, maintenance tips, and expert insights. Check back soon for more articles about Thunder Bay foundation care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/resources">
                    View Resources & FAQ
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Get Free Inspection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
