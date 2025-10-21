import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

  const filteredPosts = filter === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === filter);

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