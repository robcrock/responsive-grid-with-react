import dashboards from "../utils/dashboards"
import Card from "./Card"
import GridStyle from "../styles/GridStyle"
import { v4 as uuidv4 } from "uuid"

export default function Grid() {
  return (
    <GridStyle>
      {dashboards.map((dashboard) => (
        <Card key={uuidv4()} dashboard={dashboard} />
      ))}
    </GridStyle>
  )
}
