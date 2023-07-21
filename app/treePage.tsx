'use client'

import { Sky } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { OrbitControls, Float, Environment, ContactShadows, useTexture } from "@react-three/drei"
import { Treess } from "./Trees"
import { useRouter } from "next/navigation"
import Background from './background'
//gltf property : position, rotation, scale, layers
export default function PodPage(){

    const router = useRouter()
    const PageNation = () => {
        router.push('/island')
    }

    return(
        <div className="w-full h-auto bg-slate-100">
            <Canvas camera = {{ position : [50,50,10], fov:40 }}>
                <Environment preset="city" />
                <Suspense>
                    <group position={[0,0,0]}>
                        <Treess position={[0,0,0]} onClick={PageNation} className=" hover:invisible"/>
                    </group>
                    <Float scale={0.25} position={[30,20,-5]} rotation = {[0,0,0]} speed={10}>
                    </Float>
                    <ambientLight intensity={0.5} />
                    <ContactShadows position={[0, -0.2, 0]} color="#000000"/>
                </Suspense>
                <OrbitControls enablePan ={true}
                                enableRotate={true}
                                enableZoom ={true}
                                enableDamping={true} />
                <Background />
            </Canvas>
        </div>
    )
}