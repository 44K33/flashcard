import DeckCard from "../components/DeckCard";
import AddDeckCard from "./AddDeckCard";

function DeckList({ decks = [], onDelete }) {
  // Falls keine Decks vorhanden sind (Array leer), zeige nur diesen Hinweis statt der Liste
  if (!decks.length) {
    return <p>Noch keine Stapel vorhanden.</p>;
  }

  return (
    // Responsive: Definition der Anzahl Spalten je nach Displaygrösse
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <DeckCard
          // key = eindeutige ID pro Listenelement, React braucht das zur effizienten Aktualisierung der Liste
          // _id (von MongoDB) wird bevorzugt, id als Fallback falls _id fehlt
          key={deck._id || deck.id}
          title={deck.title}
          description={deck.description}
          tags={deck.tags}
          cardCount={deck.cardCount}
          icon={deck.icon}
          id={deck._id}
          onDelete={onDelete}
        />
      ))}
      <AddDeckCard />
    </ul>
  );
}

export default DeckList;
