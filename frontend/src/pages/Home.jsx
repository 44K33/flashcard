import { useState, useEffect } from "react";
import { deckApi, seedApi } from "../services/api";
import DeckList from "../components/DeckList";
import DeckHeader from "../components/DeckHeader";

function Home() {
  // decks = rohe Liste aller Decks vom Server (ungefiltert, unsortiert)
  const [decks, setDecks] = useState([]);
  // sortOrder = aktuelle Sortierrichtung: "asc" (aufsteigend) oder "desc" (absteigend)
  const [sortOrder, setSortOrder] = useState("asc");
  // filterTag = aktuell ausgewählter Filter-Tag, "" = kein Filter aktiv
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

  // Sammelt alle einzigartigen Tags aus allen Decks (für das Filter-Dropdown)
  const allTags = [...new Set(decks.flatMap((deck) => deck.tags))];

  // Zeigt nur Decks, die den aktuell gewählten Tag haben (oder alle, falls kein Filter aktiv)
  const filteredDecks = decks.filter((deck) => {
    if (filterTag === "") return true;
    return deck.tags.includes(filterTag);
  });

  // Sortiert die gefilterten Decks alphabetisch, Richtung je nach sortOrder
  // [...filteredDecks] = Kopie erstellen, damit das Original-Array nicht verändert wird
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
