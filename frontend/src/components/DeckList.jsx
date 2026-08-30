import DeckCard from "../components/DeckCard";
import AddDeckCard from "./AddDeckCard";

function DeckList({ decks = [], onDelete }) {
  if (!decks.length) {
    return <p>No decks available yet.</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Responsive: Definition der Anzahl Spalten je nach Displaygrösse*/}
      {decks.map((deck) => (
        <DeckCard
          key={deck._id || deck.id}
          title={deck.title}
          description={deck.description}
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
