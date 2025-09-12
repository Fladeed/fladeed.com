'use client';

import React from 'react';
import { GlassCard } from '../GlassCard';
import { GlassButton } from '../GlassButton';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-center mb-12">
          <GlassCard variant="light" className="inline-block mb-6">
            <span className="text-adaptive-accent font-medium text-sm">✨ Welcome to the Future of Development</span>
          </GlassCard>          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Fladeed</span>
            <br />
            <span className="text-adaptive">Dev Agency</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-adaptive-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences with cutting-edge technology and fluid glass design. 
            Transform your ideas into stunning, performance-driven applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlassButton size="lg" variant="primary" shimmer glow>
              Start Your Project
            </GlassButton>
            <GlassButton size="lg" variant="ghost">
              View Our Work
            </GlassButton>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <GlassCard variant="default" interactive className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-adaptive-muted">Projects Delivered</div>
          </GlassCard>
          
          <GlassCard variant="default" interactive className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-adaptive-muted">Client Satisfaction</div>
          </GlassCard>
          
          <GlassCard variant="default" interactive className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-adaptive-muted">Years Experience</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
