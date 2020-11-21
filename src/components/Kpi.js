import { useRef, useState, useEffect } from "react"

const { tableau } = window

export default function Kpi({ dashboard }) {
  const ref = useRef(null)
  const [viz, setViz] = useState(null)

  useEffect(() => {
    console.dir("Loading " + dashboard)
    setViz(
      new tableau.Viz(ref.current, `${dashboard}`, {
        hideTabs: true,
        hideToolbar: true,
        width: "500px",
        height: "300px",
      })
    )
    return () => viz.dispose()
  }, [])

  return <div className="__kpi_dashboard" ref={ref} />
}
