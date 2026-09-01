import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function StudyHeader({ deckTitle }) {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-surface shadow-sm transition-all duration-200 relative">
      {/* Linker Bereich: X-Button und Logo (Logo nur auf Desktop) */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-surface-container transition-colors active:scale-95 border-0 outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-on-surface">
            close
          </span>
        </button>
        {/* hidden md:block = Logo nur auf Desktop sichtbar */}
        <Link
          to="/"
          className="hidden md:block font-headline-md text-headline-md font-bold text-primary"
        >
          FlashLearn
        </Link>
      </div>

      {/* Deck-Name: auf Mobile sichtbar, auf Desktop zentriert */}
      <div className=" absolute left-1/2 -translate-x-1/2 flex gap-6 items-center">
        <span className="text-sm md:text-body-md font-body-md text-body-md text-on-surface-variant">
          <span className="font-bold">{deckTitle}</span>
        </span>
      </div>

      {/* Rechter Bereich: leer für justify-between */}
      <div className="flex items-center"></div>
    </header>
  );
}

export default StudyHeader;
