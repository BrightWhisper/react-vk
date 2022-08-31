import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import LikeButton from "./components/LikeButton"
import MouseTracker from "./components/MouseTracker"
import useMousePosition from "./hooks/useMousePosition"

function App() {
  const [show, setShow] = useState(true)

  const positions = useMousePosition()
  // window.addEventListener('message',(event)=>{
  //   console.log(event)
  // })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          X: {positions.x}, Y: {positions.y}
        </p>
        <LikeButton></LikeButton>
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          Toggle Traker
        </button>
        {show && <MouseTracker></MouseTracker>}
      </header>
    </div>
  )
}

export default App
