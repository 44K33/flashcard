import { useState } from "react";
import StudyHeader from "../components/StudyHeader";
import StudyCard from "../components/StudyCard";
import StudyControls from "../components/StudyControls";

function Study() {
  // isFlipped = false: Frage sichtbar / true: Antwort sichtbar
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-screen bg-surface flex flex-col">
      <StudyHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-32">
        {/* isFlipped wird als Prop weitergegeben */}
        <StudyCard isFlipped={isFlipped} />
        {/* setIsFlipped wird als Prop weitergegeben damit Controls den State ändern können */}
        <StudyControls isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </div>
    </div>
  );
}

export default Study;
