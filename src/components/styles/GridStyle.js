import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  max-width: 1000px;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`
export default Grid
