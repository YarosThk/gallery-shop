import { Outlet } from 'react-router';
import { ThemeProvider } from 'styled-components';
import {Header} from './components/Header';
import GlobalStyle from './components/styled/GlobalStyles';


const theme = {
  colors: {
    header: '#fff',
    button: '#52ab28',
    font: '#B8B7B7',
    lightBg: '#c8d8e4',
    darkBg: '#2b6777',

  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <>
        <Header/>
        <Outlet/>
      </>
    </ThemeProvider>
  );
}

export default App;
