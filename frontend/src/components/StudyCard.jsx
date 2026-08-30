function StudyCard({ isFlipped, currentCard, currentIndex, totalCards }) {
  return (
    <div className="w-full max-w-[640px] flex flex-col items-center justify-center">
      {/* Fortschrittsbalken */}
      <div className="w-full max-w-[640px] mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Fortschritt
          </span>
          <span className="font-label-sm text-label-sm font-bold text-primary">
            Karte {currentIndex + 1} von {totalCards}
          </span>
        </div>
        <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[25%] transition-all duration-500 ease-in-out"></div>
        </div>
      </div>

      {/* Karteikarte: perspective-1000 = ermöglicht 3D-Flip-Animation */}
      <div className="w-full max-w-[640px] h-[400px] perspective-1000 group">
        {/* preserve-3d = Kinder behalten ihre 3D-Position beim Drehen */}
        <div
          className={`relative w-full h-full card-flip preserve-3d ${isFlipped ? "flipped" : ""}`}
        >
          {/* Vorderseite: Frage */}
          {/* backface-hidden = Rückseite wird versteckt wenn Karte gedreht ist */}
          <div className="absolute inset-0 backface-hidden bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-8 text-center border border-outline-variant/30">
            <span className="absolute top-6 left-6 font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Frage
            </span>
            <h2 className="font-card-content text-[16px] md:text-card-content text-on-surface leading-relaxed max-w-[80%]">
              {currentCard.question}
            </h2>
          </div>

          {/* Rückseite: Antwort */}
          {/* rotate-y-180 = Rückseite ist um 180 Grad gedreht */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-8 text-center border border-outline-variant/30">
            <span className="absolute top-6 left-6 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
              Antwort
            </span>
            <div className="space-y-4">
              <p className="font-card-content text-card-content text-on-surface font-bold leading-relaxed">
                {currentCard.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyCard;
