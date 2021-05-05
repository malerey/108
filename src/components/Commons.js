import styled from "styled-components"

export const ContainerCentrado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || "flex-start"};
  flex-wrap: ${props => props.flexWrap}
`

export const List = styled.ul`
  list-style: none;
  padding: 0;

`

export const ListItem = styled.li`
  width: 100%;
`

// componentes mas comunes:
// Title.h1

// SecondaryTitle.h2

// Text.p

// Image.img 

// ImageContainer 

// Link.a {

// }
