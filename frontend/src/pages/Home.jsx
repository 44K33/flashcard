import DeckForm from "../components/DeckForm";
import DeckList from "../components/DeckList";

function Home() {
  const testDecks = [
    {
      _id: "1",
      name: "Test",
      description:
        "Ein Test, der mehr Text enthält als alle anderen Karten. Er hilft mir die Abstände richtig einzuschätzen.",
      cardCount: 5,
    },
    { _id: "2", name: "Test", description: "Ein Test", cardCount: 5 },
  ];

  return (
    <main className="pt-24 pb-8 px-8 max-w-7xl mx-auto">
      <h1>Flashcard App</h1>
      <DeckForm />
      <DeckList decks={testDecks} />
    </main>
  );
}

export default Home;
