import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.15;
  pointer-events: none;
`;

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters - tech symbols and code
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|~`';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store y-position of each column
    const drops = Array(Math.floor(columns)).fill(1);

    // Drawing function
    const draw = () => {
      // Black background with transparency for trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Neon green text
      ctx.fillStyle = '#00ff9f';
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y position
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 33);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CanvasContainer>
      <canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default MatrixBackground;
