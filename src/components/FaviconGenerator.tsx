
import React, { useRef, useEffect } from 'react';
import Logo from './Logo';

const FaviconGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Create a background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 32, 32);
        
        // This is where we would render the logo
        // For now, we'll create a simple placeholder that mimics the M with barbell
        ctx.fillStyle = '#10b981'; // Use the green color from the logo
        ctx.font = 'bold 24px sans-serif';
        ctx.fillText('M', 8, 24);
        
        // Draw a simple barbell
        ctx.fillStyle = '#000000';
        ctx.fillRect(6, 26, 20, 2);
        ctx.fillRect(4, 24, 4, 6);
        ctx.fillRect(24, 24, 4, 6);
      }
    }
  }, []);
  
  return (
    <div style={{ display: 'none' }}>
      <canvas ref={canvasRef} width="32" height="32"></canvas>
    </div>
  );
};

export default FaviconGenerator;
