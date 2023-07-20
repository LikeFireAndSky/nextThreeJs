import Link from "next/link"
import PodPage from "./treePage"

export default function Page() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-screen">
      <div className = "flex flex-col justify-center items-center w-full h-1/2">
        <h2 className=" font-thin text-slate-50 text-sm">SAVE YOU TIME AS FAST AS YOU CAN</h2>
        <div className="flex flex-col items-center w-3/4 sm:w-1/2 sm:h-{500px}">
          <h1 className=" text-slate-200 text-center font-bold text-xl">WELCOME TO THE TREED</h1>
          <PodPage />
        </div>
      </div>
    </div>
  )
}