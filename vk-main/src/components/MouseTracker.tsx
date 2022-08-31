import React, { useEffect, useState } from "react"

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })

  const updateMouse = (e: MouseEvent) => {
    setPositions({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    document.addEventListener("click", updateMouse)
    return () => {
      document.removeEventListener("click", updateMouse)
    }
  }, [])
  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  )
}
export default MouseTracker
