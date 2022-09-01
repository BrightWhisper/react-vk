import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import LikeButton from "./components/LikeButton"
// import MouseTracker from "./components/MouseTracker"
// import useMousePosition from "./hooks/useMousePosition"
// import useUrlLoader from "./hooks/useUrlLoader"

interface DogShowResult {
  message: string
  status: string
}

interface ThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: ThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
}

export const ThemeContext = React.createContext(themes.light)

function App() {
  const [show, setShow] = useState(true)
  // const [data, loading] = useUrlLoader(
  //   "https://dog.ceo/api/breeds/image/random",
  //   [show]
  // )

  // const dogResult = data as DogShowResult

  // const positions = useMousePosition()
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => setShow(!show)}>fwfwfwfw</button>
          {show && <LikeButton></LikeButton>}
          {/* {loading ? <p>读取中</p> : <img src={dogResult && dogResult.message} />} */}
          {/* <p>
          X: {positions.x}, Y: {positions.y}
        </p> */}
          {/* <LikeButton></LikeButton>
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          Toggle Traker
        </button>
        {show && <MouseTracker></MouseTracker>} */}
        </header>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
