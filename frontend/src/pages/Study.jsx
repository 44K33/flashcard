import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudyHeader from "../components/StudyHeader";
import StudyCard from "../components/StudyCard";
import StudyControls from "../components/StudyControls";
import StudyResult from "../components/StudyResult";

function Study() {
  // isFlipped = false: Frage sichtbar / true: Antwort sichtbar
  const [isFlipped, setIsFlipped] = useState(false);

  // isFinished = true, sobald der "Stapel" fertig gelernt ist
  const [isFinished, setIsFinished] = useState(false);

  // clickCount = Platzhalter-Zähler, bis echte Karten vom Backend kommen
  // zählt wie oft eine Bewertung (Nochmal/Gut/Einfach) angeklickt wurde
  const [clickCount, setClickCount] = useState(0);

  const navigate = useNavigate();

  // handleRate wird aufgerufen, wenn eine Bewertung angeklickt wird
  const handleRate = () => {
    setIsFlipped(false);

    // Zähler erhöhen
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Platzhalter-Regel: nach 3 Bewertungen gilt der Stapel als fertig gelernt
    if (newCount >= 3) {
      setIsFinished(true);
    }
  };

  // handleRestart setzt alles zurück, um nochmal von vorne zu lernen
  const handleRestart = () => {
    setIsFinished(false);
    setClickCount(0);
    setIsFlipped(false);
  };

  return (
    <div className="h-screen bg-surface flex flex-col">
      <StudyHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-32">
        {isFinished ? (
          // Sobald fertig: Ergebnis-Seite statt Karte + Controls
          <StudyResult
            onRestart={handleRestart}
            onBackToOverview={() => navigate("/")}
          />
        ) : (
          <>
            {/* isFlipped wird als Prop weitergegeben */}
            <StudyCard isFlipped={isFlipped} />
            {/* setIsFlipped wird als Prop weitergegeben damit Controls den State ändern können */}
            <StudyControls
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              onRate={handleRate}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Study;
