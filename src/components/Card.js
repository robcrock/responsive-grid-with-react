import { useRef, useState, useEffect } from "react"
import CardStyle from "../styles/CardStyle"

const { tableau } = window

export default function Card({ dashboard }) {
  const ref = useRef(null)
  const [viz, setViz] = useState(null)

  useEffect(() => {
    console.dir("Loading " + dashboard)

    setViz(
      new tableau.Viz(ref.current, `${dashboard}`, {
        hideTabs: true,
        hideToolbar: true,
        width: "290px",
        height: "180px",
      })
    )

    return () => viz.dispose()
  }, [])

  return (
    <CardStyle>
      <div ref={ref} />
    </CardStyle>
  )
}
