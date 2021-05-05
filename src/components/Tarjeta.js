import styled from 'styled-components'

// Styled Components
// CSS in JS

// CSS critico automatico 
// Bugs nombres de clases 
// Encontrar mas facil el CSS
// Estilado dinamico 

const Boton = styled.button`
  background-color: blue;
  border: ${({ primario }) => primario ? '2px solid red' : 'none'};
  color: ${({ theme }) => theme.primary};
  font-size: ${props => props.theme.sizes.p};
  font-family: ${props => props.theme.fonts.families.button};
  
  &:hover {
    background-color: white;
    color: blue;
  }

  @media (max-width: ${props => props.theme.breakpoints.small}) {
    background-color: red
  }
`;

const BotonComprar = styled(Boton)`
color: pink;
margin: 20px
`

// extend

const Titulo = styled.h2`
  color: orange;
  border: 2px spotted green;
`;

const TarjetaContainer = styled.article`
  border: 1px solid black;
  
  @media (max-width: 1000px) {
    border: 2px solid red;
    background-color: yellow;
  }

  @media (max-width: 600px) {
    border: 2px solid green;
    background-color: blue;
  }

`;

const Tarjeta = ({nombre}) => {

  console.log(nombre)

  const handleClick = () => {
    console.log("hola")
  }


  return (
    <TarjetaContainer>
      <Titulo>Hola</Titulo>
      <Boton primario onClick={handleClick} >Hola</Boton>
      <Boton>Chau</Boton>
      <BotonComprar>Comprar</BotonComprar>
    </TarjetaContainer>
  )
}

export default Tarjeta
