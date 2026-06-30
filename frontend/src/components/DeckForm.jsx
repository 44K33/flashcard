import { useState } from "react";

function DeckForm({ onCreate }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      return;
    }

    onCreate?.({ name: trimmed });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="deckName">Deck Name</label>
      <input
        id="deckName"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="e.g. Spanish Basics"
      />
      <button type="submit">Create Deck</button>
    </form>
  );
}

export default DeckForm;
