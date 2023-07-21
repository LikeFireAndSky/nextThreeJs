'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stump(props) {
  const { nodes, materials } = useGLTF('/models/Stump.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="imagetostl_mesh0" geometry={nodes.imagetostl_mesh0.geometry} material={materials.mat0} />
    </group>
  )
}

useGLTF.preload('/models/Stump.glb')
