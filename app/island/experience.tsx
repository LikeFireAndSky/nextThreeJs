'use client'

import { OrbitControls } from "@react-three/drei"
import { LayerMaterial, Gradient } from "lamina"
import * as THREE from "three"

export default function Experience() {
    return (
        <>
        <group position={[3,0,0]}>
            <mesh position={[-3,1,5]}>
                <boxGeometry />
                <LayerMaterial lighting="physical" transmission={1}>
                        <Gradient colorA={"orange"} colorB={"red"} axes={"y"} start={-0.7} end={0.7} />
                    </LayerMaterial>
                <meshLambertMaterial />
            </mesh>
            <mesh position={[2,1,4]}>
                <boxGeometry />
                <LayerMaterial lighting="physical" transmission={1}>
                        <Gradient colorA={"lightblue"} colorB={"hotpink"} axes={"y"} start={-0.7} end={0.7} />
                    </LayerMaterial>
                <meshLambertMaterial />
            </mesh>
            <mesh position={[9,-4,0]}>
                <boxGeometry />
                <LayerMaterial lighting="physical" transmission={1}>
                        <Gradient colorA={"orange"} colorB={"yellow"} axes={"y"} start={-0.7} end={0.7} />
                    </LayerMaterial>
                <meshLambertMaterial />
            </mesh>
            <mesh position={[5,1,11]}>
                <boxGeometry />
                <LayerMaterial lighting="physical" transmission={1}>
                        <Gradient colorA={"purple"} colorB={"red"} axes={"y"} start={-0.7} end={0.7} />
                    </LayerMaterial>
                <meshLambertMaterial />
            </mesh>
            <mesh position={[2,4,0]}>
                <boxGeometry />
                <LayerMaterial lighting="physical" transmission={2}>
                        <Gradient colorA={"green"} colorB={"gold"} axes={"y"} start={-0.7} end={0.7} />
                    </LayerMaterial>
                <meshLambertMaterial />
            </mesh>
            <mesh position={[5,1,0]}>
                <boxGeometry />        
                    <LayerMaterial lighting="physical" transmission={1}>
                        <Gradient colorA={"ornage"} colorB={"red"} axes={"y"} start={-0.7} end={0.7} />
                    </LayerMaterial>
                <meshLambertMaterial />
            </mesh>
        </group>
        </>
    )
};