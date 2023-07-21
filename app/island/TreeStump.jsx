'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TreeStump(props) {
  const { nodes, materials } = useGLTF('/models/TreeStump.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tree_stump.geometry}>
        <meshStandardMaterial {...materials.None}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/TreeStump.glb')
