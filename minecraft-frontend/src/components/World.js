// src/components/World.js
import React from 'react';
import { Link } from 'react-router-dom';

const World = () => (
  <div>
    <h2>Welcome to the Minecraft World</h2>
    <p>Click on a block to see details:</p>
    <ul>
      <li><Link to="/blocks/1">Block 1</Link></li>
      <li><Link to="/blocks/2">Block 2</Link></li>
      <li><Link to="/blocks/3">Block 3</Link></li>
    </ul>
  </div>
);

export default World;
