import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const shakeAmplitude = 0.02;

const JetModel = () => {
  const jetRef = useRef<THREE.Group>(null!);

  const gltf = useLoader(GLTFLoader, "/assets/Jet.glb");

  useFrame(({ clock }) => {
    if (!jetRef.current) return;

    jetRef.current.rotation.x =
      -Math.PI / 20 + Math.sin(clock.getElapsedTime() * 5) * shakeAmplitude;
    jetRef.current.rotation.y =
      Math.sin(clock.getElapsedTime() * 3) * shakeAmplitude;
    jetRef.current.rotation.z =
      Math.sin(clock.getElapsedTime() * 4) * shakeAmplitude;
  });

  return <primitive object={gltf.scene} ref={jetRef} />;
};

export const JetScene = () => {
  return (
    <Canvas
      camera={{ position: [-20, 9, 20], fov: 50 }}
      style={{ width: "6.5rem", height: "6.5rem" }}
      className="fade-in-image"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <JetModel />
    </Canvas>
  );
};
