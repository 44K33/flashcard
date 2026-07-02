// Routes definieren welche HTTP-Methode + URL welche Controller-Funktion aufruft. Sie sind wie eine Telefonzentrale: Anruf rein → an die richtige Person weiterleiten.
import express from "express";
import {
  getCardsByDeck,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/cardController.js";
 
const router = express.Router();
 
router.route("/").post(createCard);
//GET /api/cards/deck/DECK_ID → holt alle Karten eines bestimmten Decks. :deckId ist der Platzhalter für die Deck-ID.
router.route("/deck/:deckId").get(getCardsByDeck);
router.route("/:id").get(getCardById).put(updateCard).delete(deleteCard);
 
export default router;