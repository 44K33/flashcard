// /api/decks Endpunkte
import express from "express";
import {
  getDecks,
  getDeckById,
  createDeck,
  updateDeck,
  deleteDeck,
} from "../controllers/deckController.js";
 
const router = express.Router();
 
router.route("/").get(getDecks).post(createDeck);
router.route("/:id").get(getDeckById).put(updateDeck).delete(deleteDeck);
 
export default router;