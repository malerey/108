import styled from 'styled-components'
import { ContainerCentrado, Flex } from './Commons'

const ContainerCentradoRojo = styled(ContainerCentrado)`
background-color: red;
`

const UsandoExtends = () => {
  return (
    <Flex
    flexDirection="column"
    justifyContent="center"
    // alignItems="flex-end"
    // flexWrap="no-wrap"
    >
      <h2>Usando extends</h2>
    <ContainerCentradoRojo>
      <h3>Quiero estar centrado</h3>
      <h3>Yo tambien</h3>
      <h3>Yo tambien 3 </h3>
    </ContainerCentradoRojo>
    </Flex>
  )
}

export default UsandoExtends
