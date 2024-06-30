import { RenderTexture, Text, PerspectiveCamera  } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


export const Cube = () => {

    // variable
    const textRef = useRef();
    useFrame((state) => (textRef.current.position.x=Math.sin(state.clock.elapsedTime)*2))

    return (
        <mesh>
            <boxGeometry args={[2,2,2]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera 
                        makeDefault
                        position={[0,0,2]}
                    />
                    <color attach="background" args={["#df7ac9"]} />
                    <Text ref={textRef} fontSize={1} color="#555">
                        Hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}
