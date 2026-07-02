//Logik für Decks
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";

// @desc    Alle Decks abrufen
// @route   GET /api/decks
export const getDecks = async (req, res) => {
  try {
    const decks = await Deck.find().sort({ createdAt: -1 });
    res.status(200).json(decks);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Abrufen der Decks", error: error.message });
  }
};

// @desc    Einzelnes Deck abrufen
// @route   GET /api/decks/:id
export const getDeckById = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    if (!deck) {
      return res.status(404).json({ message: "Deck nicht gefunden" });
    }
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Abrufen des Decks", error: error.message });
  }
};

// @desc    Neues Deck erstellen
// @route   POST /api/decks
export const createDeck = async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Titel ist erforderlich" });
    }

    const deck = await Deck.create({
      title,
      description,
      tags: Array.isArray(tags) ? tags : [],
    });

    res.status(201).json(deck);
  } catch (error) {
    res.status(400).json({ message: "Fehler beim Erstellen des Decks", error: error.message });
  }
};

// @desc    Deck bearbeiten
// @route   PUT /api/decks/:id
export const updateDeck = async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    const deck = await Deck.findById(req.params.id);
    if (!deck) {
      return res.status(404).json({ message: "Deck nicht gefunden" });
    }

    if (title !== undefined) deck.title = title;
    if (description !== undefined) deck.description = description;
    if (tags !== undefined) deck.tags = tags;

    const updatedDeck = await deck.save();
    res.status(200).json(updatedDeck);
  } catch (error) {
    res.status(400).json({ message: "Fehler beim Aktualisieren des Decks", error: error.message });
  }
};

// @desc    Deck löschen (inkl. zugehöriger Karten)
// @route   DELETE /api/decks/:id
export const deleteDeck = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    if (!deck) {
      return res.status(404).json({ message: "Deck nicht gefunden" });
    }

    await Card.deleteMany({ deck: deck._id });
    await deck.deleteOne();

    res.status(200).json({ message: "Deck und zugehörige Karten gelöscht" });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Löschen des Decks", error: error.message });
  }
};