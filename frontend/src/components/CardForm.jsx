import { useState } from "react";

function CardForm({ onCreate }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      question: question.trim(),
      answer: answer.trim(),
    };

    if (!payload.question || !payload.answer) {
      return;
    }

    onCreate?.(payload);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question</label>
      <input
        id="question"
        type="text"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />

      <label htmlFor="answer">Answer</label>
      <input
        id="answer"
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      />

      <button type="submit">Add Card</button>
    </form>
  );
}

export default CardForm;
