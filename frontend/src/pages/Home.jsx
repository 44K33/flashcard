import DeckForm from "../components/DeckForm";
import DeckList from "../components/DeckList";

function Home() {
  return (
    <main>
      <h1>Flashcard App</h1>
      <DeckForm />
      <DeckList />
    </main>
  );
}

export default Home;
