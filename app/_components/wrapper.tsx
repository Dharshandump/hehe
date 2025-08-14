import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Geometric Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        
        {/* Particle Effects */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}