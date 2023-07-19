'use client'
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.9 ./public/models/land.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Land(props) {
  const { nodes, materials } = useGLTF('/models/land.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.water.geometry} material={materials.wire_028089177} material-color={"#061C29"} />
      <mesh geometry={nodes.Box001.geometry} material={materials.stone} material-color={"#A9A9A9"} />
      <mesh geometry={nodes.Box002.geometry} material={materials.stone} material-color={"#808080"} />
      <mesh geometry={nodes.Box003.geometry} material={materials.stone} material-color={"#CD853F"} />
      <mesh geometry={nodes.Box004.geometry} material={materials.stone} material-color={"#8B4513"} />
      <mesh geometry={nodes.Box005.geometry} material={materials.stone} material-color={"#F4A460"} />
      <mesh geometry={nodes.Box006.geometry} material={materials.stone} material-color={"#D2691E"} />
      <mesh geometry={nodes.Box007.geometry} material={materials.stone} material-color={"#FFE4B5"} />
      <mesh geometry={nodes.Box008.geometry} material={materials.stone} material-color={"#FFD700"} />
      <mesh geometry={nodes.ground_1.geometry} material={materials.sand_2} material-color={"black"} />
      <mesh geometry={nodes.ground_2.geometry} material={materials.sand} material-color={"#DEB887"} />
    </group>
  )
}

useGLTF.preload('/models/land.glb')