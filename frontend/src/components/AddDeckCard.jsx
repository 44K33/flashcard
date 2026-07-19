import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

function AddDeckCard() {
  return (
    // Link statt div: ein Klick führt zur Route /decks/new
    // to="/decks/new" = Ziel-URL, entspricht href bei normalen <a>-Tags
    <Link
      to="/decks/new"
      className="group border-dashed border-2 border-outline-variant items-center justify-center h-full rounded-xl flex flex-col hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
    >
      <PlusCircle
        className="mb-4 group-hover:scale-110 transition-transform"
        size={36}
      />
      <p>Neuen Stapel erstellen</p>
    </Link>
  );
}

export default AddDeckCard;
