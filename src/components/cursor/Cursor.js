import React, { useState, useEffect } from 'react';
import './Cursor.css';

const CursorTrail = () => {
  const [positions, setPositions] = useState([]);
  const [mainCursor, setMainCursor] = useState({ x: 0, y: 0 });
  const trailLifetime = 500; // Trail fade-out time in milliseconds

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(), // Record the time of the position
      };

      setMainCursor({ x: e.clientX, y: e.clientY }); // Update main cursor position
      setPositions((prev) => [...prev, newPosition]);
    };

    const interval = setInterval(() => {
      // Remove positions older than the trailLifetime
      const currentTime = Date.now();
      setPositions((prev) =>
        prev.filter((pos) => currentTime - pos.timestamp < trailLifetime)
      );
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="main-cursor"
        style={{
          left: mainCursor.x - 8, // Adjust for cursor size
          top: mainCursor.y - 8,
        }}
      ></div>

      {/* Cursor Trail */}
      {positions.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: pos.x - 8, // Adjust for dot size
            top: pos.y - 8,
            opacity: 1 - (Date.now() - pos.timestamp) / trailLifetime, // Gradually fade out
            transform: `scale(${1 - index * 0.05})`, 
          }}
        ></div>
      ))}
    </>
  );
};

export default CursorTrail;
