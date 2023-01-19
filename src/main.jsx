import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.scss";
import { LanguageProvider } from "./context/LanguageProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
