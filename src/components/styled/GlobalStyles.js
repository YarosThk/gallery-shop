import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    font-size:10px;
  }

  body {
    background: ${({theme})=> theme.colors.body};
    margin: 0;
    font-family: 'Montserrat', 'Lato', sans-serif;
  }

  img{
    max-width: 100%;
  }

  li{
    list-style: none;
  }
`

export default GlobalStyle