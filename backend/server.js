// Einstiegspunkt Express
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import deckRoutes from "./routes/deckRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Test-Route
app.get("/", (req, res) => {
  res.send("Flashcard API läuft");
});

// Haupt-Routen
app.use("/api/decks", deckRoutes);
app.use("/api/cards", cardRoutes);

// Fehlerbehandlung (immer am Ende)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});