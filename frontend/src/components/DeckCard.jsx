import { Pencil, Trash2 } from "lucide-react";
import * as LucideIcons from "lucide-react"; // Alle Icons auf einmal importieren

function DeckCard({ name, description, cardCount, icon, onEdit, onDelete }) {
  // LucideIcons[icon] = dynamisches Icon anhand des Namens (z.B. "Database" → <Database />)
  const IconComponent = LucideIcons[icon] || LucideIcons.Layers;
  // || LucideIcons.Layers = Fallback falls Icon-Name nicht gefunden
  return (
    // transition + hover:-translate-y-1 = Karte hebt sich beim Hovern leicht an
    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col border border-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex justify-between items-center mb-8">
        {/* Kategorie-Icon mit hellem Indigo-Hintergrund */}
        <div className="rounded-lg bg-[#EEF2FF] px-6 py-2 h-12 flex items-center justify-center text-[#4F46E5]">
          <IconComponent strokeWidth={3} />
        </div>
        <div className="flex gap-3">
          {/* hover:bg = Hintergrund beim Hovern; cursor-pointer = Mauszeiger als Hand */}
          <button className="p-2 rounded-lg hover:bg-[#EEF2FF] cursor-pointer">
            <Pencil className="text-gray-800 cursor-pointer" size={18} />
          </button>
          {/* group + group-hover: = Kind-Element reagiert auf Hover des Eltern-Elements */}
          <button className="p-2 rounded-lg hover:bg-red-100 cursor-pointer group">
            <Trash2
              className="group-hover:text-red-500 cursor-pointer"
              size={18}
            />
          </button>
        </div>
      </div>
      <h3 className="font-bold mb-[0.4rem]  text-xl lg:text-2xl">{name}</h3>
      <p className="text-xl lg:text-2xl mb-[1.3rem] text-gray-700">
        {description}
      </p>
      <div className="flex justify-between items-center mt-auto">
        {/* flex items-center gap-2 = Icon und Text nebeneinander mit Abstand */}
        <span className="flex items-center gap-2 text-gray-500">
          <LucideIcons.Layers /> {cardCount} Karten
        </span>
        <button className="rounded-lg text-white bg-[#4F46E5] w-fit px-6 py-2 font-bold hover:bg-[#6366F1] cursor-pointer">
          Lernen
        </button>
      </div>
    </div>
  );
}

export default DeckCard;
