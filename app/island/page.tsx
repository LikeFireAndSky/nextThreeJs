'use client'

import { Canvas } from '@react-three/fiber';
import Experience from './experience';
import Background from './background';

export default function Page() {
    return (
        <div className="w-full h-screen">
            <Canvas>
                <color attach="background" args={['#ececec']} />
                <Experience />
                <Background />
            </Canvas>
        </div>
    );
}