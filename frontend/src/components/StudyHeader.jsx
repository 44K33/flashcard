function StudyHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop h-16 bg-surface shadow-sm transition-all duration-200">
      <div className="flex items-center gap-4">
        <button className="p-2 -ml-2 rounded-full hover:bg-surface-container transition-colors active:scale-95">
          <span className="material-symbols-outlined text-on-surface">
            close
          </span>
        </button>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          FlashLearn
        </h1>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <span className="font-body-md text-body-md text-on-surface-variant">
          Lernmodus: <span className="font-bold">Anatomie Grundlagen</span>
        </span>
      </div>
      <div className="flex items-center"></div>
    </header>
  );
}

export default StudyHeader;
