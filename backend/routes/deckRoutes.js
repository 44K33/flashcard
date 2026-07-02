// Routes definieren welche HTTP-Methode + URL welche Controller-Funktion aufruft. Sie sind wie eine Telefonzentrale: Anruf rein → an die richtige Person weiterleiten.
import express from "express";
import {
  getDecks,
  getDeckById,
  createDeck,
  updateDeck,
  deleteDeck,
} from "../controllers/deckController.js";
 
const router = express.Router();
 //GET /api/decks → ruft getDecks auf (alle Decks laden). POST /api/decks → ruft createDeck auf (neues Deck erstellen). Beide Methoden auf derselben URL, aber unterschiedliche Aktionen je nach HTTP-Methode.
router.route("/").get(getDecks).post(createDeck);
//:id ist ein Platzhalter. Wenn jemand GET /api/decks/6a463c... aufruft, ist req.params.id = "6a463c...". So kann der Controller das richtige Deck aus der DB holen.
router.route("/:id").get(getDeckById).put(updateDeck).delete(deleteDeck);
 
export default router;