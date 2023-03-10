import { ThemeProvider } from "@mui/material";
import LandingPage from "./pages/LandingPage/LandingPage";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
