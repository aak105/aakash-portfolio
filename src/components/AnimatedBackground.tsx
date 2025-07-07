
import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

/**
 * AnimatedBackground Component
 * 
 * Creates a subtle, elegant animated background with soft elements
 * and light colors that blend seamlessly with white for a sophisticated feel.
 * 
 * @param variant - Color variant for different sections
 * @param className - Additional CSS classes
 */
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'primary', 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Define subtle color schemes for different variants
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'from-green-50 via-blue-50 to-purple-50 dark:from-green-900/5 dark:via-blue-900/5 dark:to-purple-900/5';
      case 'tertiary':
        return 'from-orange-50 via-pink-50 to-yellow-50 dark:from-orange-900/5 dark:via-pink-900/5 dark:to-yellow-900/5';
      default:
        return 'from-blue-50 via-slate-50 to-stone-50 dark:from-blue-900/5 dark:via-slate-900/5 dark:to-stone-900/5';
    }
  };

  // Get elegant, light colors for elements
  const getElementColors = () => {
    switch (variant) {
      case 'secondary':
        return ['rgba(236, 253, 245, 0.4)', 'rgba(235, 248, 255, 0.4)', 'rgba(243, 242, 255, 0.4)'];
      case 'tertiary':
        return ['rgba(255, 247, 237, 0.4)', 'rgba(253, 242, 248, 0.4)', 'rgba(254, 252, 232, 0.4)'];
      default:
        return ['rgba(239, 246, 255, 0.4)', 'rgba(248, 250, 252, 0.4)', 'rgba(245, 245, 244, 0.4)'];
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    // Initial resize
    resizeCanvas();
    
    // Resize on window resize
    window.addEventListener('resize', resizeCanvas);

    // Elegant floating elements
    class ElegantElement {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      opacity: number;
      shape: 'circle' | 'square' | 'line';
      rotationAngle: number;
      rotationSpeed: number;

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 0.2; // Very slow movement
        this.vy = (Math.random() - 0.5) * 0.2;
        this.opacity = 0.1 + Math.random() * 0.3; // Very subtle opacity
        this.shape = Math.random() < 0.6 ? 'circle' : Math.random() < 0.9 ? 'square' : 'line';
        this.rotationAngle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01; // Very slow rotation
      }

      update(width: number, height: number) {
        // Update position very slowly
        this.x += this.vx;
        this.y += this.vy;

        // Gentle bounce off edges
        if (this.x < -this.size || this.x > width + this.size) {
          this.vx = -this.vx;
        }
        if (this.y < -this.size || this.y > height + this.size) {
          this.vy = -this.vy;
        }

        // Subtle rotation
        this.rotationAngle += this.rotationSpeed;

        // Very subtle opacity pulsing
        this.opacity = 0.1 + 0.2 * (0.5 + Math.sin(Date.now() * 0.0005) * 0.5);
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Apply color with transparency
        const colorWithOpacity = this.color.replace('0.4', `${this.opacity}`);
        ctx.fillStyle = colorWithOpacity;
        ctx.strokeStyle = colorWithOpacity;
        
        // Apply rotation for some shapes
        if (this.shape !== 'circle') {
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotationAngle);
          ctx.translate(-this.x, -this.y);
        }

        // Draw shape based on type
        switch (this.shape) {
          case 'square':
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
          case 'line':
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineWidth = 0.5;
            ctx.stroke();
            break;
          default: // circle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size/2, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        
        ctx.restore();
      }
    }

    // Create elegant elements
    const elementColors = getElementColors();
    const elements: ElegantElement[] = [];
    const elementCount = Math.floor(canvas.width * canvas.height / 40000); // Fewer elements for minimalism
    
    for (let i = 0; i < elementCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = 5 + Math.random() * 15; // Larger, softer elements
      const color = elementColors[Math.floor(Math.random() * elementColors.length)];
      elements.push(new ElegantElement(x, y, size, color));
    }

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw elements
      for (const element of elements) {
        element.update(canvas.width, canvas.height);
        element.draw(ctx);
      }

      // Add occasional subtle connecting lines
      if (Math.random() < 0.01) {
        const randomElement1 = elements[Math.floor(Math.random() * elements.length)];
        const randomElement2 = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement1 && randomElement2) {
          ctx.beginPath();
          ctx.moveTo(randomElement1.x, randomElement1.y);
          ctx.lineTo(randomElement2.x, randomElement2.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main gradient background - very subtle */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getVariantStyles()}`} />
      
      {/* Elegant animation canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
