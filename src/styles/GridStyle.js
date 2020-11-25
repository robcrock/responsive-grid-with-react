import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  max-width: 1100px;
  margin: auto;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
export default Grid
