import GridStyle from "../styles/GridStyle"
import { v4 as uuidv4 } from "uuid"
import Card from "./Card"

const dashboards = [
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi1",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi2",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi3",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi4",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi5",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi6",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi7",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi8",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi9",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi10",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi11",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi12",
]

export default function Grid() {
  return (
    <GridStyle>
      {dashboards.map((dashboard) => (
        <Card key={uuidv4()} dashboard={dashboard} />
      ))}
    </GridStyle>
  )
}
