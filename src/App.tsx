import { Header } from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />;
    </ThemeProvider>
  );
}

export default App;
