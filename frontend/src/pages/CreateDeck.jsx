import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deckApi } from "../services/api";

function CreateDeck() {
  // State für die beiden Formularfelder
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useNavigate = ermöglicht programmatisches Navigieren (z.B. nach dem Erstellen zurück zur Home-Seite)
  const navigate = useNavigate();

  // handleSubmit wird beim Klick auf "Stapel erstellen" ausgeführt
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await deckApi.create({ title, description });

      const data = response.data;
      console.log("Deck erstellt:", data);

      navigate("/");
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  return (
    // pt-24 = Platz für den fixierten Header oben
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header: nur Logo + X-Button, keine normale Navbar */}
      <header className="bg-background fixed top-0 w-full z-50 transition-all duration-200 ease-in-out">
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <Link
            to="/"
            className="font-headline-md text-headline-md font-bold text-primary"
          >
            FlashLearn
          </Link>
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Abbrechen"
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto w-full">
          {/* Kleiner Kontext-Hinweis oben */}
          <nav className="mb-6">
            <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
              Lernsystem
            </span>
          </nav>

          {/* Titel und Beschreibung */}
          <section className="mb-10">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">
              Neuen Stapel erstellen
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Organisiere dein Wissen in klaren Kategorien. Ein guter Name hilft
              dir, den Fokus zu behalten.
            </p>
          </section>

          {/* Formular-Karte */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-6 md:p-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Name des Stapels */}
              <div className="space-y-2">
                <label
                  htmlFor="stackName"
                  className="block font-label-sm text-label-sm text-on-surface font-semibold"
                >
                  Name des Stapels
                </label>
                <input
                  id="stackName"
                  type="text"
                  required
                  placeholder="z.B. Anatomie Grundlagen"
                  // value + onChange = kontrolliertes Input-Feld, React kennt immer den aktuellen Wert
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-body-md font-body-md transition-all placeholder:text-outline focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Beschreibung */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="stackDesc"
                    className="block font-label-sm text-label-sm text-on-surface font-semibold"
                  >
                    Beschreibung
                  </label>
                  <span className="font-caption text-caption text-outline-variant">
                    Optional
                  </span>
                </div>
                <textarea
                  id="stackDesc"
                  rows="4"
                  placeholder="Worum geht es in diesem Stapel? (z.B. Vorbereitung auf das Testat im Dezember)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-body-md font-body-md transition-all placeholder:text-outline resize-none focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Trennlinie + Buttons */}
              <div className="pt-4 border-t border-surface-variant flex flex-col md:flex-row justify-end gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-6 py-3 rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all active:scale-95 cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-on-primary rounded-full font-label-sm text-label-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Stapel erstellen</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Deko-Element, rein optisch */}
          <div className="mt-16 flex justify-center opacity-20 select-none pointer-events-none">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary transform rotate-12"></div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed transform -rotate-6"></div>
              <div className="w-12 h-12 rounded-xl bg-tertiary transform rotate-3"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateDeck;
