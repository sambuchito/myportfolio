import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
