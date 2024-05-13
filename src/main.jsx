import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./app.scss";
import { NotesProvider } from "./js/contexts/notes_provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);
