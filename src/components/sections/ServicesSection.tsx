'use client';

import React from 'react';
import { GlassCard } from '../GlassCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like Next.js, React, and TypeScript.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimized']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['React Native', 'iOS & Android', 'Cross-Platform', 'Native Performance']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that captivate users and drive engagement with modern aesthetics.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      features: ['AWS & Azure', 'Docker', 'CI/CD', 'Microservices']
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Lightning-fast applications optimized for speed, SEO, and user experience.',
      features: ['Speed Optimization', 'SEO Friendly', 'Core Web Vitals', 'Analytics']
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
      features: ['24/7 Support', 'Regular Updates', 'Security Patches', 'Performance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GlassCard variant="light" className="inline-block mb-6">
            <span className="text-adaptive-accent font-medium text-sm">Our Expertise</span>
          </GlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span> We Offer
          </h2>
          
          <p className="text-xl text-adaptive-muted max-w-3xl mx-auto">
            We provide comprehensive development services to bring your digital vision to life with exceptional quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard 
              key={index} 
              variant="default" 
              interactive 
              className="h-full"
              animated={index % 2 === 0}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-adaptive mb-3">{service.title}</h3>
              <p className="text-adaptive-muted mb-4 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-adaptive-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
