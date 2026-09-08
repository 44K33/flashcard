import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-on-surface mb-2">Seite nicht gefunden</p>
      <p className="text-on-surface-variant mb-8">
        Die von dir gesuchte Seite existiert nicht.
      </p>
      <Link
        to="/"
        className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-sm hover:opacity-90 transition-all"
      >
        Zurück zur Startseite
      </Link>
    </main>
  );
}

export default NotFound;
