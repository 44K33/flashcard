import { Link, Route, Routes } from "react-router-dom";
import DeckDetail from "./pages/DeckDetail";
import Home from "./pages/Home";
import Study from "./pages/Study";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/decks/1">Deck Detail</Link> |{" "}
        <Link to="/study">Study</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/:deckId" element={<DeckDetail />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </>
  );
}

export default App;
