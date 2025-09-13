'use client';

import React from 'react';
import Image from 'next/image';
import { GlassCard } from './GlassCard';
import { openExternalLink, openEmailClient, scrollToSection } from '@/utils/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Web Development', action: () => scrollToSection('services') },
      { name: 'Mobile Apps', action: () => scrollToSection('services') },
      { name: 'UI/UX Design', action: () => scrollToSection('services') },
      { name: 'Cloud Solutions', action: () => scrollToSection('services') }
    ],
    Company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Our Team', action: () => scrollToSection('about') },
      { name: 'Portfolio', action: () => scrollToSection('portfolio') },
      { name: 'Contact', action: () => scrollToSection('contact') }
    ],
    Resources: [
      { name: 'Projects', action: () => scrollToSection('portfolio') },
      { name: 'Case Studies', action: () => scrollToSection('portfolio') },
      { name: 'Get Quote', action: () => scrollToSection('contact') },
      { name: 'Support', action: () => openEmailClient('contact@fladeed.com', 'Support Request') }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/fladeed' },
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/fladeed' },
    { name: 'Email', icon: '📧', href: 'mailto:contact@fladeed.com' },
    { name: 'Phone', icon: '📱', href: 'tel:+212521168411' }
  ];

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <GlassCard variant="light" className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/logo-simple.svg"
                    alt="Fladeed logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-adaptive font-bold text-xl">Fladeed</span>
              </div>
              <p className="text-adaptive-muted leading-relaxed mb-6 max-w-md">
                Crafting exceptional digital experiences with cutting-edge technology and modern design.
                Transform your ideas into stunning, performance-driven applications.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (social.href.startsWith('mailto:')) {
                        openEmailClient(social.href.replace('mailto:', ''), 'Hello from Fladeed Website');
                      } else if (social.href.startsWith('tel:')) {
                        window.location.href = social.href;
                      } else {
                        openExternalLink(social.href);
                      }
                    }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glass-hover transition-all duration-300 cursor-pointer"
                    title={social.name}
                    aria-label={`Visit our ${social.name}`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-adaptive font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={link.action}
                        className="text-adaptive-muted hover:text-adaptive transition-colors duration-300 text-sm text-left cursor-pointer"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-adaptive-muted text-sm mb-4 md:mb-0">
              © {currentYear} Fladeed. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-adaptive-muted hover:text-adaptive transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-adaptive-muted hover:text-adaptive transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-adaptive-muted hover:text-adaptive transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};
