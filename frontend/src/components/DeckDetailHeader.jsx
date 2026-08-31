import { useNavigate } from "react-router-dom";

function DeckDetailHeader() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px:4 md:px-8 h-16 bg-surface border-b border-outline-variant/30">
      <div className="flex items-center gap-4 cursor-pointer">
        <button
          onClick={() => navigate(-1)}
          className="transition-all duration-200 active:scale-95 text-on-surface-variant hover:text-primary"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-headline-md text-headline-md font-bold text-primary">
          FlashLearn
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm transition-all duration-200 active:scale-95 hover:opacity-90 cursor-pointer">
          Speichern
        </button>
      </div>
    </header>
  );
}

export default DeckDetailHeader;
