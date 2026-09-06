function DeckHeader({ onSeed, onSort, allTags, filterTag, onFilterChange }) {
  return (
    // flex-col auf Mobile, md:flex-row auf Desktop = Titel links, Buttons rechts
    // md:items-end = Buttons am unteren Rand des Titels ausrichten
    <section className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
      {/* Linker Bereich: Titel und Untertitel */}
      <div>
        {/* text-display-lg-mobile = 36px auf Mobile, text-display-lg = 48px auf Desktop */}
        <h1 className="text-3xl md:font-display-lg md:text-display-lg font-bold text-on-surface mb-2">
          Deine Stapel
        </h1>
        {/* max-w-2xl = Text wird nicht zu breit auf grossen Bildschirmen */}
        <p className="text-on-surface-variant max-w-2xl">
          Verwalte deine Lernmaterialien und starte deine nächste Session.
        </p>
      </div>

      {/* Rechter Bereich: Filter- und Sortier-Buttons */}
      <div className="flex gap-2">
        {/* material-symbols-outlined = Google Icon Font, filter_list = Filter-Icon */}
        <select
          value={filterTag}
          onChange={(e) => onFilterChange(e.target.value)}
          className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <option value="">Alle Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {/* sort = Sortier-Icon */}
        <button
          onClick={onSort}
          className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-on-surface-variant">
            sort
          </span>
        </button>
        <button
          onClick={onSeed}
          className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-on-surface-variant">
            database
          </span>
        </button>
      </div>
    </section>
  );
}

export default DeckHeader;
