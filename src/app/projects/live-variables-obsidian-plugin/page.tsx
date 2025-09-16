import type { Metadata } from "next";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Live Variables Obsidian Plugin",
  description: "Dynamic variables plugin for Obsidian with 5000+ downloads. Features code blocks, smart queries, and cross-vault synchronization.",
};

const projectData = {
  category: "Open Source Plugin",
  title: "Live Variables",
  subtitle: "Dynamic Variables System for Obsidian",
  description: "A powerful Obsidian plugin that revolutionizes note-taking with dynamic variables, smart queries, and real-time synchronization. Define variables once and reuse them everywhere with instant updates across your entire vault.",
  
  heroImage: {
    src: "/live-variables-banner.png", // You can add this image later
    alt: "Live Variables Obsidian Plugin Interface"
  },
  
  challenge: "Obsidian users struggled with maintaining consistency across notes when referencing the same information multiple times. Updating project names, dates, or other repeated data required manual changes in every location, leading to inconsistencies and time-consuming maintenance tasks. Users needed a way to define data once and have it automatically sync across their entire knowledge base.",
  
  solution: "Developed Live Variables Plugin that introduces a dynamic variable system allowing users to define variables in frontmatter and reference them throughout their vault. The plugin features a smart query engine, code block execution, custom JavaScript functions, and a visual form interface. Variables update in real-time across all references, eliminating manual maintenance and ensuring consistency.",
  
  results: [
    {
      metric: "5,000+ Downloads",
      description: "Active installations from Obsidian community marketplace"
    },
    {
      metric: "52 GitHub Stars",
      description: "Strong community engagement and appreciation"
    },
    {
      metric: "22 Releases",
      description: "Continuous development with regular updates and improvements"
    },
    {
      metric: "95.5% TypeScript",
      description: "Type-safe codebase ensuring reliability and maintainability"
    }
  ],
  
  features: [
    {
      title: "Dynamic Variables",
      description: "Define variables in frontmatter and watch them update instantly across your entire vault",
      icon: "🔄"
    },
    {
      title: "Smart Query Engine", 
      description: "Execute built-in functions, custom JavaScript queries, and data transformations",
      icon: "🧠"
    },
    {
      title: "Code Block Magic",
      description: "Transform data using executable code blocks with real-time results",
      icon: "💻"
    },
    {
      title: "Visual Form Interface",
      description: "Insert queries without coding using an intuitive visual interface",
      icon: "📝"
    },
    {
      title: "Inline Editing",
      description: "Edit existing variable references in-place without reinserting them",
      icon: "✏️"
    },
    {
      title: "Smart Highlighting",
      description: "Identify dynamic content with intelligent formatting-aware highlights",
      icon: "🔦"
    }
  ],
  
  techStack: {
    "Frontend": ["TypeScript", "CSS", "Obsidian API"],
    "Build Tools": ["ESBuild", "Node.js", "NPM"],
    "Development": ["JavaScript", "YAML", "Markdown"],
    "Architecture": ["Plugin System", "Event-Driven", "Real-time Updates"]
  },
  
  callToAction: {
    title: "Need a Custom Plugin?",
    titleGradientWord: "Plugin",
    description: "Inspired by our Live Variables plugin? We craft custom plugins and extensions for platforms like Obsidian, Chrome, VS Code, and more. Let's transform your unique ideas into powerful, community-loved tools.",
    primaryButtonText: "Discuss Your Plugin"
  }
};

export default function LiveVariablesPluginPage() {
  return <ProjectDetailPage projectData={projectData} />;
}