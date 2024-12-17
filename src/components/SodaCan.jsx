import { useGLTF, useTexture } from "@react-three/drei";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';
import PropTypes from "prop-types";

const flavorTextures = {
  lemonLime: "/assets/labels/lemon-lime.png",
  grape: "/assets/labels/grape.png",
  blackCherry: "/assets/labels/cherry.png",
  strawberryLemonade: "/assets/labels/strawberry.png",
  watermelon: "/assets/labels/watermelon.png",
};

const SodaCan = ({ flavor, scale, ...props }) => {
  // Initialize Draco loader
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/path/to/draco/'); // Set the correct path for your Draco decoder files

  // Load the glTF model
  const { nodes, materials } = useGLTF("/assets/models/Soda-can.gltf", dracoLoader);

  const labels = useTexture(flavorTextures);
  Object.keys(labels).forEach((key) => {
    labels[key].flipY = false;
  });

  const label = labels[flavor] || labels.blackCherry; 

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh 
        geometry={nodes.cylinder.geometry} 
        material={new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.3 })} 
      />
      <mesh geometry={nodes.cylinder_1.geometry}>
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh 
        geometry={nodes.Tab.geometry} 
        material={new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.3 })} 
      />
    </group>
  );
}

SodaCan.propTypes = {
  flavor: PropTypes.oneOf(Object.keys(flavorTextures)),
  scale: PropTypes.number,
};

SodaCan.defaultProps = {
  flavor: "blackCherry",
  scale: 2,
};

export default SodaCan;
