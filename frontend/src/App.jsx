import { Route, Routes, useLocation } from "react-router-dom";
import DeckDetail from "./pages/DeckDetail";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Navbar from "./components/Navbar";

function App() {
  // useLocation = gibt die aktuelle URL zurück
  const location = useLocation();

  // isStudy = true wenn wir auf /study sind, sonst false
  const isStudy = location.pathname === "/study";

  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar nur anzeigen wenn nicht auf der Study-Seite */}
      {!isStudy && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/:deckId" element={<DeckDetail />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default App;
