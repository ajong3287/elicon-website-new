'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function SunglassesModel() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {/* 왼쪽 렌즈 */}
      <mesh position={[-1.2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* 오른쪽 렌즈 */}
      <mesh position={[1.2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* 프레임 연결 바 */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.4, 0.15, 0.15]} />
        <meshStandardMaterial color="#00bfa6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 왼쪽 테 */}
      <mesh position={[-1.2, 0, 0]} castShadow>
        <torusGeometry args={[0.85, 0.08, 16, 50]} />
        <meshStandardMaterial color="#00bfa6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 오른쪽 테 */}
      <mesh position={[1.2, 0, 0]} castShadow>
        <torusGeometry args={[0.85, 0.08, 16, 50]} />
        <meshStandardMaterial color="#00bfa6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 왼쪽 다리 */}
      <mesh position={[-2, 0, 0.5]} rotation={[0, 0, -0.2]} castShadow>
        <boxGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#00bfa6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 오른쪽 다리 */}
      <mesh position={[2, 0, 0.5]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#00bfa6" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Sunglasses3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />

        {/* 조명 */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <spotLight position={[0, 5, 0]} intensity={0.3} />

        {/* 3D 모델 */}
        <SunglassesModel />

        {/* 마우스 컨트롤 */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={4}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={2}
        />

        {/* 바닥 그림자 */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      </Canvas>

      {/* 인터랙션 안내 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600">
        🖱️ 드래그로 회전 | 휠로 확대/축소
      </div>
    </div>
  );
}
