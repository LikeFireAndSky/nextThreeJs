import Fiber from "./page copy"

export default function Page() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-screen">
      <div className = "flex flex-col justify-center items-center w-full">
        <h2>Welcome to the Container Island</h2>
        <div className="flex flex-col w-5/6">
          <Fiber />
        </div>
      </div>
    </div>
  )
}