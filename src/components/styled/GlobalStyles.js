import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

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
    font-family: 'Montserrat', sans-serif;
    font-size:1.15em;
    margin-bottom: 5.2rem;
  }

  img{
    max-width: 100%;
  }

  li{
    list-style: none;
  }
`

export default GlobalStyle