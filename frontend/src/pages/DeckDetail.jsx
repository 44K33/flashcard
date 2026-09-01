import DeckDetailHeader from "../components/DeckDetailHeader";
import DeckDetailContent from "../components/DeckDetailContent";
import { useParams, useNavigate } from "react-router-dom";
import { deckApi } from "../services/api";
import { useState, useEffect } from "react";

function DeckDetail() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  console.log("Aktuelle Deck-Id:", deckId);

  useEffect(() => {
    // async-Funktion definieren, weil fetch Zeit braucht (Netzwerk-Anfrage)
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
      } catch (error) {
        console.error("Fehler beim Laden der Decks:", error);
      }
    };
    loadDecks();
  }, [deckId]);

  const handleSave = async () => {
    try {
      await deckApi.update(deckId, { title, description });
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
      />
    </main>
  );
}

export default DeckDetail;
