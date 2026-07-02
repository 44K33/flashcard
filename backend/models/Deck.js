//Mongoose Schema für Decks
import mongoose from "mongoose";

const deckSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Ein Titel ist erforderlich"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Deck = mongoose.model("Deck", deckSchema);

export default Deck;