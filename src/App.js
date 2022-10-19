import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import CharacterDetails from "./components/CharacterList/CharacterDetails/CharacterDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-main">
      <NavBar />
      <Routes>
        <Route path="/characters-list" element={<CharacterList />}  />
        <Route path="/character/:id" element={<CharacterDetails/>} />
        <Route path="/about" element={<About />}  />
      </Routes>
    </div>
  );
}

export default App;
