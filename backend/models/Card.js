//Mongoose Schema für Cards
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