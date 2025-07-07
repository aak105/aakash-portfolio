
import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

/**
 * AnimatedBackground Component
 * 
 * Creates a minimalistic animated background with floating geometric shapes
 * that blend seamlessly with the current color scheme.
 * 
 * @param variant - Color variant for different sections
 * @param className - Additional CSS classes
 */
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'primary', 
  className = '' 
}) => {
  // Define color schemes for different variants
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'from-green-100/20 via-blue-100/20 to-purple-100/20 dark:from-green-900/10 dark:via-blue-900/10 dark:to-purple-900/10';
      case 'tertiary':
        return 'from-orange-100/20 via-pink-100/20 to-yellow-100/20 dark:from-orange-900/10 dark:via-pink-900/10 dark:to-yellow-900/10';
      default:
        return 'from-blue-100/20 via-slate-100/20 to-stone-100/20 dark:from-blue-900/10 dark:via-slate-900/10 dark:to-stone-900/10';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getVariantStyles()}`} />
      
      {/* Floating geometric shapes with continuous movement */}
      <div className="absolute inset-0">
        {/* Large circle - slow movement */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/10 to-purple-200/10 dark:from-blue-800/10 dark:to-purple-800/10 animate-pulse opacity-30 -top-48 -left-48 animate-float-slow" />
        
        {/* Medium circle - medium movement */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-green-200/10 to-blue-200/10 dark:from-green-800/10 dark:to-blue-800/10 animate-pulse opacity-20 top-1/3 right-10 animate-float-medium" />
        
        {/* Small circles - fast movement */}
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-200/10 to-pink-200/10 dark:from-purple-800/10 dark:to-pink-800/10 animate-pulse opacity-25 bottom-1/4 left-1/4 animate-float-fast" />
        
        {/* Diagonal lines */}
        <div className="absolute w-px h-32 bg-gradient-to-b from-transparent via-slate-300/20 to-transparent dark:via-slate-600/20 top-20 left-1/3 animate-fade-in-out" />
        <div className="absolute w-px h-48 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent dark:via-blue-600/20 bottom-20 right-1/3 animate-fade-in-out delay-1000" />
        
        {/* Dots pattern */}
        <div className="absolute grid grid-cols-8 gap-8 opacity-10 top-10 right-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" 
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
