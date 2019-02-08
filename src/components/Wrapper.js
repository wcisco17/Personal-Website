import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${props => props.theme.maxWidth}) 1fr;
  padding: 2.3rem 1rem;
  overflow: hidden;
  
`


export {
  Wrapper
}