'use client';

import React from 'react';
import { ProjectDetailPage } from '../../../components/ProjectDetailPage';

const RSIngenierieProject: React.FC = () => {
  const projectData = {
    category: 'Web Development',
    title: 'Landing Page for',
    subtitle: 'RS Ingénierie',
    description: 'A professional, responsive landing page designed to modernize the online presence of RS Ingénierie, an engineering company specializing in structural diagnostics and technical studies.',
    
    heroImage: {
      src: '/rs-ingenierie-landing-page.png',
      alt: 'RS Ingénierie Landing Page'
    },
    
    challenge: 'The client needed a professional landing page to modernize their online presence and generate more leads. Their existing digital presence lacked clarity, accessibility, and local SEO optimization. They wanted a clear, modern design that inspires trust, a simple but effective way for prospects to contact them, content structured to highlight technical services without overwhelming non-specialist visitors, and a site optimized for both mobile performance and local visibility.',
    
    solution: 'We designed and developed a responsive landing page tailored to RS Ingénierie\'s goals. The new site includes clear service presentation with structured sections that simplify complex technical services for prospects, a conversion-optimized contact form strategically placed with minimal fields and strong CTAs, mobile-first design ensuring smooth navigation on all devices, performance optimization with fast loading times, and SEO enhancements with local SEO optimizations.',
    
    results: [
      {
        metric: 'First',
        description: 'online presence established for RS Ingénierie'
      },
      {
        metric: 'New',
        description: 'lead generation channel through dedicated contact form'
      },
      {
        metric: 'Future',
        description: 'scalability foundation for expansion opportunities'
      }
    ],
    
    features: [
      {
        title: 'Clear Service Presentation',
        description: 'Structured sections that simplify complex technical services for prospects and non-specialist visitors.',
        icon: '🏗️'
      },
      {
        title: 'Conversion-Optimized Contact Form',
        description: 'Strategically placed form with minimal fields and strong CTAs to encourage inquiries.',
        icon: '📋'
      },
      {
        title: 'Mobile-First Design',
        description: 'Fully responsive design ensuring smooth navigation on all devices and screen sizes.',
        icon: '📱'
      },
      {
        title: 'Performance Optimization',
        description: 'Fast loading times through asset compression and optimized code implementation.',
        icon: '⚡'
      },
      {
        title: 'SEO Enhancements',
        description: 'Local SEO optimizations including metadata, location mentions, and alt tags for improved discoverability.',
        icon: '🔍'
      },
      {
        title: 'Professional Design',
        description: 'Modern design that inspires trust and aligns with the client\'s brand identity.',
        icon: '🎨'
      }
    ],
    
    techStack: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      design: ['Figma', 'UI/UX Prototyping', 'Responsive Design'],
      optimization: ['SEO Optimization', 'Local SEO', 'Google Lighthouse'],
      hosting: ['Hostinger']
    },
    
    callToAction: {
      title: 'Need a professional landing page?',
      titleGradientWord: 'professional',
      description: 'This project demonstrates our expertise in creating modern, conversion-optimized landing pages that establish credibility and generate leads. We can help you build a strong online presence too.',
      primaryButtonText: 'Start Your Project'
    }
  };

  return <ProjectDetailPage projectData={projectData} />;
};

export default RSIngenierieProject;