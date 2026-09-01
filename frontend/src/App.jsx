import { Route, Routes, useLocation } from "react-router-dom";
import DeckDetail from "./pages/DeckDetail";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Navbar from "./components/Navbar";
import CreateDeck from "./pages/CreateDeck";
import Login from "./pages/Login";

function App() {
  // useLocation = gibt die aktuelle URL zurück
  const location = useLocation();

  // isStudy = true wenn wir auf /study sind, sonst false
  const isStudy = location.pathname.startsWith("/study");
  // isCreateDeck = true wenn wir auf /decks/new sind, sonst false
  const isCreateDeck = location.pathname === "/decks/new";
  // isLogin = true wenn wir auf /login sind, sonst false
  const isLogin = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar nur anzeigen wenn wir auf keiner der beiden fokussierten Seiten sind */}
      {!isStudy && !isCreateDeck && !isLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/new" element={<CreateDeck />} />
        <Route path="/decks/:deckId" element={<DeckDetail />} />
        <Route path="/study/:deckId" element={<Study />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
