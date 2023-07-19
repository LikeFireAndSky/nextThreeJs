'use client'

import { Sky } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { OrbitControls, Stats, Environment, ContactShadows, Clone } from "@react-three/drei"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"
import * as THREE from "three"
import { Avatar } from "./fiber/avatar"
import { Land } from "./fiber/land"

const Model = ({url}: any) => {
    const { scene } :any  = useGLTF(url)
    return <Clone object = {scene} />
}


const Box2 = (props: JSX.IntrinsicElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)
    useFrame(() => {
        //mesh.current.rotation.x = mesh.current.rotation.y += 0.05
    })
    return(
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[1,1,1]} />
            <meshLambertMaterial attach="material" color="royalblue" />
        </mesh>
    )
}

const handleAlert = () => {
    alert("Hello")
}

const MoveBox = (props: JSX.IntrinsicElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)
    useFrame(() => {
        mesh.current.position.x += 0.005
    })
    return(
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[1,1,1]} />
            <meshLambertMaterial attach="material" color="royalblue" />
        </mesh>
    )
}

//gltf property : position, rotation, scale, layers
export default function fiber(){
    return(
        <div>
            <Canvas camera = {{ position : [0,10,0], near : 1.025, fov:30 }}>
                <Environment preset="city" />
                <Suspense>
                    <Avatar position={[0.4,1,1.4]} rotation={[0.09,0,-0.09]} onClick={handleAlert} />
                    <Land position={[0,0,0]} scale={[0.01,0.01,0.01]} />
                    <ambientLight intensity={0.3} />
                    <Box2 position={[10.2,0,0]} />
                    <MoveBox position={[0,0,3]} />
                    <Box2 position={[0,0,5]} />
                    <ContactShadows position={[0, -0.2, 0]} color="#000000"/>
                </Suspense>
                <OrbitControls enablePan ={true}
                                enableRotate={true}
                                enableZoom ={true}
                                enableDamping={true} />
                <gridHelper args={[0, 0]} />
                <Sky sunPosition={[100, 110, 50]} />
            </Canvas>
        </div>
    )
}