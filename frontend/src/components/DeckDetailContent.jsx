import { useState, useEffect } from "react";
import { deckApi, cardApi } from "../services/api";
import { useNavigate } from "react-router-dom";
import CardForm from "./CardForm";

function DeckDetailContent({
  deckId,
  deck,
  title,
  description,
  setTitle,
  setDescription,
  tags,
  setTags,
}) {
  // cards = alle Karten, die zu diesem Deck gehören
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  // showForm = true, wenn das Formular zum Hinzufügen einer neuen Karte sichtbar sein soll
  const [showForm, setShowForm] = useState(false);
  // sortOrder = aktuelle Sortierrichtung der Karten (nach der Frage), "asc" oder "desc"
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    // async-Funktion definieren, weil fetch Zeit braucht (Netzwerk-Anfrage)
    // lädt alle Karten dieses einen Decks (nicht mehrere Decks, trotz des Namens loadDecks)
    const loadDecks = async () => {
      try {
        // Anfrage an den Server schicken
        const response = await cardApi.getByDeck(deckId);
        // Antwort als JSON umwandeln
        const data = response.data;
        // Ergebnis im State speichern
        setCards(data);
      } catch (error) {
        console.error("Fehler beim Laden der Decks:", error);
      }
    };
    loadDecks();
  }, [deckId]);

  // handleDelete löscht das ganze Deck (inkl. aller Karten, das übernimmt das Backend)
  // und navigiert danach zurück zur Startseite
  const handleDelete = async () => {
    try {
      await deckApi.remove(deckId);
      navigate("/");
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  // handleDeleteCard löscht eine einzelne Karte und entfernt sie danach auch lokal aus dem State
  const handleDeleteCard = async (cardId) => {
    try {
      await cardApi.remove(cardId);
      setCards(cards.filter((c) => c._id !== cardId));
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  // handleCreateCard wird vom CardForm aufgerufen, sobald eine neue Karte erstellt wurde
  // payload enthält question/answer, deckId wird hier zusätzlich ergänzt, damit die Karte richtig zugeordnet wird
  const handleCreateCard = async (payload) => {
    try {
      const response = await cardApi.create({ ...payload, deck: deckId });
      // Die neue Karte wird zusätzlich zu den bestehenden Karten im State ergänzt
      setCards([...cards, response.data]);
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  // Sortiert die Karten alphabetisch nach der Frage, Richtung je nach sortOrder
  // [...cards] = Kopie erstellen, damit das Original-Array nicht verändert wird
  const sortedCards = [...cards].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.question.localeCompare(b.question);
    } else {
      return b.question.localeCompare(a.question);
    }
  });

  // Solange das Deck noch nicht geladen ist (null), zeige nur einen Lade-Hinweis
  if (!deck) return <p>Lädt...</p>;

  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-3xl mx-auto">
      {/* Deck-Name und Beschreibung */}
      <section className="mb-10 space-y-4">
        <div className="group relative">
          <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-bold">
            Titel
          </h2>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors font-headline-md text-headline-md md:text-display-lg focus:outline-none placeholder:text-outline-variant font-bold"
            placeholder="Stapelname..."
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="relative">
          <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-bold">
            Beschreibung
          </h2>
          <textarea
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors font-body-md text-body-md text-on-surface-variant focus:outline-none resize-none min-h-[60px]"
            placeholder="Beschreibung hinzufügen..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="relative">
          <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-bold">
            Tag
          </h2>
          <input
            type="text"
            placeholder="Tags (mit Komma getrennt)..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors font-body-md text-body-md text-on-surface-variant focus:outline-none"
          />
        </div>
      </section>

      {/* Kartenliste */}
      <section className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-bold">
            Inhalt
          </h2>
          {/* Sortier-Button: schaltet zwischen aufsteigend/absteigend um */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="p-1.5 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">sort</span>
          </button>
        </div>

        {/* Liste aller Karten dieses Decks, sortiert nach sortOrder */}
        <div className="space-y-3">
          {sortedCards.map((card) => (
            <div
              key={card._id}
              className="group relative bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 hover:border-primary/30 transition-all duration-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  {/* defaultValue statt value: hier nur zum Anzeigen, kein Bearbeiten der bestehenden Karte vorgesehen */}
                  <textarea
                    className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface focus:ring-0 focus:outline-none resize-none"
                    rows="1"
                    defaultValue={card.question}
                  />
                </div>
                <div className="space-y-1 md:border-l border-outline-variant/20 md:pl-4">
                  <textarea
                    className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface-variant focus:ring-0 focus:outline-none resize-none"
                    rows="1"
                    defaultValue={card.answer}
                  />
                </div>
              </div>
              {/* Löschen-Button: erscheint beim Hovern (group/group-hover), löscht diese eine Karte */}
              <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleDeleteCard(card._id)}
                  className="bg-error-container text-error p-1.5 rounded-full hover:bg-error hover:text-on-error transition-colors shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button öffnet das Formular zum Erstellen einer neuen Karte (CardForm) */}
        <button
          onClick={() => setShowForm(true)}
          className="w-full border border-dashed border-outline-variant/50 rounded-xl py-4 flex items-center justify-center gap-2 text-on-surface-variant hover:bg-surface-container-low hover:border-primary hover:text-primary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span className="font-label-sm text-label-sm">Karte hinzufügen</span>
        </button>

        {/* Formular wird nur angezeigt, wenn showForm true ist */}
        {showForm && (
          <CardForm
            onCreate={handleCreateCard}
            onCancel={() => setShowForm(false)}
          />
        )}
      </section>

      {/* Danger Zone: Deck komplett löschen */}
      <section className="mt-20 pt-10 border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-6 rounded-xl border border-error/20 bg-error/5">
          <div className="text-center md:text-left">
            <h3 className="font-label-sm text-label-sm font-bold text-error uppercase tracking-wider">
              Deck löschen
            </h3>
            <p className="text-caption text-on-surface-variant">
              Diese Aktion kann nicht rückgängig gemacht werden.
            </p>
          </div>
          <button
            onClick={handleDelete}
            className="text-error border border-error/30 hover:bg-error hover:text-on-error px-5 py-2 rounded-lg font-label-sm text-label-sm transition-all duration-200 cursor-pointer"
          >
            Stapel endgültig entfernen
          </button>
        </div>
      </section>
    </div>
  );
}

export default DeckDetailContent;
