
import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

/**
 * AnimatedBackground Component
 * 
 * Creates a data and network-themed animated background with floating geometric shapes,
 * data nodes, and connecting lines that blend seamlessly with the current color scheme.
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
      
      {/* Data Network Theme - Floating geometric shapes with continuous movement */}
      <div className="absolute inset-0">
        
        {/* Large data nodes - slow movement */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/10 to-purple-200/10 dark:from-blue-800/10 dark:to-purple-800/10 animate-pulse opacity-30 -top-48 -left-48 animate-float-slow" />
        
        {/* Medium data nodes - medium movement */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-green-200/10 to-blue-200/10 dark:from-green-800/10 dark:to-blue-800/10 animate-pulse opacity-20 top-1/3 right-10 animate-float-medium" />
        
        {/* Small data nodes - fast movement */}
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-200/10 to-pink-200/10 dark:from-purple-800/10 dark:to-pink-800/10 animate-pulse opacity-25 bottom-1/4 left-1/4 animate-float-fast" />
        
        {/* Network connection lines - Data theme */}
        <div className="absolute w-px h-32 bg-gradient-to-b from-transparent via-slate-300/20 to-transparent dark:via-slate-600/20 top-20 left-1/3 animate-fade-in-out transform rotate-45" />
        <div className="absolute w-px h-48 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent dark:via-blue-600/20 bottom-20 right-1/3 animate-fade-in-out delay-1000 transform -rotate-45" />
        <div className="absolute w-24 h-px bg-gradient-to-r from-transparent via-green-300/20 to-transparent dark:via-green-600/20 top-1/2 left-1/2 animate-fade-in-out delay-500 transform -rotate-12" />
        
        {/* Data points pattern - Network nodes */}
        <div className="absolute grid grid-cols-8 gap-8 opacity-10 top-10 right-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse relative" 
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Connection lines between data points */}
              {i % 3 === 0 && (
                <div className="absolute w-8 h-px bg-slate-300/20 dark:bg-slate-600/20 top-1 left-2 animate-fade-in-out" />
              )}
            </div>
          ))}
        </div>

        {/* Additional network elements */}
        <div className="absolute bottom-10 left-10 opacity-10">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 dark:bg-purple-500 rounded-full animate-pulse" />
                <div className="w-8 h-px bg-purple-300/30 dark:bg-purple-600/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Hexagonal data structures */}
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <div className="w-16 h-16 border border-slate-400/30 dark:border-slate-500/30 transform rotate-45 animate-pulse delay-2000" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-5">
          <div className="w-12 h-12 border border-blue-400/30 dark:border-blue-500/30 rounded-full animate-pulse delay-1500" />
        </div>
        
      </div>
    </div>
  );
};

export default AnimatedBackground;
