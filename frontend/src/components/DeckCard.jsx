function DeckCard({ name, description, cardCount, icon, onEdit, onDelete }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{cardCount}</span>
    </div>
  );
}

export default DeckCard;
