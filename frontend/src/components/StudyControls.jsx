function StudyControls({ isFlipped, setIsFlipped }) {
  return (
    <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent md:bg-transparent md:relative md:p-0 md:mt-12 flex flex-col items-center gap-4">
      
      {/* isFlipped = false: Antwort zeigen Button */}
      {!isFlipped && (
        <button
          onClick={() => setIsFlipped(true)}
          className="w-full max-w-[400px] py-4 bg-primary text-on-primary rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-3 shadow-lg hover:bg-primary/90 transition-all active:scale-95 cursor-pointer">
          <span className="material-symbols-outlined">visibility</span>
          Antwort zeigen
        </button>
      )}

      {/* isFlipped = true: Nochmal / Gewusst Buttons */}
      {isFlipped && (
        <div className="w-full max-w-[640px] grid grid-cols-2 gap-4">
          <button
            onClick={() => setIsFlipped(false)}
            className="flex flex-col items-center justify-center py-4 bg-surface-container-lowest border-2 border-error/20 text-error rounded-xl hover:bg-error-container/20 transition-all active:scale-95 group cursor-pointer">
            <span className="material-symbols-outlined text-4xl mb-1 group-hover:scale-110 transition-transform">cancel</span>
            <span className="font-bold">Nicht gewusst</span>
          </button>
          <button
            onClick={() => setIsFlipped(false)}
            className="flex flex-col items-center justify-center py-4 bg-primary text-on-primary rounded-xl shadow-lg transition-all active:scale-95 group cursor-pointer">
            <span className="material-symbols-outlined text-4xl mb-1 group-hover:scale-110 transition-transform">check_circle</span>
            <span className="font-bold">Gewusst</span>
          </button>
        </div>
      )}

      {/* Tipp: nur auf Desktop sichtbar */}
      {!isFlipped && (
        <p className="hidden md:block text-outline text-caption font-caption mt-4">
          Tipp: Nutze die{" "}
          <kbd className="px-2 py-1 bg-surface-container rounded border border-outline-variant text-on-surface text-[10px]">
            Leertaste
          </kbd>{" "}
          zum Aufdecken
        </p>
      )}
    </div>
  );
}

export default StudyControls;
