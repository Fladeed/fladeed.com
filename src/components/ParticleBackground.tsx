'use client';

import React, { useEffect, useState } from 'react';

export const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 8,
        duration: Math.random() * 8 + 8,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="particles fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
