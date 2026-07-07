import { PlusCircle } from "lucide-react";

function AddDeckCard() {
  return (
    <div className="border-dashed border-2 border-outline-variant items-center justify-center h-full rounded-xl flex flex-col hover:border-primary hover:text-primary transition-all duration-200">
      <PlusCircle className="mb-4" />
      <p>Neuen Stapel erstellen</p>
    </div>
  );
}

export default AddDeckCard;
