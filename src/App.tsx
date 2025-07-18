import { Header } from './components/Header';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';

const MainSection = styled.main`
  height: 100vh;
  width: 100vw;

  padding-top: 7.5rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainSection />
    </ThemeProvider>
  );
}

export default App;
