import { useState } from "react"


function App() {
 const [color ,setColor] =useState("olive")

  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
    <div className="bg">
      <div className=" flex flex-wrap justify-centre shadow-lg gap-3 px-3 py-2 bg-white rounded-3xl">
        <button  
        onClick={ () => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        >Red</button>

        <button
        onClick={ () => setColor("orange")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}
        >orange</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        >blue</button>
          <button 
          onClick={() =>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
        >green</button>
      </div>
    </div>

     


 </div>
     

  )
}

export default App
