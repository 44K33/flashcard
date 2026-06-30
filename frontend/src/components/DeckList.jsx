function DeckList({ decks = [] }) {
  if (!decks.length) {
    return <p>No decks available yet.</p>;
  }

  return (
    <ul>
      {decks.map((deck) => (
        <li key={deck._id || deck.id || deck.name}>{deck.name}</li>
      ))}
    </ul>
  );
}

export default DeckList;
