//Models definieren wie die Daten in der Datenbank aussehen./Ein Deck ist eine Sammlung von Karteikarten 
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