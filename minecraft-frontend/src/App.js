// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import Block from './components/Block';

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas>

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[10, 10, 10]} intensity={0.5} />


        {/* Your blocks or other 3D components go here */}
        <Block position={[-1.2, 0, 0]} />
        <Block position={[1.2, 0, 0]} />
        <Block position={[0, 0, 0]} />
        <Block position={[-1.2, 1.2, 0]} />
        <Block position={[1.2, 1.2, 0]} />
        <Block position={[0, 1.2, 0]} />
        <Block position={[-1.2, -1.2, 0]} />
        <Block position={[1.2, -1.2, 0]} />
        <Block position={[0, -1.2, 0]} />
        {/* Add more blocks as needed */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default App;
