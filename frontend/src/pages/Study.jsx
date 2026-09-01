import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudyHeader from "../components/StudyHeader";
import StudyCard from "../components/StudyCard";
import StudyControls from "../components/StudyControls";
import StudyResult from "../components/StudyResult";
import { deckApi, cardApi } from "../services/api";

function Study() {
  // isFlipped = false: Frage sichtbar / true: Antwort sichtbar
  const [isFlipped, setIsFlipped] = useState(false);

  // isFinished = true, sobald der "Stapel" fertig gelernt ist
  const [isFinished, setIsFinished] = useState(false);

  // cards = speichert die Liste aller Karten, die zum aktuellen Deck gehören
  // Start: leeres Array, bis die echten Daten vom Server da sind
  const [cards, setCards] = useState([]);

  // currentIndex = merkt sich, bei welcher Karte (Position im Array) man gerade ist
  // Start: 0 = die erste Karte im Array
  const [currentIndex, setCurrentIndex] = useState(0);

  const [deck, setDeck] = useState(null);

  const navigate = useNavigate();

  // deckId = wird aus der URL gelesen (z.B. bei /study/64a2f... ist deckId = "64a2f...")
  // Das Frontend weiss dadurch, für welches Deck die Karten geladen werden müssen
  const { deckId } = useParams();
  console.log(deckId);

  // useEffect lädt automatisch alle Karten des aktuellen Decks,
  // sobald die Seite geladen wird ODER sich deckId in der URL ändert
  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await cardApi.getByDeck(deckId);
        setCards(response.data);
      } catch (error) {
        console.error("Fehler beim Laden der Karten:", error);
      }
    };

    loadCards();
    // [deckId] = führe diesen Code erneut aus, sobald sich deckId in der URL ändert
  }, [deckId]);

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
      } catch (error) {
        console.error("Fehler beim Laden der Decks:", error);
      }
    };
    loadDecks();
  }, [deckId]);

  // handleRate wird aufgerufen, wenn eine Bewertung angeklickt wird
  const handleRate = () => {
    setIsFlipped(false);

    // Zähler erhöhen
    const nextIndex = currentIndex + 1;

    // Platzhalter-Regel: nach 3 Bewertungen gilt der Stapel als fertig gelernt
    if (nextIndex >= cards.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  // handleRestart setzt alles zurück, um nochmal von vorne zu lernen
  const handleRestart = () => {
    setIsFinished(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="h-screen bg-surface flex flex-col">
      <StudyHeader deckTitle={deck?.title} />
      <div className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-32">
        {isFinished ? (
          // Sobald fertig: Ergebnis-Seite statt Karte + Controls
          <StudyResult
            deckTitle={deck?.title}
            onRestart={handleRestart}
            onBackToOverview={() => navigate("/")}
          />
        ) : currentCard ? (
          <>
            {/* isFlipped wird als Prop weitergegeben */}
            <StudyCard
              isFlipped={isFlipped}
              currentCard={currentCard}
              currentIndex={currentIndex}
              totalCards={cards.length}
            />
            {/* setIsFlipped wird als Prop weitergegeben damit Controls den State ändern können */}
            <StudyControls
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              onRate={handleRate}
            />
          </>
        ) : (
          <p className="text-on-surface-variant">Lade Karten...</p>
        )}
      </div>
    </div>
  );
}

export default Study;
