// /api/cards Endpunkte
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
router.route("/deck/:deckId").get(getCardsByDeck);
router.route("/:id").get(getCardById).put(updateCard).delete(deleteCard);
 
export default router;