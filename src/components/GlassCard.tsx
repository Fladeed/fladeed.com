'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'default' | 'intense';
  interactive?: boolean;
  animated?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  interactive = false,
  animated = false,
}) => {
  const baseClasses = 'rounded-2xl p-6';
  
  const variantClasses = {
    light: 'glass-light',
    default: 'glass',
    intense: 'glass-intense',
  };
  
  const interactiveClasses = interactive ? 'glass-hover cursor-pointer' : '';
  const animatedClasses = animated ? 'float' : '';
  
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${interactiveClasses}
    ${animatedClasses}
    ${className}
  `.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};
