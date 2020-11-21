import dashboards from "../utils/dashboards"
import Kpi from "./Kpi"

export default function Grid() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "100%",
      }}
    >
      {dashboards.map((dashboard) => (
        <Kpi dashboard={dashboard} />
      ))}
    </div>
  )
}
