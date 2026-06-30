function CardList({ cards = [] }) {
  if (!cards.length) {
    return <p>No cards in this deck yet.</p>;
  }

  return (
    <ul>
      {cards.map((card) => (
        <li key={card._id || card.id || card.question}>
          <strong>{card.question}</strong>
          <div>{card.answer}</div>
        </li>
      ))}
    </ul>
  );
}

export default CardList;
