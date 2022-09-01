import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";

import Advertising from "./components/Advertising";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";

import GlobalStyle from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Home toogleTheme={toogleTheme} />
      <main>
        <Advertising />
        <Products />
      </main>
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
