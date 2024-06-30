import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Cube } from './Cube'

export const CubeCanvas = () => {
    return (
        <Canvas camera={{ fov: 25, position: [10, 10, 10] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
        </Canvas>
    )
}
