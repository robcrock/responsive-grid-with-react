import { useRef, useEffect } from "react"
import CardStyle from "../styles/CardStyle"

const { tableau } = window

export default function Card({ dashboard }) {
  const ref = useRef(null)

  useEffect(() => {
    const viz = new tableau.Viz(ref.current, `${dashboard}`, {
      hideTabs: true,
      hideToolbar: true,
      width: "290px",
      height: "180px",
    })

    return viz;
  })

  return (
    <CardStyle>
      <div ref={ref} />
    </CardStyle>
  )
}
