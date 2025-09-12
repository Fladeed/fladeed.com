'use client';

import React from 'react';
import { ProjectDetailPage } from '../../../components/ProjectDetailPage';

const AutomatedPRValidationProject: React.FC = () => {
  const projectData = {
    category: 'DevOps Automation',
    title: 'Automated PR Validation &',
    subtitle: 'Benchmarking Tool',
    description: 'Internal web-based application that integrates seamlessly with GitHub to perform automated validation checks, performance benchmarking, and provide real-time reporting dashboards for maintaining consistent quality standards.',
    
    heroImage: {
      src: '/automatic-PR-validation.png',
      alt: 'Automated PR Validation & Benchmarking Tool Dashboard'
    },
    
    challenge: 'Our client needed a way to enforce consistent validation and performance standards across multiple GitHub repositories. Manual reviews were time-consuming and often inconsistent, making it hard to maintain quality and provide stakeholders with actionable insights.',
    
    solution: 'We built an internal web-based application that integrates seamlessly with GitHub via its API to perform automated validation checks, real-time reporting, performance benchmarking, and secure GitHub integration with asynchronous synchronization ensuring minimal overhead for developers.',
    
    results: [
      {
        metric: '50%',
        description: 'reduction in manual PR review time'
      },
      {
        metric: '35%',
        description: 'increase in early detection of performance regressions'
      },
      {
        metric: '100%',
        description: 'seamless developer adoption with GitHub integration'
      }
    ],
    
    features: [
      {
        title: 'Automated Validation Checks',
        description: 'Runs comprehensive rule-based checks for every pull request to ensure code quality standards.',
        icon: '✅'
      },
      {
        title: 'Reporting Dashboard',
        description: 'Real-time reports on code quality, validation outcomes, and trends with dynamic charts.',
        icon: '📊'
      },
      {
        title: 'Performance Benchmarking',
        description: 'Automated tests to measure performance impacts of each PR for informed decision-making.',
        icon: '⚡'
      },
      {
        title: 'Secure GitHub Integration',
        description: 'Asynchronous and secure synchronization with GitHub ensuring minimal developer overhead.',
        icon: '🔗'
      },
      {
        title: 'Data-Driven Insights',
        description: 'Clear, actionable insights for stakeholders to make informed decisions about code changes.',
        icon: '📈'
      },
      {
        title: 'Multi-Repository Support',
        description: 'Enforce consistent standards across multiple GitHub repositories from a single dashboard.',
        icon: '🔄'
      }
    ],
    
    techStack: {
      backend: ['Java', 'Spring Boot', 'API Integration'],
      frontend: ['React', 'Next.js', 'TypeScript'],
      database: ['PostgreSQL'],
      devops: ['Docker', 'Kubernetes', 'Ansible'],
      cloud: ['AWS Application', 'Cloud Application'],
      integration: ['GitHub API', 'Unix Shell', 'Automation']
    },
    
    callToAction: {
      title: 'Need automated validation for your repositories?',
      titleGradientWord: 'validation',
      description: 'This project showcases our expertise in building DevOps automation tools that integrate with popular platforms like GitHub. We can help you streamline your development workflow and maintain consistent quality standards across your projects.',
      primaryButtonText: 'Discuss Your Project'
    }
  };

  return <ProjectDetailPage projectData={projectData} />;
};

export default AutomatedPRValidationProject;
