'use client';

import React from 'react';
import { ProjectDetailPage } from '../../../components/ProjectDetailPage';

const RegressionMetricsDashboardProject: React.FC = () => {
  const projectData = {
    category: 'Software Development',
    title: 'Regression Metrics Dashboard',
    subtitle: 'for a Software Platform',
    description: 'A comprehensive dashboard solution that automated test data collection, provided visual analytics, and improved software test effectiveness by reducing build failures and enabling data-driven decision-making.',
    
    heroImage: {
      src: '/regression-metrics-dashboard.png',
      alt: 'Regression Metrics Dashboard'
    },
    
    challenge: 'The client needed a solution to improve software test effectiveness for their platform. Flaky tests were causing inconsistent results, reducing productivity, and making it difficult to make data-driven decisions. The platform lacked a centralized system to collect, visualize, and analyze regression test data, which hindered the team\'s ability to identify recurring issues and track test stability over time.',
    
    solution: 'We developed a Regression Metrics Dashboard to automate test data collection, visualize trends, and provide analytical insights. The solution included automated test data collection through Java and Gradle-based scripts integrated into the CI/CD pipeline, centralized storage in Oracle Autonomous Database, a comprehensive dashboard built with Oracle APEX for visual analytics, and seamless integration with existing build pipelines.',
    
    results: [
      {
        metric: '65%',
        description: 'reduction in build failures'
      },
      {
        metric: 'Significant',
        description: 'improvement in test effectiveness through flaky test identification'
      },
      {
        metric: 'Enhanced',
        description: 'team efficiency with automated data collection and visualization'
      }
    ],
    
    features: [
      {
        title: 'Automated Test Data Collection',
        description: 'Java and Gradle-based script integrated into CI/CD pipeline for automatic data collection at the end of each regression build.',
        icon: '🔄'
      },
      {
        title: 'Centralized Storage',
        description: 'Oracle Autonomous Database storage enabling consistent access to historical and real-time test data.',
        icon: '🗄️'
      },
      {
        title: 'Visual Analytics',
        description: 'Comprehensive charts and reports highlighting flaky tests, patterns, and tracking test stability over time.',
        icon: '📊'
      },
      {
        title: 'CI/CD Integration',
        description: 'Seamless integration into existing build pipeline providing continuous insights without manual intervention.',
        icon: '⚙️'
      },
      {
        title: 'Self-Deployment Capabilities',
        description: 'Easy management and extensibility features making it simple for clients to manage and extend the platform.',
        icon: '🚀'
      },
      {
        title: 'Data-Driven Insights',
        description: 'Actionable insights helping teams prioritize testing and maintenance tasks with historical and real-time metrics.',
        icon: '💡'
      }
    ],
    
    techStack: {
      frontend: ['Oracle APEX'],
      backend: ['Java', 'Gradle', 'CI/CD Pipeline Integration'],
      database: ['Oracle Autonomous Database'],
      devops: ['Automation Scripts', 'Cloud-based Deployment', 'Regression Build Integration'],
      tools: ['Bash Scripting']
    },
    
    callToAction: {
      title: 'Need a custom analytics dashboard?',
      titleGradientWord: 'analytics',
      description: 'This project demonstrates our expertise in building comprehensive analytics solutions that integrate seamlessly with existing workflows and provide actionable insights. We can help you build data-driven solutions for your platform too.',
      primaryButtonText: 'Discuss Your Analytics Needs'
    }
  };

  return <ProjectDetailPage projectData={projectData} />;
};

export default RegressionMetricsDashboardProject;