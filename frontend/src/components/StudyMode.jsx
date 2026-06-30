import { useState } from "react";

function StudyMode({ cards = [] }) {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!cards.length) {
    return <p>No cards available for study.</p>;
  }

  const currentCard = cards[index];

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section>
      <h3>Study Mode</h3>
      <p>{currentCard.question}</p>
      {showAnswer && <p>{currentCard.answer}</p>}
      <button type="button" onClick={() => setShowAnswer((prev) => !prev)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <button type="button" onClick={nextCard}>
        Next Card
      </button>
    </section>
  );
}

export default StudyMode;
