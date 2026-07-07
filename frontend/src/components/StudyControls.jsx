function StudyControls() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent md:bg-transparent md:relative md:p-0 md:mt-12 flex flex-col items-center gap-4">
      {/* Antwort zeigen Button */}
      <button className="w-full max-w-[400px] py-4 bg-primary text-on-primary rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-3 shadow-lg hover:bg-primary/90 transition-all active:scale-95 cursor-pointer">
        {/* visibility = Auge-Icon aus Google Material Symbols */}
        <span className="material-symbols-outlined">visibility</span>
        Antwort zeigen
      </button>

      {/* Tipp: nur auf Desktop sichtbar (hidden md:block) */}
      <p className="hidden md:block text-outline text-caption font-caption mt-4">
        Tipp: Nutze die{" "}
        <kbd className="px-2 py-1 bg-surface-container rounded border border-outline-variant text-on-surface text-[10px]">
          Leertaste
        </kbd>{" "}
        zum Aufdecken
      </p>
    </div>
  );
}

export default StudyControls;
