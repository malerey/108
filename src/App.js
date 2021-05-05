import './App.css'
// import Button from './components/Button'
import Tarjeta from './components/Tarjeta'
import Contacto from './components/Contacto'
import UsandoExtends from './components/UsandoExtends'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from './styles/theme'

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none
  }

  body {
    font-family: "New Tegomin"
  }
`


function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {/* <Button /> */}
      <Tarjeta nombre="Sol"/>
      <Contacto />

      <UsandoExtends />
    </ThemeProvider>
    </div>
  );
}

export default App;


