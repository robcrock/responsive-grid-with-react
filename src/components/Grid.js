import dashboards from "../utils/dashboards"
import Card from "./Card"
import GridStyle from "./styles/GridStyle"

export default function Grid() {
  return (
    <GridStyle>
      {dashboards.map((dashboard) => (
        <Card dashboard={dashboard} />
      ))}
    </GridStyle>
  )
}
