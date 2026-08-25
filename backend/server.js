// Einstiegspunkt Express
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import deckRoutes from "./routes/deckRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
-dotenv.config();
connectDB();

const app = express();

app.use(cors());
// Wenn eine Anfrage reinkommt, parse den Body automatisch als JSON.
app.use(express.json());

// Test-Route
app.get("/", (req, res) => {
  res.send("Flashcard API läuft");
});

// Alle Anfragen die mit /api/decks beginnen, werden an die deckRoutes weitergeleitet. Gleiches Prinzip für /api/cards.
app.use("/api/decks", deckRoutes);
app.use("/api/cards", cardRoutes);
app.use("/api/auth", authRoutes);

// Fehlerbehandlung (immer am Ende)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Startet den Server auf dem angegebenen Port (Standard: 5000). Ab diesem Moment kann der Server Anfragen entgegennehmen.
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
