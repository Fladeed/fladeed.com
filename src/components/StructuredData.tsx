'use client';

import { useEffect } from 'react';

export const StructuredData = () => {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://fladeed.com/#organization",
      "name": "Fladeed",
      "alternateName": "Fladeed Development Agency",
      "description": "Full-stack software development agency providing comprehensive solutions: web development, mobile apps, desktop software, cloud solutions, and enterprise systems for clients worldwide.",
      "url": "https://fladeed.com",
      "logo": "https://fladeed.com/logo-simple.svg",
      "image": "https://fladeed.com/og-image.png",
      "telephone": "+212521168411",
      "email": "contact@fladeed.com",
      "foundingDate": "2024",
      "numberOfEmployees": "3",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "addressCountry": "Morocco",
        "addressCountryCode": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5731",
        "longitude": "-7.5898"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Morocco"
        },
        {
          "@type": "City",
          "name": "Casablanca"
        },
        "Global"
      ],
      "serviceType": [
        "Software Development",
        "Web Development", 
        "Mobile App Development",
        "Desktop Application Development",
        "Cloud Solutions",
        "Enterprise Software",
        "API Development",
        "Database Design",
        "System Architecture",
        "DevOps Services",
        "UI/UX Design",
        "React Development",
        "Next.js Development",
        "Node.js Development",
        "Python Development",
        "TypeScript Development",
        "Full Stack Development",
        "Custom Software Development",
        "Software Consulting",
        "Microservices",
        "Software Maintenance"
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "MAD, USD, EUR",
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://linkedin.com/company/fladeed",
        "https://github.com/fladeed"
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://fladeed.com/#organization",
      "name": "Fladeed",
      "url": "https://fladeed.com",
      "logo": "https://fladeed.com/logo-simple.svg",
      "description": "Full-stack software development agency creating comprehensive solutions including web applications, mobile apps, desktop software, and cloud systems using cutting-edge technologies for clients worldwide.",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Hamza Ben Yazid",
          "jobTitle": "Frontend & UI/UX Specialist"
        },
        {
          "@type": "Person", 
          "name": "Mimoun Ghordou",
          "jobTitle": "Backend & SRE Specialist"
        },
        {
          "@type": "Person",
          "name": "Mohammed Bekraoui", 
          "jobTitle": "Backend & Database Specialist"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212521168411",
        "email": "contact@fladeed.com",
        "contactType": "customer service",
        "areaServed": "Global",
        "availableLanguage": ["English", "French", "Arabic"]
      }
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://fladeed.com/#website",
      "url": "https://fladeed.com",
      "name": "Fladeed - Web Development Agency",
      "description": "Professional web development services in Morocco",
      "publisher": {
        "@id": "https://fladeed.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://fladeed.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Professional web development, mobile app development, and UI/UX design services",
      "provider": {
        "@id": "https://fladeed.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Morocco"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Development",
              "description": "Custom React applications development"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js Development",
              "description": "High-performance Next.js applications"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Mobile App Development",
              "description": "Cross-platform mobile applications"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design", 
              "description": "Modern, user-centered design solutions"
            }
          }
        ]
      }
    };

    // Inject schemas
    const schemas = [localBusinessSchema, organizationSchema, websiteSchema, serviceSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      
      // Remove existing script if it exists
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};