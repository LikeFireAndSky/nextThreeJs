'use client'

import { Canvas, useFrame } from '@react-three/fiber';
import Background from './background';
import { TreeStump } from './TreeStump';
import { CameraControls, Float, Line, OrbitControls, PerspectiveCamera, ScrollControls, useScroll, Cloud } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Maker() {

    const cameraControlRef = useRef<CameraControls | null>(null);
    const [isplaying, setisplaying] = useState(true);

    useEffect(() => {
        if(isplaying){
            playAudio();
        }
    }, [isplaying])

    const playAudio = () => {
        new Audio('/models/music.wav').play();
    }


    return(
    <div className='h-screen'>
        <Canvas camera={{position : [1,1,0]}}>
            <OrbitControls enablePan ={true}/>
            <CameraControls ref={cameraControlRef} />
            <ambientLight intensity={0.5} />
            <Float scale={0.25} position={[0,0,0]} rotation = {[0,0,0]} speed={1.5}>
            <TreeStump />
            </Float>
            <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={10} // Width of the full cloud
                depth={1.5} // Z-dir depth
                segments={20} // Number of particles
                />
            <Background />
        </Canvas>
        {/* Audio Player */}
    </div>
    )
}