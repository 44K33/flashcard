import { Link } from "react-router-dom";

function Navbar() {
  return (
    // fixed = bleibt immer oben sichtbar beim Scrollen
    // z-50 = liegt über allen anderen Elementen
    // justify-between = Logo links, Nav mitte, Button rechts
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-surface shadow-sm">
      {/* Logo: text-headline-md = 24px, font-bold = extra fett, text-primary = blau */}
      <Link
        to="/"
        className="font-headline-md text-headline-md font-bold text-primary"
      >
        FlashLearn
      </Link>
      

      {/* Navigation: hidden md:flex = nur auf Desktop sichtbar */}
      <nav className="hidden md:flex gap-8 h-full">
        {/* border-b-2 border-primary = blauer Unterstrich als aktiver Link-Indikator */}

        <a
          className="flex items-center h-full font-body-md text-body-md text-primary font-bold border-b-2 border-primary transition-all duration-200 active:scale-95"
          href="#"
        >
          Meine Stapel
        </a>
      </nav>

      {/* Rechter Bereich: Button für neuen Stapel */}
      <div className="flex items-center gap-4">
        {/* active:scale-95 = Button verkleinert sich leicht beim Klicken */}
        <Link
        to="/decks/new"
        className="bg-primary text-on-primary px-4 py-2 rounded-xl font-label-sm text-label-sm hover:opacity-90 transition-all duration-200 active:scale-95 cursor-pointer">
          Neuer Stapel
        </Link>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-high hidden md:block">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://i.pravatar.cc/40"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
