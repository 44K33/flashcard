//Models definieren wie die Daten in der Datenbank aussehen. / Eine Card ist eine einzelne Karteikarte, die immer zu einem Deck gehört.
import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Eine Frage ist erforderlich"],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, "Eine Antwort ist erforderlich"],
      trim: true,
    },
    deck: {
      // Jedes Dokument in MongoDB bekommt automatisch eine eindeutige ID, die wir hier als Referenz auf das Deck speichern, zu dem die Karte gehört.
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deck",
      required: true,
    },
    known: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;