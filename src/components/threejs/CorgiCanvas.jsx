import { Canvas } from '@react-three/fiber'
import React from 'react'
import Corgi from './Corgi'
import { OrbitControls, Stage } from '@react-three/drei'

export const CorgiCanvas = () => {
    return (
        <Canvas camera={{fov:10,position:[0,0,5]}}>
            <Stage scale={2.5} environment="apartment" intensity={0.6}>
                <Corgi />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )
}
