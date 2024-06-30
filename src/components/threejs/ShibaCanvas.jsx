import { Canvas } from '@react-three/fiber'
import React from 'react'
import Shiba from './Shiba'
import { OrbitControls, Stage } from '@react-three/drei'

export const ShibaCanvas = () => {
    return (
        <Canvas camera={{fov:10,position:[0,0,5]}}>
            <Stage scale={2.5} environment="apartment" intensity={0.6}>
                <Shiba />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )
}
