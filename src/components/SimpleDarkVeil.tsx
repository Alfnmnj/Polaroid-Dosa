import { useEffect, useRef } from 'react';
import './SimpleDarkVeil.css';

interface SimpleDarkVeilProps {
  speed?: number;
  intensity?: number;
}

export default function SimpleDarkVeil({ speed = 1, intensity = 1 }: SimpleDarkVeilProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      time += 0.01 * speed;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Base cream color
      const baseR = 252;
      const baseG = 247;
      const baseB = 240;

      // Aurora colors (orange/gold)
      const auroraR = 249;
      const auroraG = 153;
      const auroraB = 34;

      // Create animated gradient stops
      const wave1 = Math.sin(time * 0.5) * 0.5 + 0.5;
      const wave2 = Math.sin(time * 0.3 + Math.PI / 3) * 0.5 + 0.5;
      const wave3 = Math.sin(time * 0.7 + Math.PI / 2) * 0.5 + 0.5;

      // Mix colors based on waves
      const mixR = baseR + (auroraR - baseR) * wave1 * 0.1 * intensity;
      const mixG = baseG + (auroraG - baseG) * wave2 * 0.1 * intensity;
      const mixB = baseB + (auroraB - baseB) * wave3 * 0.1 * intensity;

      gradient.addColorStop(0, `rgb(${Math.floor(mixR)}, ${Math.floor(mixG)}, ${Math.floor(mixB)})`);
      gradient.addColorStop(0.3, `rgb(${baseR}, ${baseG}, ${baseB})`);
      gradient.addColorStop(0.7, `rgb(${Math.floor(mixR * 0.95)}, ${Math.floor(mixG * 0.95)}, ${Math.floor(mixB * 0.95)})`);
      gradient.addColorStop(1, `rgb(${Math.floor(mixR * 0.9)}, ${Math.floor(mixG * 0.9)}, ${Math.floor(mixB * 0.9)})`);

      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add floating aurora effects
      ctx.globalCompositeOperation = 'overlay';
      
      for (let i = 0; i < 3; i++) {
        const x = (Math.sin(time * 0.2 + i * Math.PI / 1.5) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.15 + i * Math.PI / 2) * 0.5 + 0.5) * canvas.height;
        const radius = 200 + Math.sin(time * 0.3 + i) * 50;
        
        const auroraGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        auroraGradient.addColorStop(0, `rgba(${auroraR}, ${auroraG}, ${auroraB}, ${0.05 * intensity})`);
        auroraGradient.addColorStop(0.5, `rgba(${auroraR}, ${auroraG}, ${auroraB}, ${0.02 * intensity})`);
        auroraGradient.addColorStop(1, 'rgba(249, 153, 34, 0)');
        
        ctx.fillStyle = auroraGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalCompositeOperation = 'source-over';

      animationId = requestAnimationFrame(animate);
    };

    // Initial setup
    resize();
    animate();

    // Handle resize
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [speed, intensity]);

  return (
    <canvas 
      ref={canvasRef}
      className="simple-dark-veil"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
}