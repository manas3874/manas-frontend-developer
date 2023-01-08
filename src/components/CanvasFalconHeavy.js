import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "../../styles/components/CanvasFalconHeavy.module.css";
import { Model } from "./Model";
function CanvasFalconHeavy() {
  // ! This is the threejs implementation for showing the model of a falcon heavy on the banner
  return (
    <Canvas className={styles.wrapper}>
      <mesh rotation={[0, 90, 0]}>
        <ambientLight intensity={3} color="#ffffff" />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={2.5}
          color="#ffffed"
        />
        <directionalLight
          position={[2, 5, -2]}
          intensity={1.5}
          color="#EF8317"
        />
        <Model />
        <meshLambertMaterial attach="material" color="#ffffff" />
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enableRotate={true}
          autoRotateSpeed={5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </mesh>
    </Canvas>
  );
}

export default CanvasFalconHeavy;
