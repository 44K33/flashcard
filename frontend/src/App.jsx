import { Link, Route, Routes } from "react-router-dom";
import DeckDetail from "./pages/DeckDetail";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/:deckId" element={<DeckDetail />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default App;
