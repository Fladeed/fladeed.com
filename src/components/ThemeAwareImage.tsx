'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeAwareImageProps {
  src: string; // Base image path (without extension)
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
    // If it's already a path starting with /, handle it
    if (baseSrc.startsWith('/')) {
      const pathWithoutExtension = baseSrc.replace(/\.(png|jpg|jpeg)$/, '');
      const extension = baseSrc.match(/\.(png|jpg|jpeg)$/)?.[0] || '.png';
      
      if (theme === 'dark') {
        // Try dark version first, fallback to original if dark doesn't exist
        const darkSrc = `${pathWithoutExtension}-dark${extension}`;
        // Return dark version, but we'll handle fallback in the Image component's onError
        return darkSrc;
      }
      return baseSrc;
    }
    
    // If it's just a filename
    const [name, extension] = baseSrc.split('.');
    if (theme === 'dark') {
      return `/${name}-dark.${extension}`;
    }
    return `/${name}.${extension}`;
  };

  const [imageSrc, setImageSrc] = React.useState(() => getImageSrc(src, resolvedTheme));
  const [hasError, setHasError] = React.useState(false);

  // Update image source when theme changes
  React.useEffect(() => {
    setImageSrc(getImageSrc(src, resolvedTheme));
    setHasError(false);
  }, [src, resolvedTheme]);

  // Handle image load error (fallback to original image)
  const handleImageError = () => {
    if (!hasError && resolvedTheme === 'dark') {
      setHasError(true);
      setImageSrc(src); // Fallback to original image
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