import type { Metadata } from "next";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";

export const metadata: Metadata = {
  title: "GitLab Enhancement Chrome Extension",
  description: "Professional Chrome extension for GitLab enhancement with background processing, API integration, and productivity features for development teams.",
};

const projectData = {
  category: "Browser Extension",
  title: "GitLab Enhancement Extension",
  subtitle: "Chrome Extension for Developer Productivity",
  description: "A sophisticated Chrome extension that enhances GitLab with custom features for a specific development team's workflow. Includes background processing, API integrations, and intelligent analysis tools to automate repetitive tasks and streamline their daily development processes.",
  
  heroImage: {
    src: "/gitlab-extension-*.png", // You can add this image later
    alt: "GitLab Enhancement Chrome Extension Interface"
  },
  
  challenge: "A specific development team using GitLab faced repetitive manual tasks when analyzing commits, tracking related issues, and managing backports across releases. Their workflow involved frequent navigation between different systems and lacked contextual information, which slowed down their development process and increased the risk of missing critical dependencies.",
  
  solution: "Built a custom Chrome extension with background processing capabilities that seamlessly integrates with GitLab to address the team's specific pain points. The extension provides intelligent navigation, automated analysis tools, and real-time data fetching tailored to their workflow. Features include smart linking, backport analysis, and cross-release tracking with a clean, intuitive interface designed for their daily tasks.",
  
  results: [
    {
      metric: "Background Processing",
      description: "Seamless API calls and data processing without blocking user interface"
    },
    {
      metric: "Real-time Analysis",
      description: "Instant backport conflict detection and dependency analysis"
    },
    {
      metric: "Smart Navigation",
      description: "Automated linking between commits, issues, and release branches"
    },
    {
      metric: "MVC Architecture",
      description: "Clean separation of concerns with modular component design"
    }
  ],
  
  features: [
    {
      title: "Background API Integration",
      description: "Seamless API calls and data processing using Chrome extension background scripts",
      icon: "🔄"
    },
    {
      title: "Smart Issue Navigation", 
      description: "Automatic detection and linking to related issue tracking tickets from commits",
      icon: "🎯"
    },
    {
      title: "Cross-Release Tracking",
      description: "Intelligent search across multiple releases to find related commits and changes",
      icon: "🔗"
    },
    {
      title: "Backport Analysis",
      description: "Advanced file history comparison and dependency analysis for safe backporting",
      icon: "🔍"
    },
    {
      title: "Conflict Detection",
      description: "Real-time analysis using diff algorithms to identify potential merge conflicts",
      icon: "⚠️"
    },
    {
      title: "Modular Architecture",
      description: "Clean MVC-inspired design with separated view, service, and business logic layers",
      icon: "🏗️"
    }
  ],
  
  techStack: {
    "Frontend": ["JavaScript", "Chrome Extension APIs", "DOM Manipulation"],
    "Architecture": ["MVC Pattern", "Modular Components", "Service Layer"],
    "Processing": ["Background Scripts", "API Integration", "Diff Algorithms"],
    "Tools": ["Chrome DevTools", "GitLab API", "Third-party Libraries"]
  },
  
  callToAction: {
    title: "Need a Browser Extension?",
    titleGradientWord: "Extension",
    description: "Looking to enhance your team's productivity with a custom browser extension? We build powerful Chrome extensions with background processing, API integrations, and seamless user experiences.",
    primaryButtonText: "Discuss Your Extension"
  }
};

export default function GitLabExtensionPage() {
  return <ProjectDetailPage projectData={projectData} />;
}