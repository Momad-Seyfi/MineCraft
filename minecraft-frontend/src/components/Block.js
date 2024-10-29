// src/components/Block.js
import React, { useRef, useState, useEffect } from 'react';

const Block = (props) => {
  const meshRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState([0, 0, 0]);
  const [initialMousePosition, setInitialMousePosition] = useState(null);

  // Ensure initial position is set from props
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...props.position);
      setInitialPosition(props.position);
    }
  }, [props.position]);

  // Handle mouse down event
  const onPointerDown = (event) => {
    event.stopPropagation();
    if (meshRef.current) {
      setIsDragging(true);
      setInitialMousePosition({ x: event.clientX, y: event.clientY });
      setInitialPosition([meshRef.current.position.x, meshRef.current.position.y, meshRef.current.position.z]);
    }
  };

  // Handle mouse up event
  const onPointerUp = () => {
    setIsDragging(false);
  };

  // Handle mouse move globally when dragging
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging && meshRef.current) {
        const deltaX = event.clientX - initialMousePosition.x;
        const deltaY = event.clientY - initialMousePosition.y;

        // Calculate new position based on mouse movement
        const newPosition = [
          initialPosition[0] + deltaX * 0.01, // Adjust sensitivity
          initialPosition[1] - deltaY * 0.01, // Invert Y-axis
          initialPosition[2],
        ];
        
        meshRef.current.position.set(...newPosition); // Directly set the mesh position
      }
    };

    // Attach mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, initialMousePosition, initialPosition]);

  // Handle mouse up event on window to stop dragging
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    // Attach mouse up event listener
    window.addEventListener('mouseup', handleMouseUp);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <mesh
      {...props}
      position={initialPosition} // Ensure position updates
      ref={meshRef}
      onPointerDown={onPointerDown}
      scale={[1, 1, 1]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={"#0000FF"} // Set to blue
        transparent 
        opacity={0.7} // Adjust opacity for a glass effect
        roughness={0.1} // Make it smoother
        metalness={0.6} // Enhance the glassy effect
      />
    </mesh>
  );
};

export default Block;
