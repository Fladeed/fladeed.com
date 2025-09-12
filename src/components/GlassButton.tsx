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
  disabled?: boolean;
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
  disabled = false,
}) => {
  const baseClasses = 'glass glass-hover font-medium transition-all duration-300 border-0 cursor-pointer inline-flex items-center justify-center';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-adaptive font-semibold',
    secondary: 'bg-white/10 text-adaptive',
    ghost: 'bg-transparent text-adaptive border border-adaptive-muted',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const effectClasses = `
    ${shimmer && !disabled ? 'shimmer' : ''}
    ${glow && !disabled ? 'pulse-glow' : ''}
  `.trim();
  
  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${effectClasses}
    ${disabledClasses}
    ${className}
  `.trim();

  // Inline styles as fallback for production backdrop-filter issues
  const inlineStyles: React.CSSProperties = {
    position: 'relative',
    isolation: 'isolate',
    backdropFilter: 'blur(12px) saturate(180%)',
    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
  };

  const content = (
    <span className="relative z-10">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} style={inlineStyles}>
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={disabled ? undefined : onClick} 
      className={combinedClasses} 
      style={inlineStyles}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
