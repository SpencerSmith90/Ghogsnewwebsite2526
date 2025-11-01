import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FileText, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Foundation Repair Blog & Resources | Groundhogs"
        description="Expert foundation repair tips, guides, and insights coming soon from Groundhogs. Thunder Bay's longest-serving foundation repair company sharing knowledge."
        keywords="foundation repair blog, basement waterproofing tips, foundation maintenance, Thunder Bay foundation advice"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Foundation Repair Insights & Expert Tips
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Coming Soon - Expert foundation repair guides from Thunder Bay's longest-serving foundation company
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Blog is Coming Soon
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We're preparing comprehensive foundation repair guides, maintenance tips, and expert insights to help Thunder Bay, Winnipeg, and Sudbury homeowners understand and protect their foundations.
              </p>
            </div>

            <Card className="p-8 bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Upcoming Topics:
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Thunder Bay Foundation Tips</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Foundation Repair Cost Guide 2025</li>
                      <li>• Dealing with Clay Soil Issues</li>
                      <li>• Winter Foundation Maintenance</li>
                      <li>• Signs You Need Foundation Repair</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Waterproofing Guides</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Interior vs Exterior Waterproofing</li>
                      <li>• Sump Pump Maintenance Tips</li>
                      <li>• Preventing Basement Flooding</li>
                      <li>• Weeping Tile Installation Guide</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Advanced Systems</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Push Pier vs Helical Pier Systems</li>
                      <li>• EverBrace™ Wall Restoration</li>
                      <li>• Concentric Pier Technology</li>
                      <li>• SmartJack® Floor Support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Regional Insights</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Manitoba Clay Soil Challenges</li>
                      <li>• Sudbury Mining Area Foundations</li>
                      <li>• Northern Climate Foundation Care</li>
                      <li>• Freeze-Thaw Cycle Protection</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Need Foundation Advice Now?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    While our blog is in development, our expert team is ready to answer your foundation questions and provide free inspections.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link to="/contact">
                        Get Free Inspection <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/resources">
                        View Resources & FAQ
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <p className="text-gray-600 mb-6">
                In the meantime, explore our comprehensive resources page for immediate answers to common foundation questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline">
                  <Link to="/thunder-bay-foundation-repair">
                    Thunder Bay Services
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/winnipeg-foundation-repair">
                    Winnipeg Services
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/sudbury-foundation-repair">
                    Sudbury Services
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

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Foundation Repair Insights
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Expert tips, guides, and insights about foundation repair and maintenance
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className={filter === category ? 'bg-orange-600 hover:bg-orange-700' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && filteredPosts[0].featured && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] md:aspect-auto">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-xs font-semibold text-orange-600 mb-2">
                      Featured Post
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      <User size={16} className="mr-2" />
                      <span>{filteredPosts[0].author.name}</span>
                    </div>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700 w-fit">
                      <Link to={`/blog/${filteredPosts[0].slug}`}>
                        Read Article <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-semibold text-orange-600 mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl hover:text-orange-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;