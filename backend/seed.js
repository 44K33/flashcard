// ACHTUNG Diese Seed Datei lösch alle vorherigen daten diese beispieldaten nur am anfang ausführen!!!
import mongoose from "mongoose";
import dotenv from "dotenv";
import Deck from "./models/Deck.js";
import Card from "./models/Card.js";

dotenv.config();

const seedData = [
  {
    deck: {
      title: "Mathematik — Grundlagen",
      description: "Grundlegende Mathematik-Formeln und Konzepte",
      tags: ["Mathematik", "Grundlagen"],
    },
    cards: [
      {
        question: "Was ist der Satz des Pythagoras?",
        answer: "a² + b² = c² (in einem rechtwinkligen Dreieck)",
      },
      {
        question: "Was ist der Flächeninhalt eines Kreises?",
        answer: "A = π × r²",
      },
      {
        question: "Was ist der Umfang eines Kreises?",
        answer: "U = 2 × π × r",
      },
      {
        question: "Wie berechnet man den Flächeninhalt eines Dreiecks?",
        answer: "A = (Grundlinie × Höhe) / 2",
      },
      {
        question: "Was ist der Flächeninhalt eines Rechtecks?",
        answer: "A = Länge × Breite",
      },
      {
        question: "Was ist eine Primzahl?",
        answer:
          "Eine Zahl, die nur durch 1 und sich selbst teilbar ist (z.B. 2, 3, 5, 7, 11)",
      },
      {
        question: "Was ist der grösste gemeinsame Teiler (ggT)?",
        answer: "Die grösste Zahl, die zwei Zahlen ohne Rest teilt",
      },
      {
        question: "Was ist das kleinste gemeinsame Vielfache (kgV)?",
        answer:
          "Die kleinste Zahl, die ein Vielfaches von zwei gegebenen Zahlen ist",
      },
      {
        question: "Wie lautet die Formel für die Steigung einer Geraden?",
        answer: "m = (y2 - y1) / (x2 - x1)",
      },
      {
        question: "Was ist der Volumen eines Würfels?",
        answer: "V = a³ (a = Kantenlänge)",
      },
      {
        question: "Was ist der Volumen eines Zylinders?",
        answer: "V = π × r² × h",
      },
      {
        question: "Was ist eine quadratische Gleichung?",
        answer: "Eine Gleichung der Form ax² + bx + c = 0",
      },
      {
        question: "Wie lautet die Lösungsformel für quadratische Gleichungen?",
        answer: "x = (-b ± √(b² - 4ac)) / 2a",
      },
      {
        question: "Was ist der Logarithmus?",
        answer:
          "Der Logarithmus log_b(x) gibt an, mit welcher Potenz man b erheben muss um x zu erhalten",
      },
      {
        question: "Was ist eine Funktion in der Mathematik?",
        answer:
          "Eine eindeutige Zuordnung: Jedem x-Wert wird genau ein y-Wert zugewiesen",
      },
      {
        question: "Was bedeutet Kommutativgesetz?",
        answer:
          "Die Reihenfolge spielt keine Rolle: a + b = b + a und a × b = b × a",
      },
      {
        question: "Was ist ein Bruch?",
        answer:
          "Eine Zahl der Form a/b, wobei a der Zähler und b der Nenner ist (b ≠ 0)",
      },
    ],
  },
  {
    deck: {
      title: "Englisch — Vokabeln",
      description: "Wichtige englische Vokabeln für den Alltag",
      tags: ["Englisch", "Vokabeln", "Sprache"],
    },
    cards: [
      {
        question: "Was bedeutet 'ambiguous'?",
        answer: "Mehrdeutig, zweideutig",
      },
      {
        question: "Was bedeutet 'perseverance'?",
        answer: "Beharrlichkeit, Ausdauer",
      },
      {
        question: "Was bedeutet 'eloquent'?",
        answer: "Redegewandt, ausdrucksstark",
      },
      {
        question: "Was bedeutet 'ephemeral'?",
        answer: "Kurzlebig, flüchtig, vergänglich",
      },
      {
        question: "Was bedeutet 'meticulous'?",
        answer: "Akribisch, sorgfältig, penibel",
      },
      {
        question: "Was bedeutet 'pragmatic'?",
        answer: "Pragmatisch, praxisorientiert",
      },
      {
        question: "Was bedeutet 'resilient'?",
        answer: "Widerstandsfähig, belastbar",
      },
      {
        question: "Was bedeutet 'concise'?",
        answer: "Prägnant, kurz und bündig",
      },
      {
        question: "Was bedeutet 'diligent'?",
        answer: "Fleissig, eifrig, sorgfältig",
      },
      {
        question: "Was bedeutet 'leverage'?",
        answer: "Hebel, Einfluss, einen Vorteil nutzen",
      },
      {
        question: "Was bedeutet 'scrutinize'?",
        answer: "Genau untersuchen, prüfen, unter die Lupe nehmen",
      },
      {
        question: "Was bedeutet 'paramount'?",
        answer: "Äusserst wichtig, vorrangig, von grösster Bedeutung",
      },
      {
        question: "Was bedeutet 'consensus'?",
        answer: "Übereinstimmung, Einigkeit, Konsens",
      },
      {
        question: "Was bedeutet 'facilitate'?",
        answer: "Erleichtern, ermöglichen, fördern",
      },
      {
        question: "Was bedeutet 'inevitable'?",
        answer: "Unvermeidlich, unausweichlich",
      },
      {
        question: "Was bedeutet 'substantial'?",
        answer: "Erheblich, wesentlich, beträchtlich",
      },
      {
        question: "Was bedeutet 'adjacent'?",
        answer: "Angrenzend, benachbart, anliegend",
      },
      {
        question: "Was bedeutet 'plausible'?",
        answer: "Plausibel, glaubwürdig, einleuchtend",
      },
    ],
  },
  {
    deck: {
      title: "Geografie — Hauptstädte",
      description: "Hauptstädte der Welt",
      tags: ["Geografie", "Hauptstädte", "Welt"],
    },
    cards: [
      {
        question: "Was ist die Hauptstadt von Australien?",
        answer: "Canberra",
      },
      { question: "Was ist die Hauptstadt von Brasilien?", answer: "Brasília" },
      { question: "Was ist die Hauptstadt von Kanada?", answer: "Ottawa" },
      { question: "Was ist die Hauptstadt von Japan?", answer: "Tokio" },
      {
        question: "Was ist die Hauptstadt von Argentinien?",
        answer: "Buenos Aires",
      },
      { question: "Was ist die Hauptstadt von Ägypten?", answer: "Kairo" },
      { question: "Was ist die Hauptstadt von Indien?", answer: "Neu-Delhi" },
      {
        question: "Was ist die Hauptstadt von Südafrika?",
        answer: "Pretoria (Regierungssitz), Kapstadt (Parlament)",
      },
      {
        question: "Was ist die Hauptstadt von Mexiko?",
        answer: "Mexiko-Stadt",
      },
      { question: "Was ist die Hauptstadt der Schweiz?", answer: "Bern" },
      { question: "Was ist die Hauptstadt von Norwegen?", answer: "Oslo" },
      { question: "Was ist die Hauptstadt von Portugal?", answer: "Lissabon" },
      { question: "Was ist die Hauptstadt von Griechenland?", answer: "Athen" },
      { question: "Was ist die Hauptstadt von Polen?", answer: "Warschau" },
      { question: "Was ist die Hauptstadt von Saudi-Arabien?", answer: "Riad" },
      {
        question: "Was ist die Hauptstadt von Neuseeland?",
        answer: "Wellington",
      },
      { question: "Was ist die Hauptstadt von Thailand?", answer: "Bangkok" },
      { question: "Was ist die Hauptstadt von Kenia?", answer: "Nairobi" },
    ],
  },
  {
    deck: {
      title: "Geschichte — Wichtige Ereignisse",
      description: "Wichtige historische Ereignisse und Jahreszahlen",
      tags: ["Geschichte", "Jahreszahlen", "Ereignisse"],
    },
    cards: [
      {
        question: "Wann begann der Erste Weltkrieg?",
        answer: "1914 (Attentat von Sarajevo am 28. Juni 1914)",
      },
      {
        question: "Wann endete der Zweite Weltkrieg?",
        answer: "1945 (8. Mai in Europa, 2. September in Asien)",
      },
      { question: "Wann fiel die Berliner Mauer?", answer: "9. November 1989" },
      { question: "Wann entdeckte Kolumbus Amerika?", answer: "1492" },
      {
        question: "Wann begann die Französische Revolution?",
        answer: "1789 (Sturm auf die Bastille am 14. Juli)",
      },
      {
        question: "Wann wurde die Schweiz gegründet?",
        answer: "1291 (Rütlischwur)",
      },
      {
        question: "Wann landeten Menschen erstmals auf dem Mond?",
        answer: "20. Juli 1969 (Apollo 11, Neil Armstrong)",
      },
      {
        question: "Wann wurde das Römische Reich gegründet?",
        answer: "753 v. Chr. (traditionelle Gründung durch Romulus)",
      },
      { question: "Wann erfand Gutenberg den Buchdruck?", answer: "Um 1450" },
      {
        question: "Wann begann die Industrielle Revolution?",
        answer: "Zweite Hälfte des 18. Jahrhunderts (ca. 1760) in England",
      },
      {
        question: "Was war die Magna Carta?",
        answer:
          "Englisches Dokument von 1215, das die Rechte des Königs einschränkte — Grundlage moderner Demokratie",
      },
      {
        question: "Wann wurde die UNO gegründet?",
        answer: "1945, nach dem Zweiten Weltkrieg",
      },
      {
        question: "Was war der Kalte Krieg?",
        answer:
          "Politische und ideologische Auseinandersetzung zwischen USA und UdSSR (1947–1991)",
      },
      {
        question:
          "Wann wurde Nelson Mandela zum Präsidenten Südafrikas gewählt?",
        answer: "1994 — erste demokratische Wahl nach der Apartheid",
      },
      {
        question: "Was war die Reformation?",
        answer:
          "Religiöse Bewegung im 16. Jahrhundert, ausgelöst durch Martin Luther (1517)",
      },
      {
        question: "Wann begann der Vietnamkrieg?",
        answer: "1955 (offiziell), endete 1975 mit dem Fall von Saigon",
      },
    ],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB verbunden");

    // Bestehende Daten löschen
    await Card.deleteMany({});
    await Deck.deleteMany({});
    console.log("Bestehende Daten gelöscht");

    // Decks und Karten erstellen
    for (const data of seedData) {
      const deck = await Deck.create(data.deck);
      console.log(`Deck erstellt: ${deck.title}`);

      const cards = data.cards.map((card) => ({
        ...card,
        deck: deck._id,
      }));

      await Card.insertMany(cards);
      console.log(`  → ${cards.length} Karten erstellt`);
    }

    console.log("\nSeed erfolgreich abgeschlossen!");
    process.exit(0);
  } catch (error) {
    console.error("Fehler beim Seeden:", error.message);
    process.exit(1);
  }
};

seedDB();
