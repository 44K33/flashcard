import DeckDetailHeader from "../components/DeckDetailHeader";
import DeckDetailContent from "../components/DeckDetailContent";
import CardForm from "../components/CardForm";
import CardList from "../components/CardList";
import { useParams } from "react-router-dom";

function DeckDetail() {
  const { deckId } = useParams();
  console.log("Aktuelle Deck-Id:", deckId);

  return (
    <main>
      <DeckDetailHeader />
      <DeckDetailContent deckId={deckId} />
    </main>
  );
}

export default DeckDetail;
