//Logik für Decks
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";

// @desc    Alle Decks abrufen
// @route   GET /api/decks

//Deck.find() holt alle Decks aus MongoDB. .sort({ createdAt: -1 }) sortiert sie nach Erstelldatum, neueste zuerst (-1 = absteigend).
// res.status(200).json(decks) schickt sie als JSON-Array zurück ans Frontend.
export const getDecks = async (req, res) => {
  try {
    const decks = await Deck.find().sort({ createdAt: -1 });
    res.status(200).json(decks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Fehler beim Abrufen der Decks", error: error.message });
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
    res
      .status(500)
      .json({ message: "Fehler beim Abrufen des Decks", error: error.message });
  }
};

// @desc    Neues Deck erstellen
// @route   POST /api/decks

// const { title, description, tags } = req.body → Destructuring: holt die drei Felder aus dem JSON-Body der Anfrage.
// Dann Validierung: falls kein Titel, sofort 400 (Bad Request) zurückschicken. Array.isArray(tags) ? tags : [] → Sicherheitscheck, falls tags kein Array ist.
// Deck.create({...}) speichert das neue Deck in MongoDB. 201 = "Created" (Ressource wurde erstellt).
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
    res
      .status(400)
      .json({
        message: "Fehler beim Erstellen des Decks",
        error: error.message,
      });
  }
};

// @desc    Deck bearbeiten
// @route   PUT /api/decks/:id

//Zuerst wird das Deck gesucht (findById). Dann werden nur die Felder aktualisiert, die tatsächlich mitgeschickt wurden (if (title !== undefined)).
// So kann man z.B. nur die Tags ändern ohne title mitschicken zu müssen. deck.save() speichert die Änderungen.
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
    res
      .status(400)
      .json({
        message: "Fehler beim Aktualisieren des Decks",
        error: error.message,
      });
  }
};

// @desc    Deck löschen (inkl. zugehöriger Karten)
// @route   DELETE /api/decks/:id

//Card.deleteMany({ deck: deck._id }) löscht zuerst alle Karten die zu diesem Deck gehören. Dann wird das Deck selbst gelöscht. So entstehen keine "verwaisten" Karten ohne Deck in der Datenbank.
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
    res
      .status(500)
      .json({ message: "Fehler beim Löschen des Decks", error: error.message });
  }
};
