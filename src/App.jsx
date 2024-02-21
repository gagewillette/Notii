import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./js/pages/home";
import NotesEditor from "./js/pages/notes";
import NotFound from "./js/pages/notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NotesEditor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
