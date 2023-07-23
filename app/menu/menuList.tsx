"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useTrail, a } from "@react-spring/web"
import { ObjectId } from "mongodb"
import { useRouter } from "next/navigation"

export interface Data {
    _id : ObjectId,
    Routine : string,
    Maker : string
}

interface TrailProps extends React.PropsWithChildren<{ open: boolean }> {}

const Trail : React.FC<TrailProps> = ({ open, children } : any) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 3000, friction: 3000 },
      opacity: open ? 1 : 0,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 100, height: 200 },
    })
    return (
        <div>
            {trail.map(({ height }, index) => (
                <a.div key={index}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

const MenuList = () => {
    const [data, setadata] = useState<Data[]>([])
    const [open, set] = useState(true)
    const router = useRouter()

    useMemo(() => {
        fetch("api/post/getRoutine", {
            headers : {
                "Content-Type" : "application/json",
            },
            method : "GET",
        })
        .then(res => res.json())
        .then(result => {
            setadata(result)
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div className="w-full">           
            <Trail open={open}>
            {
            data.map((item : any, index : number) =>
                <div key = {data[index]._id.toString()} onClick={()=>router.push(`/${data[index].Routine}`)} className="flex flex-col border-8 p-10 w-full items-center h-[100px] justify-center font-bold bg-slate-300 hover:bg-stone-800 hover:text-stone-200 rounded-lg hover:ease-in hover:duration-500 hover:cursor-pointer">
                    <span className=" font-thin"> Maker : {data[index].Maker}</span>
                    <span className=" text-3xl">{data[index].Routine}</span>
                </div>)
            }
            </Trail>
        </div>

    )
}

export default MenuList

