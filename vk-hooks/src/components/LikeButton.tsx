import React, { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../App"

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const { color, background } = useContext(ThemeContext)

  const style = {
    color,
    background,
  }

  useEffect(() => {
    if (didMountRef.current) {
      console.log("mounted")
    } else {
      didMountRef.current = true
    }
  })

  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  const handleAlertClick = () => {
    setTimeout(() => {
      console.log("click on", likeRef.current)
    }, 3000)
  }

  return (
    <>
      <input type="text" ref={domRef} />
      <button
        style={style}
        onClick={() => {
          setLike(like + 1)
          likeRef.current++
        }}
      >
        {like}👍
      </button>
      <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
      <button onClick={() => handleAlertClick()}>clclclclclc</button>
    </>
  )
}

export default LikeButton
