/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 shiba.gltf --transform 
Files: shiba.gltf [2.47MB] > C:\Users\User\Downloads\porfolio stuff\shiba\shiba-transformed.glb [47.49KB] (98%)
Author: zixisun02 (https://sketchfab.com/zixisun51)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c
Title: Shiba
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shiba-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Group18985_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/shiba-transformed.glb')
