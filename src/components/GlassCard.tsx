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

  // Inline styles as fallback for production backdrop-filter issues
  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      position: 'relative',
      isolation: 'isolate',
    };

    switch (variant) {
      case 'light':
        return {
          ...baseStyles,
          backdropFilter: 'blur(8px) saturate(150%)',
          WebkitBackdropFilter: 'blur(8px) saturate(150%)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        };
      case 'intense':
        return {
          ...baseStyles,
          backdropFilter: 'blur(20px) saturate(200%)',
          WebkitBackdropFilter: 'blur(20px) saturate(200%)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        };
      default:
        return {
          ...baseStyles,
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
        };
    }
  };

  return (
    <div className={combinedClasses} style={getInlineStyles()}>
      {children}
    </div>
  );
};
