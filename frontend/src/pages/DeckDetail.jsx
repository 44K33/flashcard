import DeckDetailHeader from "../components/DeckDetailHeader";
import DeckDetailContent from "../components/DeckDetailContent";
import { useParams, useNavigate } from "react-router-dom";
import { deckApi } from "../services/api";
import { useState, useEffect } from "react";

function DeckDetail() {
  // deckId = wird aus der URL gelesen (z.B. bei /decks/64a2f... ist deckId = "64a2f...")
  const { deckId } = useParams();
  // deck = das komplette, unbearbeitete Deck-Objekt vom Server, null solange noch nichts geladen wurde
  const [deck, setDeck] = useState(null);
  // title/description/tags = die aktuellen Werte der Eingabefelder (zum Bearbeiten)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  console.log("Aktuelle Deck-Id:", deckId);

  useEffect(() => {
    // async-Funktion definieren, weil fetch Zeit braucht (Netzwerk-Anfrage)
    // lädt genau EIN Deck (nicht mehrere, trotz des Namens loadDecks)
    const loadDecks = async () => {
      try {
        // Anfrage an den Server schicken
        const response = await deckApi.getById(deckId);
        // Antwort als JSON umwandeln
        const data = response.data;
        // Ergebnis im State speichern
        setDeck(data);
        setTitle(data.title);
        setDescription(data.description);
        // .join(", ") wandelt das Array (z.B. ["Mathematik", "Grundlagen"]) in einen Text um,
        // damit er im Eingabefeld angezeigt werden kann
        setTags(data.tags.join(", "));
      } catch (error) {
        console.error("Fehler beim Laden der Decks:", error);
      }
    };
    loadDecks();
  }, [deckId]);

  // handleSave wird beim Klick auf Speichern ausgeführt
  // wandelt den Tags-Text zurück in ein Array und schickt alle Änderungen ans Backend
  const handleSave = async () => {
    try {
      const tagsArray = tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);
      await deckApi.update(deckId, { title, description, tags: tagsArray });
      navigate("/");
    } catch (error) {
      console.error("Fehler:", error);
    }
  };
  return (
    <main>
      <DeckDetailHeader onSave={handleSave} />
      <DeckDetailContent
        deckId={deckId}
        deck={deck}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        tags={tags}
        setTags={setTags}
      />
    </main>
  );
}

export default DeckDetail;
