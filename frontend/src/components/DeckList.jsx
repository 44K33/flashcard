import DeckCard from "../components/DeckCard";

function DeckList({ decks = [] }) {
  if (!decks.length) {
    return <p>No decks available yet.</p>;
  }

  return (
    <ul>
      {decks.map((deck) => (
        <DeckCard
          key={deck._id || deck.id}
          name={deck.name}
          description={deck.description}
          cardCount={deck.cardCount}
          icon={deck.icon}
        />
      ))}
    </ul>
  );
}

export default DeckList;
