import Popup from "./components/popup";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled-components/global";

const theme = {
  colors: "#f6f6f6",
};

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <main className="container">
          <p>This is PoppinsLatin-Regular font</p>
          <p>
            This is{" "}
            <span className="PoppinsLatin-Black">PoppinsLatin-Black</span> font
          </p>
          <Popup />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
