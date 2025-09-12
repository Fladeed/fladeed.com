'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '../GlassCard';
import { GlassButton } from '../GlassButton';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  slug?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <>
    <div className="text-center mb-4">
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-16">
        {project.image.startsWith('/') ? (
          <div className="w-16 h-16 relative">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="text-6xl leading-none">{project.image}</div>
        )}
      </div>
      <div className="text-xs text-adaptive-accent font-medium mb-2 uppercase tracking-wider">
        {project.category}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-adaptive mb-3">{project.title}</h3>
    <p className="text-adaptive-muted mb-4 leading-relaxed text-sm">{project.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech: string, techIndex: number) => (
        <span 
          key={techIndex} 
          className="text-xs bg-white/10 text-adaptive-muted px-2 py-1 rounded-lg"
        >
          {tech}
        </span>
      ))}
    </div>
    
    <div className="flex space-x-2 mt-auto">
      {project.slug ? (
        <>
          <GlassButton size="sm" variant="ghost" className="flex-1">
            View Details
          </GlassButton>
          <GlassButton size="sm" variant="primary" className="flex-1">
            Case Study
          </GlassButton>
        </>
      ) : (
        <>
          <GlassButton size="sm" variant="ghost" className="flex-1">
            View Details
          </GlassButton>
          <GlassButton size="sm" variant="primary" className="flex-1">
            Live Demo
          </GlassButton>
        </>
      )}
    </div>
  </>
);

export const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'Backport Management Tool',
      description: 'Secure web application that automated backporting workflow, achieving 40% increase in productivity and 68% automation rate.',
      tech: ['Next.js', 'Spring Boot', 'PostgreSQL', 'GitLab API', 'Jira API', 'Docker'],
      image: '/backport-managemnet-and-automation.png',
      category: 'Enterprise Solution',
      slug: 'backport-management-tool'
    },
    {
      title: 'Data Platform Performance Enhancement',
      description: 'Optimized large-scale data platform with query optimization, API migration, and database driver improvements for better performance and reliability.',
      tech: ['Java', 'Oracle Database', 'JDBC', 'SQL', 'C', 'Query Optimization'],
      image: '/data-platform-performance.png',
      category: 'Performance Optimization',
      slug: 'data-platform-performance'
    },
    {
      title: 'Automated PR Validation & Benchmarking Tool',
      description: 'Internal web application with GitHub integration for automated validation checks, performance benchmarking, and real-time reporting dashboards.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'GitHub API'],
      image: '/automatic-PR-validation.png',
      category: 'DevOps Automation',
      slug: 'automated-pr-validation'
    },
    {
      title: 'Automated Test Generator from Sequence Diagrams',
      description: 'Specialized tool that transforms UML sequence diagrams into executable tests using model-driven engineering and Eclipse Modeling Framework.',
      tech: ['Java', 'Eclipse EMF', 'Epsilon', 'UML Diagrams', 'Next.js', 'Spring Boot'],
      image: '/automated-test-generator-from-sequence-diagram.png',
      category: 'Model-Driven Engineering',
      slug: 'automated-test-generator'
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
            <div key={index} className="h-full">
              {project.slug ? (
                <Link href={`/projects/${project.slug}`}>
                  <GlassCard 
                    variant="default" 
                    interactive 
                    className="h-full group cursor-pointer"
                  >
                    <ProjectCard project={project} />
                  </GlassCard>
                </Link>
              ) : (
                <GlassCard 
                  variant="default" 
                  interactive 
                  className="h-full group cursor-pointer"
                >
                  <ProjectCard project={project} />
                </GlassCard>
              )}
            </div>
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
