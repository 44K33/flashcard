import StudyMode from "../components/StudyMode";
import StudyHeader from "../components/StudyHeader";
import StudyCard from "../components/StudyCard";
import StudyControls from "../components/StudyControls";

function Study() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StudyHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-32">
        <StudyCard />
        <StudyControls />
      </div>
    </div>
  );
}

export default Study;
