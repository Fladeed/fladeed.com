'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';
import { ParticleBackground } from './ParticleBackground';

interface ProjectData {
  // Header data
  category: string;
  title: string;
  subtitle: string;
  description: string;
  
  // Hero image
  heroImage: {
    src: string;
    alt: string;
  };
  
  // Challenge & Solution
  challenge: string;
  solution: string;
  
  // Results/Metrics
  results: Array<{
    metric: string;
    description: string;
  }>;
  
  // Features/Contributions
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  // Tech Stack
  techStack: Record<string, string[]>;
  
  // Call to Action
  callToAction: {
    title: string;
    titleGradientWord?: string; // Optional word to highlight with gradient
    description: string;
    primaryButtonText: string;
  };
}

interface ProjectDetailPageProps {
  projectData: ProjectData;
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectData, slug }) => {
  const {
    category,
    title,
    subtitle,
    description,
    heroImage,
    challenge,
    solution,
    results,
    features,
    techStack,
    callToAction
  } = projectData;

  return (
    <div className="min-h-screen bg-adaptive text-adaptive relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/#portfolio">
              <GlassButton variant="ghost" size="sm" className="mb-6">
                ← Back to Portfolio
              </GlassButton>
            </Link>
            
            <div className="flex justify-center mb-6">
              <GlassCard variant="light" className="px-4 py-2">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-adaptive-accent animate-pulse"></div>
                  <span className="text-adaptive-accent font-semibold text-sm tracking-wide uppercase">
                    {category}
                  </span>
                </div>
              </GlassCard>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              {title} <span className="gradient-text">{subtitle}</span>
            </h1>
            
            <p className="text-xl text-adaptive-muted max-w-3xl mx-auto text-center">
              {description}
            </p>
          </div>
        </header>

        {/* Hero Image */}
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <GlassCard variant="default" className="overflow-hidden">
              {heroImage.src.startsWith('/') ? (
                <div className="relative w-full h-96 md:h-[600px]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center py-24 md:py-32">
                  <div className="text-8xl md:text-9xl">{heroImage.src}</div>
                </div>
              )}
            </GlassCard>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard variant="default">
              <h2 className="text-2xl font-bold mb-4 text-adaptive-accent">Challenge</h2>
              <p className="text-adaptive-muted leading-relaxed">
                {challenge}
              </p>
            </GlassCard>
            
            <GlassCard variant="default">
              <h2 className="text-2xl font-bold mb-4 text-adaptive-accent">Solution</h2>
              <p className="text-adaptive-muted leading-relaxed">
                {solution}
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Results */}
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Results</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <GlassCard key={index} variant="light" className="text-center" interactive>
                  <div className="text-4xl font-bold text-adaptive-accent mb-2">
                    {result.metric}
                  </div>
                  <p className="text-adaptive-muted text-sm">
                    {result.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key <span className="gradient-text">Features</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <GlassCard key={index} variant="default" interactive>
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-adaptive">
                    {feature.title}
                  </h3>
                  <p className="text-adaptive-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <GlassCard key={category} variant="default" interactive>
                  <h3 className="text-lg font-bold mb-4 text-adaptive-accent capitalize">
                    {category.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <div className="space-y-2">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-adaptive-accent"></div>
                        <span className="text-adaptive-muted text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard variant="default">
              <h2 className="text-3xl font-bold mb-6">
                {callToAction.titleGradientWord ? (
                  <>
                    {callToAction.title.replace(callToAction.titleGradientWord, '').trim()}{' '}
                    <span className="gradient-text">{callToAction.titleGradientWord}</span>
                    {callToAction.title.includes('?') ? '?' : ''}
                  </>
                ) : (
                  callToAction.title
                )}
              </h2>
              <p className="text-adaptive-muted mb-8 leading-relaxed">
                {callToAction.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <GlassButton size="lg" variant="primary" shimmer>
                    {callToAction.primaryButtonText}
                  </GlassButton>
                </Link>
                <Link href="/#portfolio">
                  <GlassButton size="lg" variant="ghost">
                    View More Projects
                  </GlassButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
};
