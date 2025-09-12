'use client';

import React from 'react';
import { ProjectDetailPage } from '../../../components/ProjectDetailPage';

const DataPlatformPerformanceProject: React.FC = () => {
  const projectData = {
    category: 'Performance Optimization',
    title: 'Data Platform',
    subtitle: 'Performance Enhancement',
    description: 'Optimized a large-scale data platform experiencing performance and reliability challenges, delivering faster processing, efficient API operations, and stronger transaction handling.',
    
    heroImage: {
      src: '/data-platform-performance.png',
      alt: 'Data Platform Performance Enhancement'
    },
    
    challenge: 'A large-scale data platform was experiencing performance and reliability challenges. The system needed faster processing of complex queries, a more efficient API layer, and stronger transaction handling to meet growing business demands and support critical business operations and analytics.',
    
    solution: 'We implemented comprehensive optimizations including database query optimization for graph processing, API migration from SQL to C for critical operations, and Java database driver enhancements focused on improving transaction processing for more reliable handling of transactional workloads.',
    
    results: [
      {
        metric: 'Significant',
        description: 'reduction in query execution time'
      },
      {
        metric: 'Enhanced',
        description: 'performance for critical operations'
      },
      {
        metric: 'Improved',
        description: 'reliability of transactional workloads'
      }
    ],
    
    features: [
      {
        title: 'Database Query Optimization',
        description: 'Optimized queries used in graph processing to improve execution efficiency and reduce runtime.',
        icon: '🔍'
      },
      {
        title: 'API Migration',
        description: 'Migrated part of the API layer from SQL to C, enabling more efficient execution of critical operations.',
        icon: '⚡'
      },
      {
        title: 'Database Driver Enhancements',
        description: 'Worked on the Java database driver with a focus on improving transaction processing.',
        icon: '🔧'
      }
    ],
    
    techStack: {
      core: ['Java', 'Oracle Database', 'JDBC', 'SQL'],
      optimization: ['Query Optimization', 'C Programming', 'API Design'],
      focus: ['Transaction Processing', 'Graph Processing', 'Performance Tuning']
    },
    
    callToAction: {
      title: 'Need performance optimization?',
      titleGradientWord: 'optimization',
      description: 'This project showcases our expertise in optimizing large-scale data platforms and improving system performance. We can help you identify bottlenecks and implement solutions that deliver measurable improvements in speed, reliability, and scalability.',
      primaryButtonText: 'Discuss Your Project'
    }
  };

  return <ProjectDetailPage projectData={projectData} slug="data-platform-performance" />;
};

export default DataPlatformPerformanceProject;
