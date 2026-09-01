import { useState } from "react";

function CardForm({ onCreate, onCancel }) {
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
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 space-y-4"
    >
      <div className="space-y-1">
        <label
          htmlFor="question"
          className="block font-label-sm text-label-sm text-on-surface font-semibold"
        >
          Frage
        </label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface text-body-md focus:outline-none focus:border-primary"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="answer"
          className="block font-label-sm text-label-sm text-on-surface font-semibold"
        >
          Antwort
        </label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface text-body-md focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="submit"
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all cursor-pointer"
        >
          Karte hinzufügen
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all cursor-pointer"
        >
          Abbrechen
        </button>
      </div>
    </form>
  );
}

export default CardForm;
