'use client';

import React from 'react';
import { GlassCard } from '../GlassCard';

export const AboutSection: React.FC = () => {
  const team = [
    {
      name: 'Hamza Ben Yazid',
      role: 'Frontend & UI/UX Specialist | SRE & DevOps',
      expertise: 'React, mobile, user-centered design, CI/CD pipelines',
      avatar: '👨‍🎨'
    },
    {
      name: 'Mimoun Ghordou',
      role: 'Backend & SRE Specialist',
      expertise: 'Scalable systems, reliability engineering, automation',
      avatar: '👨‍💻'
    },
    {
      name: 'Mohammed Bekraoui',
      role: 'Backend & Database Specialist',
      expertise: 'Data modeling, optimization, PostgreSQL, SQL/NoSQL',
      avatar: '👨‍💼'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Every pixel matters, every interaction is crafted with attention to detail.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Lightning-fast applications that deliver exceptional user experiences.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Working closely with clients to bring their vision to life.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GlassCard variant="light" className="inline-block mb-6">
            <span className="text-adaptive-accent font-medium text-sm">About Us</span>
          </GlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">Fladeed</span>
          </h2>
          
          <p className="text-xl text-adaptive-muted max-w-3xl mx-auto mb-12">
            We are a passionate team of developers and designers who believe in creating digital experiences 
            that are not just functional, but truly beautiful and engaging.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <GlassCard variant="default" animated>
            <h3 className="text-2xl font-bold text-adaptive mb-4">Our Story</h3>
            <p className="text-adaptive-muted leading-relaxed mb-4">
              Founded in 2024, Fladeed started with a simple mission: to bridge the gap between 
              stunning design and exceptional functionality. We believe that great software should 
              be both powerful and beautiful.
            </p>
            <p className="text-adaptive-muted leading-relaxed">
              Today, we&apos;re proud to have delivered over 50 successful projects, helping businesses 
              of all sizes achieve their digital goals with cutting-edge technology and innovative design.
            </p>
          </GlassCard>

          <GlassCard variant="default">
            <h3 className="text-2xl font-bold text-adaptive mb-4">Our Mission</h3>
            <p className="text-adaptive-muted leading-relaxed mb-4">
              To empower businesses with digital solutions that combine aesthetic excellence with 
              technical innovation. We strive to create applications that users love to interact with.
            </p>
            <p className="text-adaptive-muted leading-relaxed">
              Every project is an opportunity to push creative boundaries while delivering measurable 
              results for our clients.
            </p>
          </GlassCard>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-adaptive mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard 
                key={index} 
                variant="light" 
                interactive 
                className="text-center"
                animated={index % 2 === 0}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-adaptive mb-3">{value.title}</h4>
                <p className="text-adaptive-muted text-sm leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-adaptive mb-8">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <GlassCard 
                key={index} 
                variant="default" 
                interactive 
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h4 className="text-xl font-bold text-adaptive mb-2">{member.name}</h4>
                <p className="text-adaptive-accent font-medium mb-2">{member.role}</p>
                <p className="text-adaptive-muted text-sm">{member.expertise}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
