import { Link } from "react-router-dom";

function Logout() {
  return (
    <main className="flex-grow min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Dekoratives Hintergrund-Element */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-surface-container-highest to-surface-bright rounded-full blur-[100px] opacity-60 transform -translate-y-1/4"></div>
      </div>

      {/* Logout-Karte */}
      <div className="z-10 bg-surface/80 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-container-highest max-w-md w-full p-8 text-center flex flex-col items-center gap-6 transform transition-all duration-500 hover:-translate-y-1">
        {/* Erfolgs-Icon */}
        <div className="w-20 h-20 rounded-full bg-secondary-container/30 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-secondary-container opacity-20 animate-pulse"></div>
          <span className="material-symbols-outlined text-[40px] text-secondary">
            check_circle
          </span>
        </div>

        {/* Textinhalt */}
        <div className="flex flex-col gap-2">
          <h1 className="font-headline-md text-headline-md text-on-surface">
            Bis zum nächsten Mal!
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Du wurdest erfolgreich abgemeldet. Dein Fortschritt ist sicher
            gespeichert.
          </p>
        </div>

        {/* Aktions-Button */}
        <div className="w-full pt-4">
          <Link
            to="/login"
            className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-sm text-label-sm py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              login
            </span>
            Zurück zum Login
          </Link>
        </div>

        {/* Kleiner FlashLearn-Schriftzug unten */}
        <div className="mt-4 pt-4 border-t border-surface-container-highest w-full opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-headline-md text-headline-md font-bold text-primary text-lg">
            FlashLearn
          </span>
        </div>
      </div>
    </main>
  );
}

export default Logout;
