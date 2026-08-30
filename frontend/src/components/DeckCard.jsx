import { Pencil, Trash2 } from "lucide-react";
import * as LucideIcons from "lucide-react"; // Alle Icons auf einmal importieren
import { Link } from "react-router-dom";

function DeckCard({
  title,
  description,
  cardCount,
  icon,
  onEdit,
  onDelete,
  id,
}) {
  // LucideIcons[icon] = dynamisches Icon anhand des Namens (z.B. "Database" → <Database />)
  const IconComponent = LucideIcons[icon] || LucideIcons.Layers;
  // || LucideIcons.Layers = Fallback falls Icon-Name nicht gefunden

  return (
    // custom-card-shadow = eigene CSS-Klasse in index.css mit Schatten + Hover-Animation
    // border-transparent = unsichtbarer Border, wird beim Hovern zu primary-fixed (hellblau)
    <div className="bg-surface-container-lowest p-6 rounded-xl custom-card-shadow flex flex-col border border-transparent hover:border-primary-fixed">
      <div className="flex justify-between items-start mb-4">
        {/* Icon-Container mit hellem Primärfarben-Hintergrund (10% Deckkraft) */}
        <div className="rounded-lg bg-primary-container/10 p-3 flex items-center justify-center text-primary">
          <IconComponent strokeWidth={3} />
        </div>

        <div className="flex gap-1">
          {/* Bearbeiten-Button: heller Hintergrund beim Hovern */}
          <button
            className="p-1.5 rounded-lg hover:bg-surface-container-high cursor-pointer"
            title="Bearbeiten"
          >
            <Pencil
              className="text-on-surface-variant cursor-pointer"
              size={20}
            />
          </button>

          {/* Löschen-Button: group + group-hover = Icon wird rot wenn Button gehovert */}
          <button
            onClick={() => onDelete(id)}
            className="p-1.5 rounded-lg hover:bg-error-container cursor-pointer group"
            title="Löschen"
          >
            <Trash2
              className="group-hover:text-error cursor-pointer"
              size={20}
            />
          </button>
        </div>
      </div>

      {/* Titel: 24px entspricht headline-md aus dem Stitch-Design */}
      <Link to={`/decks/${id}`}>
        <h3 className="text-[24px] font-semibold text-on-surface mb-2">
          {title}
        </h3>
      </Link>

      {/* Beschreibung: flex-grow = füllt verfügbaren Platz, damit Lernen-Button immer unten bleibt */}
      <p className="text-[16px] text-on-surface-variant mb-6 flex-grow">
        {description}
      </p>

      <div className="flex justify-between items-center mt-auto">
        {/* mt-auto = schiebt diesen Bereich ans Ende der Karte */}
        <span className="flex items-center gap-1 text-outline text-[14px]">
          <LucideIcons.Layers size={18} /> {cardCount} Karten
        </span>

        {/* active:scale-95 = Button verkleinert sich leicht beim Klicken */}
        <Link
          to={`/study/${id}`}
          className="rounded-xl text-on-primary bg-primary px-6 py-2 font-bold hover:opacity-90 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Lernen
        </Link>
      </div>
    </div>
  );
}

export default DeckCard;
