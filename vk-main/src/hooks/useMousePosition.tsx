import { useEffect, useState } from "react"

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })

  const updateMouse = (e: MouseEvent) => {
    setPositions({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    document.addEventListener("mousemove", updateMouse)
    return () => {
      document.removeEventListener("mousemove", updateMouse)
    }
  }, [])

  return positions
}

export default useMousePosition