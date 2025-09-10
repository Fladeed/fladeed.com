'use client';

import React from 'react';
import Image from 'next/image';
import { GlassCard } from './GlassCard';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      'Web Development',
      'Mobile Apps',
      'UI/UX Design',
      'Cloud Solutions'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Contact'
    ],
    Resources: [
      'Blog',
      'Case Studies',
      'Documentation',
      'Support'
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'GitHub', icon: '🐱', href: '#' },
    { name: 'Dribbble', icon: '🏀', href: '#' }
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
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glass-hover transition-all duration-300"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
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
                      <a
                        href="#"
                        className="text-adaptive-muted hover:text-adaptive transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
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
