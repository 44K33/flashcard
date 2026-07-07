import { PlusCircle } from "lucide-react";

function AddDeckCard() {
  return (
    // group = ermöglicht group-hover auf Kind-Elementen
    // hover:border-primary hover:text-primary = wird beim Hovern blau
    <div className="group border-dashed border-2 border-outline-variant items-center justify-center h-full rounded-xl flex flex-col hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer">
      {/* group-hover:scale-110 = Plus vergrössert sich wenn der ganze Container gehovert wird */}
      {/* transition-transform = Vergrösserung animiert sich sanft */}
      <PlusCircle
        className="mb-4 group-hover:scale-110 transition-transform"
        size={36}
      />
      <p>Neuen Stapel erstellen</p>
    </div>
  );
}

export default AddDeckCard;
