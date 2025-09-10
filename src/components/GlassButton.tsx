'use client';

import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  shimmer?: boolean;
  glow?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  shimmer = false,
  glow = false,
}) => {
  const baseClasses = 'glass glass-hover font-medium transition-all duration-300 border-0 cursor-pointer inline-flex items-center justify-center';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white',
    secondary: 'bg-white/10 text-white',
    ghost: 'bg-transparent text-white border border-white/20',
  };
  
  const effectClasses = `
    ${shimmer ? 'shimmer' : ''}
    ${glow ? 'pulse-glow' : ''}
  `.trim();
  
  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${effectClasses}
    ${className}
  `.trim();

  const content = (
    <span className="relative z-10">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};
