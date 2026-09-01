function StudyResult({
  deckTitle,
  onRestart,
  onBackToOverview,
  knownCount,
  unknownCount,
  accuracy,
}) {
  const circumference = 2 * Math.PI * 55;

  return (
    <div className="text-center mb-10">
      {/* Icon-Kreis mit Feier-Symbol */}
      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-container text-on-primary-container rounded-full mb-6 shadow-lg transform transition-transform hover:scale-110">
        <span className="material-symbols-outlined text-4xl">celebration</span>
      </div>

      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">
        Glückwunsch!
      </h1>

      <p className="text-on-surface-variant text-body-md font-body-md max-w-lg mx-auto">
        Du hast den Stapel{" "}
        <span className="font-bold text-primary">{deckTitle}</span> erfolgreich
        abgeschlossen.
      </p>

      {/* Äusseres Grid: 2 Spalten (Kreis links, Karten rechts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kreis-Chart-Karte (linke Spalte) */}
        <div className="bento-card p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center">
          <h3 className="font-headline-md text-headline-md mb-6">Ergebnis</h3>
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* svg = Container für Vektorgrafiken, -rotate-90 = Kreis startet oben (12-Uhr-Position) statt rechts (3-Uhr) */}
            <svg className="w-full h-full -rotate-90">
              {/* Hintergrund-Kreis: komplett grau, das ist die "leere" Bahn */}
              <circle
                className="stroke-surface-container-high fill-none"
                cx="112"
                cy="112"
                r="55"
                strokeWidth="8"
              />
              {/* Fortschritts-Kreis: liegt genau über dem grauen, wird aber nur teilweise "gezeichnet" */}
              <circle
                className="stroke-primary fill-none"
                cx="112"
                cy="112"
                r="55"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 345.6,
                  strokeDashoffset:
                    circumference - (circumference * accuracy) / 100,
                }}
              />
            </svg>

            {/* Text in der Mitte, absolut positioniert über dem SVG */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">
                {accuracy}%
              </span>
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wide">
                Genauigkeit
              </span>
            </div>
          </div>
        </div>

        {/* Statistik-Block: rechte Spalte mit Gewusst/Nicht gewusst */}
        {/* grid-rows-2 = zwei Reihen übereinander, gap-6 = Abstand dazwischen */}
        <div className="grid grid-rows-2 gap-6">
          {/* Karte "Gewusst" */}
          {/* bento-card = eigene CSS-Klasse aus index.css, macht den halbtransparenten "Glas"-Effekt */}
          <div className="bento-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center gap-6">
            {/* Icon-Box: grüner Hintergrund für "richtig" */}
            <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">
                task_alt
              </span>
            </div>

            <div>
              <p className="text-on-surface-variant font-label-sm text-label-sm">
                Gewusst
              </p>
              {/* text-secondary = grüne Farbe für die Zahl */}
              <p className="text-display-lg-mobile font-display-lg-mobile text-secondary">
                {knownCount}{" "}
                <span className="text-body-md font-body-md opacity-60">
                  Karten
                </span>
              </p>
            </div>
          </div>

          {/* Karte "Nicht gewusst" */}
          <div className="bento-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center gap-6">
            {/* Icon-Box: rötlicher Hintergrund für "falsch" */}
            <div className="w-14 h-14 bg-error-container text-on-error-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">close</span>
            </div>

            <div>
              <p className="text-on-surface-variant font-label-sm text-label-sm">
                Nicht gewusst
              </p>
              {/* text-error = rote Farbe für die Zahl */}
              <p className="text-display-lg-mobile font-display-lg-mobile text-error">
                {unknownCount}{" "}
                <span className="text-body-md font-body-md opacity-60">
                  Karten
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action-Buttons: Nochmal lernen / Zurück zur Übersicht */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
        <button
          onClick={onRestart}
          className="w-full md:w-auto min-w-[220px] bg-primary text-on-primary py-4 px-8 rounded-xl font-headline-md text-headline-md shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined">restart_alt</span>
          Nochmal lernen
        </button>
        <button
          onClick={onBackToOverview}
          className="w-full md:w-auto min-w-[220px] bg-surface-container-high text-on-surface py-4 px-8 rounded-xl font-headline-md text-headline-md transition-all duration-200 hover:bg-surface-container-highest active:scale-95 flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined">dashboard</span>
          Zurück zur Übersicht
        </button>
      </div>
    </div>
  );
}

export default StudyResult;
