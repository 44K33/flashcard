import { useState, useEffect } from "react";
import { deckApi, seedApi } from "../services/api";
import DeckList from "../components/DeckList";
import DeckHeader from "../components/DeckHeader";

function Home() {
  const [decks, setDecks] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterTag, setFilterTag] = useState("");

  useEffect(() => {
    // async-Funktion definieren, weil fetch Zeit braucht (Netzwerk-Anfrage)
    loadDecks();
  }, []); // leeres Array = nur einmal beim ersten Laden ausführen

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

  const handleDelete = async (id) => {
    try {
      await deckApi.remove(id);
      setDecks(decks.filter((d) => d._id !== id));
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  const handleSeed = async () => {
    if (
      !window.confirm(
        "Achtung: Alle bestehenden Decks und Karten werden gelöscht und durch Beispieldaten ersetzt. Fortfahren?",
      )
    ) {
      return;
    }
    try {
      await seedApi.run();
      loadDecks();
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  const allTags = [...new Set(decks.flatMap((deck) => deck.tags))];
const filteredDecks = decks.filter((deck) => {
  if (filterTag === "") return true;
  return deck.tags.includes(filterTag);
});

const sortedDecks = [...filteredDecks].sort((a, b) => {
  if (sortOrder === "asc") {
    return a.title.localeCompare(b.title);
  } else {
    return b.title.localeCompare(a.title);
  }
});

  return (
    <main className="pt-24 pb-8 px-8 max-w-7xl mx-auto">
      <DeckHeader
  onSeed={handleSeed}
  onSort={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
  allTags={allTags}
  filterTag={filterTag}
  onFilterChange={setFilterTag}
      />
      <DeckList decks={sortedDecks} onDelete={handleDelete} />
    </main>
  );
}

export default Home;
