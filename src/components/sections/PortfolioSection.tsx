'use client';

import React from 'react';
import { GlassCard } from '../GlassCard';
import { GlassButton } from '../GlassButton';

export const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with glass morphism design and seamless checkout flow.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      image: '🛍️',
      category: 'Web Development'
    },
    {
      title: 'Finance Dashboard',
      description: 'Real-time analytics dashboard with beautiful glass components and data visualization.',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '📊',
      category: 'Dashboard'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and glass UI.',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Biometrics'],
      image: '🏦',
      category: 'Mobile App'
    },
    {
      title: 'SaaS Platform',
      description: 'Multi-tenant SaaS platform with advanced user management and analytics.',
      tech: ['Next.js', 'Prisma', 'Vercel', 'Stripe'],
      image: '⚡',
      category: 'SaaS'
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio website with stunning animations and glass morphism effects.',
      tech: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      image: '🎨',
      category: 'Portfolio'
    },
    {
      title: 'Learning Platform',
      description: 'Interactive learning platform with video streaming and progress tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '📚',
      category: 'Education'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GlassCard variant="light" className="inline-block mb-6">
            <span className="text-adaptive-accent font-medium text-sm">Our Work</span>
          </GlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-xl text-adaptive-muted max-w-3xl mx-auto">
            Discover our latest projects showcasing cutting-edge technology and beautiful design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <GlassCard 
              key={index} 
              variant="default" 
              interactive 
              className="h-full group cursor-pointer"
            >
              <div className="text-center mb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="text-xs text-adaptive-accent font-medium mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-adaptive mb-3">{project.title}</h3>
              <p className="text-adaptive-muted mb-4 leading-relaxed text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-white/10 text-adaptive-muted px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-2 mt-auto">
                <GlassButton size="sm" variant="ghost" className="flex-1">
                  View Details
                </GlassButton>
                <GlassButton size="sm" variant="primary" className="flex-1">
                  Live Demo
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <GlassButton size="lg" variant="primary" shimmer>
            View All Projects
          </GlassButton>
        </div>
      </div>
    </section>
  );
};
