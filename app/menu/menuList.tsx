"use client"

import React, { Fragment, useEffect, useState } from "react"

export interface Data {
    Routine : string,
    Maker : string
}

const MenuList = () => {
    const [data, setadata] = useState<Data[]>([])

    useEffect(() => {
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
        <>        
            {
                data.map((item : any, index : number) =>
                    <div key = {item} className="flex flex-col mb-3 bg-slate-500 items-center border-r-slate-400 border-pink-300 hover:border-dotted" onClick={()=>{alert("hello")}}>
                        <h1>{data[index].Maker}의 모닝루틴 {index}번째</h1>
                        <p>{data[index].Routine}</p>
                    </div>
            
            )}
        </>

    )
}

export default MenuList

