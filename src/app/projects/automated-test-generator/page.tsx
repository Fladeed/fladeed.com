'use client';

import React from 'react';
import { ProjectDetailPage } from '../../../components/ProjectDetailPage';

const AutomatedTestGeneratorProject: React.FC = () => {
  const projectData = {
    category: 'Model-Driven Engineering',
    title: 'Automated Test Generator from',
    subtitle: 'Sequence Diagrams',
    description: 'Specialized tool that transforms UML sequence diagrams into executable tests using model-driven engineering, Eclipse Modeling Framework, and the Epsilon transformation framework to ensure complete test coverage.',
    
    heroImage: {
      src: '/automated-test-generator-from-sequence-diagram.png',
      alt: 'Automated Test Generator from Sequence Diagrams Dashboard'
    },
    
    challenge: 'Manually deriving test cases from sequence diagrams is time-consuming and prone to missing edge cases. The client needed a tool to automatically generate tests from UML sequence diagrams in MxGraph format, ensuring complete coverage of all possible scenarios.',
    
    solution: 'We developed a specialized Test Generator tool that transforms sequence diagrams into executable tests using Eclipse Modeling Framework (EMF) for model representation, Epsilon framework for model-to-model transformations, and automated generation capabilities for handling complex scenarios.',
    
    results: [
      {
        metric: 'Automated',
        description: 'generation of tests directly from design models'
      },
      {
        metric: 'Complete',
        description: 'coverage and consistency in testing scenarios'
      },
      {
        metric: 'Significant',
        description: 'time savings by eliminating manual test design'
      }
    ],
    
    features: [
      {
        title: 'Automated Test Generation',
        description: 'Generates test cases for all possible interaction scenarios in the sequence diagram automatically.',
        icon: '⚙️'
      },
      {
        title: 'Model-Driven Engineering',
        description: 'Uses Eclipse Modeling Framework (EMF) to represent models and ensure accurate parsing.',
        icon: '🏗️'
      },
      {
        title: 'Model Conversion',
        description: 'Leverages Epsilon framework for efficient and consistent model-to-model transformations.',
        icon: '🔄'
      },
      {
        title: 'Scalability',
        description: 'Capable of handling complex sequence diagrams with multiple scenarios and interactions.',
        icon: '📈'
      },
      {
        title: 'UML Integration',
        description: 'Direct integration with MxGraph sequence diagrams for seamless workflow integration.',
        icon: '🔗'
      },
      {
        title: 'Extensible Architecture',
        description: 'Reusable and extensible tool that can be adapted to different modeling workflows.',
        icon: '🧩'
      }
    ],
    
    techStack: {
      modeling: ['Eclipse Modeling Framework (EMF)', 'Epsilon', 'UML Diagrams'],
      languages: ['Java'],
      tools: ['Eclipse IDE', 'MxGraph'],
      frameworks: ['Next.js', 'Spring Boot'],
      concepts: ['Model-Driven Engineering', 'Compiler Design', 'Automation']
    },
    
    callToAction: {
      title: 'Need model-driven engineering solutions?',
      titleGradientWord: 'solutions',
      description: 'This project demonstrates our expertise in model-driven engineering, automated code generation, and bridging design and implementation. We can help you build tools that transform your design models into executable code, reducing manual effort while improving consistency and reliability.',
      primaryButtonText: 'Discuss Your Project'
    }
  };

  return <ProjectDetailPage projectData={projectData} />;
};

export default AutomatedTestGeneratorProject;
