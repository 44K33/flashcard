//Logik für Cards
import Card from "../models/Card.js";
import Deck from "../models/Deck.js";

// @desc    Alle Karten eines Decks abrufen
// @route   GET /api/cards/deck/:deckId

//Card.find({ deck: req.params.deckId }) holt nur Karten die zum angegebenen Deck gehören, nicht alle Karten aus der ganzen Datenbank.
export const getCardsByDeck = async (req, res) => {
  try {
    const cards = await Card.find({ deck: req.params.deckId }).sort({ createdAt: 1 });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Abrufen der Karten", error: error.message });
  }
};

// @desc    Einzelne Karte abrufen
// @route   GET /api/cards/:id
export const getCardById = async (req, res) => {
  // try: "Versuch das hier auszuführen". catch: "Falls etwas schiefgeht, fang den Fehler ab und schick eine Fehlermeldung zurück". Ohne try/catch würde ein Fehler den ganzen Server zum Absturz bringen.
  try {
    //Datenbankabfrage dauert ein paar Millisekunden. Mit async/await kann der Server in dieser Zeit andere Anfragen bearbeiten
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Karte nicht gefunden" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Abrufen der Karte", error: error.message });
  }
};

// @desc    Neue Karte erstellen
// @route   POST /api/cards

//Zusätzlich zur normalen Validierung wird geprüft, ob das angegebene Deck überhaupt existiert (Deck.findById(deck)). So kann man keine Karte für ein nicht existierendes Deck erstellen.
export const createCard = async (req, res) => {
  try {
    const { question, answer, deck } = req.body;

    if (!question || !answer || !deck) {
      return res.status(400).json({ message: "Frage, Antwort und Deck sind erforderlich" });
    }

    const deckExists = await Deck.findById(deck);
    if (!deckExists) {
      return res.status(404).json({ message: "Das angegebene Deck existiert nicht" });
    }

    const card = await Card.create({ question, answer, deck });
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: "Fehler beim Erstellen der Karte", error: error.message });
  }
};

// @desc    Karte bearbeiten
// @route   PUT /api/cards/:id

//Das Feld known kann hier auf true oder false gesetzt werden. Im Frontend schickt der Lernmodus z.B. { known: true } wenn der Nutzer eine Karte als gewusst markiert. So wird der Lernfortschritt in der Datenbank gespeichert.
export const updateCard = async (req, res) => {
  try {
    const { question, answer, known } = req.body;

    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Karte nicht gefunden" });
    }

    if (question !== undefined) card.question = question;
    if (answer !== undefined) card.answer = answer;
    if (known !== undefined) card.known = known;

    const updatedCard = await card.save();
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(400).json({ message: "Fehler beim Aktualisieren der Karte", error: error.message });
  }
};

// @desc    Karte löschen
// @route   DELETE /api/cards/:id
export const deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Karte nicht gefunden" });
    }

    await card.deleteOne();
    res.status(200).json({ message: "Karte gelöscht" });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Löschen der Karte", error: error.message });
  }
};