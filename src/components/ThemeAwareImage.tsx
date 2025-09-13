'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeAwareImageProps {
  src: string; // Image path - if exact name (name.png), use as-is. If wildcard pattern (name-*.png), choose based on theme
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export const ThemeAwareImage: React.FC<ThemeAwareImageProps> = ({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
  width,
  height
}) => {
  const { resolvedTheme } = useTheme();
  
  // Helper function to get the appropriate image source based on theme
  const getImageSrc = (baseSrc: string, theme: 'light' | 'dark') => {
    // Check if this is a wildcard pattern (contains -* in the name)
    const isWildcardPattern = baseSrc.includes('-*');
    
    if (isWildcardPattern) {
      // Handle wildcard pattern: name-*.png
      // Replace -* with appropriate suffix based on theme
      if (theme === 'dark') {
        return baseSrc.replace('-*', '-dark');
      } else {
        return baseSrc.replace('-*', '');
      }
    } else {
      // Exact image name provided - use as-is regardless of theme
      return baseSrc;
    }
  };

  const [imageSrc, setImageSrc] = React.useState(() => getImageSrc(src, resolvedTheme));
  const [hasError, setHasError] = React.useState(false);

  // Update image source when theme changes
  React.useEffect(() => {
    setImageSrc(getImageSrc(src, resolvedTheme));
    setHasError(false);
  }, [src, resolvedTheme]);

  // Handle image load error (fallback to original image for wildcard patterns)
  const handleImageError = () => {
    if (!hasError && src.includes('-*') && resolvedTheme === 'dark') {
      setHasError(true);
      // Fallback to light version if dark version fails to load
      setImageSrc(src.replace('-*', ''));
    }
  };

  const imageProps = {
    src: imageSrc,
    alt,
    className,
    priority,
    onError: handleImageError,
    ...(fill ? { fill: true } : { width, height })
  };

  return <Image {...imageProps} alt={alt} />;
};