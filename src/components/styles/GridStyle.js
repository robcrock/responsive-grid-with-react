import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  max-width: 1200px;
  margin: auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
export default Grid
