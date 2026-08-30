import { useState, useEffect } from "react";
import { deckApi } from "../services/api";
import { useNavigate } from "react-router-dom";

function DeckDetailContent({ deckId }) {
  const [deck, setDeck] = useState(null);
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    try {
      await deckApi.remove(deckId);
      navigate("/");
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  if (!deck) return <p>Lädt...</p>;
  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-3xl mx-auto">
      {/* Deck-Name und Beschreibung */}
      <section className="mb-10 space-y-4">
        <div className="group relative">
          <input
            className="w-full bg-transparent border-none p-0 font-headline-md text-headline-md md:text-display-lg focus:ring-0 focus:outline-none placeholder:text-outline-variant font-bold"
            placeholder="Stapelname..."
            type="text"
            defaultValue={deck.title}
          />
        </div>
        <div className="relative">
          <textarea
            className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface-variant focus:ring-0 transition-all resize-none min-h-[60px]"
            placeholder="Beschreibung hinzufügen..."
            defaultValue={deck.description}
          />
        </div>
      </section>

      {/* Kartenliste */}
      <section className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-bold">
            Inhalt
          </h2>
          <button className="p-1.5 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">sort</span>
          </button>
        </div>

        {/* Beispielkarten */}
        <div className="space-y-3">
          {/* Karte 1 */}
          <div className="group relative bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 hover:border-primary/30 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <textarea
                  className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface focus:ring-0 focus:outline-none resize-none"
                  rows="1"
                  defaultValue="Was ist Long-term Potentiation (LTP)?"
                />
              </div>
              <div className="space-y-1 md:border-l border-outline-variant/20 md:pl-4">
                <textarea
                  className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface-variant focus:ring-0 focus:outline-none resize-none"
                  rows="1"
                  defaultValue="Eine langanhaltende Verstärkung der synaptischen Übertragung."
                />
              </div>
            </div>
            {/* Löschen-Button: erscheint beim Hovern */}
            <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-error-container text-error p-1.5 rounded-full hover:bg-error hover:text-on-error transition-colors shadow-sm cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>
          </div>

          {/* Karte 2 */}
          <div className="group relative bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 hover:border-primary/30 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <textarea
                  className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface focus:ring-0 focus:outline-none resize-none"
                  rows="1"
                  defaultValue="Haupt-Neurotransmitter für exzitatorische Signale?"
                />
              </div>
              <div className="space-y-1 md:border-l border-outline-variant/20 md:pl-4">
                <textarea
                  className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-on-surface-variant focus:ring-0 focus:outline-none resize-none"
                  rows="1"
                  defaultValue="Glutamat."
                />
              </div>
            </div>
            <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-error-container text-error p-1.5 rounded-full hover:bg-error hover:text-on-error transition-colors shadow-sm cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Karte hinzufügen Button */}
        <button className="w-full border border-dashed border-outline-variant/50 rounded-xl py-4 flex items-center justify-center gap-2 text-on-surface-variant hover:bg-surface-container-low hover:border-primary hover:text-primary transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span className="font-label-sm text-label-sm">Karte hinzufügen</span>
        </button>
      </section>

      {/* Danger Zone */}
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
