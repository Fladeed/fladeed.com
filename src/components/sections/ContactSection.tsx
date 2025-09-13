'use client';

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { GlassButton } from '../GlassButton';
import { openEmailClient, openPhoneDialer } from '@/utils/navigation';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        // If it's a configuration error, show a more helpful message
        if (result.error?.includes('No email service configured')) {
          // Fallback: open default email client
          const subject = `Project Inquiry from ${formData.name}`;
          const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\n\nMessage:\n${formData.message}`;
          openEmailClient('contact@fladeed.com', subject, body);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', company: '', message: '' });
          return;
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@fladeed.com',
      action: () => openEmailClient('contact@fladeed.com', 'Project Inquiry from Website')
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+212 521-168411',
      action: () => openPhoneDialer('+212521168411')
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Casablanca, Morocco',
      action: () => window.open('https://maps.google.com/?q=Casablanca,Morocco', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GlassCard variant="light" className="inline-block mb-6">
            <span className="text-adaptive-accent font-medium text-sm">Get In Touch</span>
          </GlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h2>
          
          <p className="text-xl text-adaptive-muted max-w-3xl mx-auto">
            Ready to transform your ideas into reality? We&apos;d love to hear about your project 
            and discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassCard variant="default" className="h-fit">
            <h3 className="text-2xl font-bold text-adaptive mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-adaptive-muted text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 text-adaptive placeholder-adaptive-muted focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-adaptive-muted text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 text-adaptive placeholder-adaptive-muted focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-adaptive-muted text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full glass rounded-lg px-4 py-3 text-adaptive placeholder-adaptive-muted focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="Your Company (Optional)"
                />
              </div>
              
              <div>
                <label className="block text-adaptive-muted text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full glass rounded-lg px-4 py-3 text-adaptive placeholder-adaptive-muted focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <GlassButton 
                variant="primary" 
                size="lg" 
                shimmer 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </GlassButton>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">
                    ✅ Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm mb-2">
                    ❌ Failed to send message. Please try one of these alternatives:
                  </p>
                  <div className="space-y-1 text-xs text-red-300">
                    <button 
                      onClick={() => openEmailClient('contact@fladeed.com', 'Project Inquiry from Website')}
                      className="block hover:text-red-200 underline cursor-pointer"
                    >
                      • Send email directly to contact@fladeed.com
                    </button>
                    <button 
                      onClick={() => openPhoneDialer('+212521168411')}
                      className="block hover:text-red-200 underline cursor-pointer"
                    >
                      • Call us at +212 521-168411
                    </button>
                  </div>
                </div>
              )}
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard variant="default" animated>
              <h3 className="text-2xl font-bold text-adaptive mb-6">Get in touch</h3>
              <p className="text-adaptive-muted leading-relaxed mb-6">
                We&apos;re here to help you create something extraordinary. Whether you have a specific 
                project in mind or just want to explore possibilities, we&apos;d love to chat.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <button
                    key={index}
                    onClick={info.action}
                    className="flex items-center space-x-4 p-4 glass-light rounded-lg hover:glass-hover transition-all duration-300 group w-full text-left cursor-pointer"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="text-adaptive-muted text-sm">{info.title}</div>
                      <div className="text-adaptive font-medium group-hover:text-adaptive-accent transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </GlassCard>

            <GlassCard variant="light">
              <h4 className="text-lg font-bold text-adaptive mb-4">Why Choose Fladeed?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-adaptive-muted text-sm">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-adaptive-muted text-sm">Free consultation and project estimation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-adaptive-muted text-sm">Transparent communication throughout</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-adaptive-muted text-sm">Ongoing support and maintenance</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
