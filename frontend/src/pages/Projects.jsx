import React, { useState } from 'react';
import { projects } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Successful Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            See how we've transformed foundations across Ontario and Manitoba
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

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-semibold text-orange-600 mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Want Results Like These?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Let's discuss your foundation repair project
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;