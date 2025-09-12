'use client';

import React from 'react';
import { ProjectDetailPage } from '../../../components/ProjectDetailPage';

const BackportManagementProject: React.FC = () => {
  const projectData = {
    category: 'Enterprise Solution',
    title: 'Backport Management',
    subtitle: 'Tool',
    description: 'A secure, full-stack web application that transformed manual backporting workflows into an automated, efficient process, delivering significant productivity gains for enterprise software development.',
    
    heroImage: {
      src: '/backport-managemnet-and-automation.png',
      alt: 'Backport Management Tool Dashboard'
    },
    
    challenge: 'The client needed a secure, efficient web application to streamline the backporting process (bringing fixes from higher JDK releases into lower ones). The existing workflow was highly manual, time-consuming, and error-prone, involving multiple tools (GitLab, Jira) and requiring significant engineering effort for each backport.',
    
    solution: 'We developed a full-stack internal web application that automated and simplified backport management. The system provides advanced reporting, seamless integrations, intelligent analysis engines, and automated workflows that transformed the entire development process.',
    
    results: [
      {
        metric: '40%',
        description: 'increase in backports completed by engineers'
      },
      {
        metric: '68%',
        description: 'of backports fully automated (clean patches)'
      },
      {
        metric: '100%',
        description: 'reduction in manual cross-platform coordination'
      }
    ],
    
    features: [
      {
        title: 'Advanced Reporting',
        description: 'Real-time dynamic charts and dashboards for tracking backport progress and productivity.',
        icon: '📊'
      },
      {
        title: 'Seamless Integrations',
        description: 'Secure, asynchronous integration with GitLab and Jira for smooth tracking and task management.',
        icon: '🔗'
      },
      {
        title: 'Backport Analysis Engine',
        description: 'Algorithms to analyze patches and suggest target releases for backports.',
        icon: '🔍'
      },
      {
        title: 'Automated Clean Backports',
        description: 'Intelligent automation for patches that could be safely applied without manual intervention.',
        icon: '⚡'
      },
      {
        title: 'Blockers Visualization',
        description: 'Tree-view system to highlight dependencies and blockers across releases.',
        icon: '🌳'
      },
      {
        title: 'Secure Async Synchronization',
        description: 'Fast, reliable synchronization across three systems with minimal latency.',
        icon: '🔄'
      }
    ],
    
    techStack: {
      frontend: ['Next.js', 'ApexCharts.js', 'Ant Design'],
      backend: ['Java (Spring Boot)', 'REST APIs', 'Asynchronous Processing', 'Maven'],
      integrations: ['GitLab API', 'Jira API'],
      infrastructure: ['Docker', 'Kubernetes', 'CI/CD pipelines'],
      database: ['PostgreSQL']
    },
    
    callToAction: {
      title: 'Interested in a similar solution?',
      titleGradientWord: 'solution',
      description: 'This project demonstrates our expertise in building enterprise-grade applications that solve complex workflow challenges. We can help you automate and optimize your development processes too.',
      primaryButtonText: 'Discuss Your Project'
    }
  };

  return <ProjectDetailPage projectData={projectData} />;
};

export default BackportManagementProject;
