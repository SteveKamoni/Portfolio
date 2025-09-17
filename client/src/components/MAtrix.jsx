// React component: MatrixRain.jsx

import React, { useRef, useEffect } from 'react';

function MatrixRain({
  width = window.innerWidth,
  height = window.innerHeight,
  fontSize = 16,
  charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アァカサタナハマヤャラワガザ",
  color = "#0F0",
  bgColor = "rgba(0, 0, 0, 0.05)",
}) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(0);

    let animationFrameId;

    function draw() {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const text = charSet.charAt(Math.floor(Math.random() * charSet.length));
        ctx.fillText(text, x, y);

        // reset drop
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, fontSize, charSet, color, bgColor]);

return (
  <canvas
    ref={canvasRef}
    style={{ width: "100%", height: "100%", display: "block" }}
  />
);

}

export default MatrixRain;
