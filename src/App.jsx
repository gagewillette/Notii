import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./js/pages/home";
import NotesEditor from "./js/pages/notes";
import NotFound from "./js/pages/notfound";
import SignIn from "./js/pages/signin";

function App() {

  //this is so that when the user clicks get started,
  //if they have a valid uuid, then they go to notes page
  //if not, they go to signin
  localStorage.clear();
  localStorage.setItem("UUID", "");


  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NotesEditor />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
