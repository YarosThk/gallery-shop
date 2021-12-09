import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300&family=Roboto+Mono:wght@100&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: ${({theme})=> theme.colors.lightBg};
    margin: 0;
    font-family: 'Bebas Neue', cursive;
    font-size:1.15em;
    margin-bottom: 5.2rem;
  }

  img{
    max-width: 100%;
  }
`

export default GlobalStyle