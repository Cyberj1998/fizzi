import React, { useRef, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE
import SodaScene from '/assets/models/closed_soda_can.glb';

const MySodaCan = (props) => {
  
  const SodaRef = useRef();
  const { nodes, materials } = useGLTF(SodaScene);
  const grapeTexture = useTexture(props.texture);

  // Create a standard material with the adjusted texture properties
  const canMaterial = new THREE.MeshStandardMaterial({
    map: grapeTexture,
    roughness: 0.1, // Lower roughness for a smoother surface
    metalness: 0.7, // Higher metalness for a metallic appearance
  });

  return (
    <group ref={SodaRef} {...props}>
      <group position={[0.001, 0, -0.031]} rotation={[0, -1.024, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Top_of_can}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={canMaterial} // Use the custom material here
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        position={[0.056, -0.018, 0.001]}
        rotation={[0, -1.024, 0]}
      />
    </group>
  );
}

useGLTF.preload('/closed_soda_can.glb');

export default MySodaCan;
