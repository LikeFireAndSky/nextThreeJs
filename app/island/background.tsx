'use client'

import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";
import * as THREE from "three";


export default function Background() {
    return(
    <>
        <Environment preset="city" />
        <Sphere scale={[100,100,100]} rotation-y={Math.PI / 2}>
            <LayerMaterial
            lighting="physical"
            transmission={1}
            side={THREE.BackSide}>
                <Gradient colorA={"#FFD200"} colorB={"#F7971E"} axes={"y"} start={1} end={-1} />
            </LayerMaterial>
        </Sphere>
    </>
    );
};