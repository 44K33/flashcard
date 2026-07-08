function StudyControls({ isFlipped, setIsFlipped }) {
  return (
    // fixed bottom = fixiert am unteren Rand
    // bg-gradient-to-t = Verlauf von unten nach oben, damit Inhalt nicht abrupt endet
    <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent md:bg-transparent md:relative md:p-0 md:mt-12 flex flex-col items-center gap-4">

      {/* isFlipped = false: Antwort zeigen Button */}
      {!isFlipped && (
        <button
          onClick={() => setIsFlipped(true)}
          className="w-full max-w-[400px] py-4 bg-primary text-on-primary rounded-xl text-[16px] md:font-headline-md md:text-headline-md flex items-center justify-center gap-3 shadow-lg hover:bg-primary/90 transition-all active:scale-95 cursor-pointer">
          {/* visibility = Auge-Icon */}
          <span className="material-symbols-outlined">visibility</span>
          Antwort zeigen
        </button>
      )}

      {/* isFlipped = true: Nochmal / Gut / Einfach Buttons */}
      {isFlipped && (
        <div className="flex flex-row gap-3 md:gap-6 w-full max-w-[640px] justify-center">

          {/* Nochmal Button */}
          <button className="flex-1 flex flex-col items-center gap-1 group" onClick={() => setIsFlipped(false)}>
            <div className="w-full h-10 md:h-14 bg-white border-2 border-error/20 rounded-xl flex items-center justify-center text-error group-hover:bg-error/5 group-active:scale-95 transition-all duration-200">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]">refresh</span>
              <span className="ml-2 text-sm md:text-body-md font-bold">Nochmal</span>
            </div>
            <span className="font-caption text-caption text-outline">Taste 1</span>
          </button>

          {/* Gut Button */}
          <button className="flex-1 flex flex-col items-center gap-1 group" onClick={() => setIsFlipped(false)}>
            <div className="w-full h-10 md:h-14 bg-primary text-white rounded-xl flex items-center justify-center group-hover:bg-primary-container group-active:scale-95 transition-all duration-200 shadow-sm">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]">thumb_up</span>
              <span className="ml-2 text-sm md:text-body-md font-bold">Gut</span>
            </div>
            <span className="font-caption text-caption text-outline">Taste 2</span>
          </button>

          {/* Einfach Button */}
          <button className="flex-1 flex flex-col items-center gap-1 group" onClick={() => setIsFlipped(false)}>
            <div className="w-full h-10 md:h-14 bg-white border-2 border-secondary/20 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary/5 group-active:scale-95 transition-all duration-200">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]">bolt</span>
              <span className="ml-2 text-sm md:text-body-md font-bold">Einfach</span>
            </div>
            <span className="font-caption text-caption text-outline">Taste 3</span>
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