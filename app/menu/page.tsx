import React from "react";
import MenuList from "./menuList";
import Background from "./background";


export default function App() {
    return(
    <>
        <div className="flex flex-col w-full h-screen bg-slate-100 items-center justify-center">
            <div className="flex flex-col w-3/4 relative items-center justify-center">
                <h1 className="text-center text-3xl mb-10 text-stone-700"> CHOOSE YOUR ROUTINE </h1>
                <MenuList />
            </div>
        </div>
    </>

    )
}