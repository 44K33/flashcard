import { useState, useEffect } from "react";
import { deckApi } from "../services/api";
import DeckList from "../components/DeckList";
import DeckHeader from "../components/DeckHeader";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    // async-Funktion definieren, weil fetch Zeit braucht (Netzwerk-Anfrage)
    const loadDecks = async () => {
      try {
        // Anfrage an den Server schicken
        const response = await deckApi.getAll();
        // Antwort als JSON umwandeln
        const data = response.data;
        // Ergebnis im State speichern
        setDecks(data);
      } catch (error) {
        console.error("Fehler beim Laden der Decks:", error);
      }
    };

    loadDecks();
  }, []); // leeres Array = nur einmal beim ersten Laden ausführen

  return (
    <main className="pt-24 pb-8 px-8 max-w-7xl mx-auto">
      <DeckHeader />
      <DeckList decks={decks} />
    </main>
  );
}

export default Home;
