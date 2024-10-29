// src/components/CustomCursor.js
import React from 'react';
import './CustomCursor.css'; // Import the CSS for custom cursor

const CustomCursor = ({ x, y }) => {
  return (
    <div className="custom-cursor" style={{ left: `${x}px`, top: `${y}px` }}>
      TIMSAR
    </div>
  );
};

export default CustomCursor;
