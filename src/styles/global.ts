import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --tituloh1: #fff;
    --paragrafo: #fff;
    --resposta: #fff;
    --bg-button: #1ca6ed;
    --bg-button2: #0a1032;
    --border-verde: #36B37E;
    --strong: #1ca6ed;
  }

  body {
    background-image: url('/images/Constellations.jpg');
    background-size: cover;
    background-repeat: no-repeat;

  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
  }
`