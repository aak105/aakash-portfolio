
import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

/**
 * AnimatedBackground Component
 * 
 * Creates a data and tech-themed animated background with 3D shapes
 * and connecting lines that move with the shapes.
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
        return 'from-green-100 via-blue-100 to-purple-100 dark:from-green-900/5 dark:via-blue-900/5 dark:to-purple-900/5';
      case 'tertiary':
        return 'from-orange-100 via-pink-100 to-yellow-100 dark:from-orange-900/5 dark:via-pink-900/5 dark:to-yellow-900/5';
      default:
        return 'from-blue-100 via-slate-100 to-stone-100 dark:from-blue-900/5 dark:via-slate-900/5 dark:to-stone-900/5';
    }
  };

  // Get elegant, light colors for elements
  const getElementColors = () => {
    switch (variant) {
      case 'secondary':
        return ['rgba(220, 243, 235, 0.5)', 'rgba(220, 238, 245, 0.5)', 'rgba(233, 232, 245, 0.5)'];
      case 'tertiary':
        return ['rgba(245, 237, 227, 0.5)', 'rgba(243, 232, 238, 0.5)', 'rgba(244, 242, 222, 0.5)'];
      default:
        return ['rgba(229, 236, 245, 0.5)', 'rgba(238, 240, 242, 0.5)', 'rgba(235, 235, 234, 0.5)'];
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

    // 3D Shape class with connecting lines
    class Shape3D {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      vz: number;
      opacity: number;
      shape: 'cube' | 'sphere' | 'pyramid' | 'cylinder';
      rotationX: number;
      rotationY: number;
      rotationZ: number;
      rotationSpeedX: number;
      rotationSpeedY: number;
      rotationSpeedZ: number;
      connections: Shape3D[];

      constructor(x: number, y: number, z: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 0.2; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.2;
        this.vz = (Math.random() - 0.5) * 0.1;
        this.opacity = 0.1 + Math.random() * 0.3; // Subtle opacity
        
        // Randomly select shape type
        const shapeTypes = ['cube', 'sphere', 'pyramid', 'cylinder'];
        this.shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)] as any;
        
        // 3D rotation properties
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.01;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.01;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.01;
        
        // Initialize empty connections array
        this.connections = [];
      }

      update(width: number, height: number, shapes: Shape3D[]) {
        // Update position
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Bounce off edges
        if (this.x < -this.size || this.x > width + this.size) {
          this.vx = -this.vx;
        }
        if (this.y < -this.size || this.y > height + this.size) {
          this.vy = -this.vy;
        }
        if (this.z < -100 || this.z > 100) {
          this.vz = -this.vz;
        }

        // Update rotation
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;

        // Subtle opacity pulsing
        this.opacity = 0.1 + 0.2 * (0.5 + Math.sin(Date.now() * 0.0005) * 0.5);
        
        // Update connections - find closest shapes
        if (Math.random() < 0.01) { // Occasionally update connections
          this.connections = [];
          // Find 1-3 closest shapes to connect with
          const connectionCount = 1 + Math.floor(Math.random() * 2);
          
          // Sort shapes by distance
          const sortedShapes = [...shapes].filter(s => s !== this).sort((a, b) => {
            const distA = Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2));
            const distB = Math.sqrt(Math.pow(this.x - b.x, 2) + Math.pow(this.y - b.y, 2));
            return distA - distB;
          });
          
          // Connect with closest shapes
          for (let i = 0; i < Math.min(connectionCount, sortedShapes.length); i++) {
            this.connections.push(sortedShapes[i]);
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Calculate scale based on z position (perspective)
        const scale = 1 + (this.z / 200); // z ranges from -100 to 100
        const scaledSize = this.size * scale;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Apply color with transparency
        const colorWithOpacity = this.color.replace('0.4', `${this.opacity}`);
        ctx.fillStyle = colorWithOpacity;
        ctx.strokeStyle = colorWithOpacity;
        
        // Apply 3D transformations
        ctx.translate(this.x, this.y);
        ctx.scale(scale, scale); // Apply perspective scaling
        
        // Draw 3D shape based on type
        switch (this.shape) {
          case 'cube':
            this.drawCube(ctx, scaledSize);
            break;
          case 'sphere':
            this.drawSphere(ctx, scaledSize);
            break;
          case 'pyramid':
            this.drawPyramid(ctx, scaledSize);
            break;
          case 'cylinder':
            this.drawCylinder(ctx, scaledSize);
            break;
        }
        
        ctx.restore();
        
        // Draw connections to other shapes
        this.drawConnections(ctx);
      }
      
      drawConnections(ctx: CanvasRenderingContext2D) {
        // Draw lines to connected shapes
        for (const connectedShape of this.connections) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(connectedShape.x, connectedShape.y);
          
          // Line style based on distance
          const distance = Math.sqrt(Math.pow(this.x - connectedShape.x, 2) + Math.pow(this.y - connectedShape.y, 2));
          const maxDistance = 200; // Maximum distance for connection
          
          if (distance < maxDistance) {
            const opacity = 0.3 * (1 - distance / maxDistance);
            ctx.strokeStyle = `rgba(200, 220, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      // 3D shape drawing methods
      drawCube(ctx: CanvasRenderingContext2D, size: number) {
        const halfSize = size / 2;
        
        // Apply 3D rotation
        ctx.save();
        ctx.rotate(this.rotationZ);
        
        // Front face
        ctx.fillRect(-halfSize, -halfSize, size, size);
        
        // Add 3D effect with lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 0.5;
        
        // Draw edges
        ctx.beginPath();
        ctx.moveTo(-halfSize, -halfSize);
        ctx.lineTo(-halfSize * 1.2, -halfSize * 1.2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(halfSize, -halfSize);
        ctx.lineTo(halfSize * 1.2, -halfSize * 1.2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(halfSize, halfSize);
        ctx.lineTo(halfSize * 1.2, halfSize * 1.2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-halfSize, halfSize);
        ctx.lineTo(-halfSize * 1.2, halfSize * 1.2);
        ctx.stroke();
        
        // Back face (partial, for 3D effect)
        ctx.beginPath();
        ctx.moveTo(-halfSize * 1.2, -halfSize * 1.2);
        ctx.lineTo(halfSize * 1.2, -halfSize * 1.2);
        ctx.lineTo(halfSize * 1.2, halfSize * 1.2);
        ctx.lineTo(-halfSize * 1.2, halfSize * 1.2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
      }
      
      drawSphere(ctx: CanvasRenderingContext2D, size: number) {
        const radius = size / 2;
        
        // Main circle
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // 3D effect with ellipses
        ctx.save();
        ctx.rotate(this.rotationX);
        ctx.scale(1, 0.3); // Flatten to create ellipse
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
        ctx.restore();
        
        ctx.save();
        ctx.rotate(this.rotationY);
        ctx.scale(0.3, 1); // Flatten in other direction
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
        ctx.restore();
      }
      
      drawPyramid(ctx: CanvasRenderingContext2D, size: number) {
        const halfSize = size / 2;
        
        // Apply 3D rotation
        ctx.save();
        ctx.rotate(this.rotationZ);
        
        // Base
        ctx.beginPath();
        ctx.moveTo(-halfSize, halfSize);
        ctx.lineTo(halfSize, halfSize);
        ctx.lineTo(halfSize, -halfSize);
        ctx.lineTo(-halfSize, -halfSize);
        ctx.closePath();
        ctx.fill();
        
        // Pyramid point
        const height = size * 0.8;
        ctx.beginPath();
        ctx.moveTo(-halfSize, halfSize);
        ctx.lineTo(0, -height);
        ctx.lineTo(halfSize, halfSize);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(halfSize, halfSize);
        ctx.lineTo(0, -height);
        ctx.lineTo(halfSize, -halfSize);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
      }
      
      drawCylinder(ctx: CanvasRenderingContext2D, size: number) {
        const halfSize = size / 2;
        const height = size * 1.5;
        
        // Apply 3D rotation
        ctx.save();
        ctx.rotate(this.rotationZ);
        
        // Draw cylinder body (rectangle)
        ctx.fillRect(-halfSize, -height/2, size, height);
        
        // Draw top ellipse
        ctx.save();
        ctx.translate(0, -height/2);
        ctx.scale(1, 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, halfSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.restore();
        
        // Draw bottom ellipse
        ctx.save();
        ctx.translate(0, height/2);
        ctx.scale(1, 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, halfSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
        ctx.restore();
        
        ctx.restore();
      }
    }

    // Create 3D shapes
    const elementColors = getElementColors();
    const shapes: Shape3D[] = [];
    const shapeCount = Math.floor(canvas.width * canvas.height / 50000); // Fewer shapes for better performance
    
    for (let i = 0; i < shapeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const z = Math.random() * 200 - 100; // z between -100 and 100
      const size = 5 + Math.random() * 15;
      const color = elementColors[Math.floor(Math.random() * elementColors.length)];
      shapes.push(new Shape3D(x, y, z, size, color));
    }

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      for (const shape of shapes) {
        shape.update(canvas.width, canvas.height, shapes);
        shape.draw(ctx);
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
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* 3D animation canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
