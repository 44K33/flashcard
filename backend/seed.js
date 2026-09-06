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
  {
    deck: {
      title: "Biologie — Grundlagen",
      description: "Grundlegende Konzepte aus der Biologie",
      tags: ["Biologie", "Grundlagen", "Naturwissenschaft"],
    },
    cards: [
      {
        question: "Was ist eine Zelle?",
        answer: "Die kleinste strukturelle und funktionelle Einheit des Lebens",
      },
      {
        question: "Was ist der Unterschied zwischen Mitose und Meiose?",
        answer:
          "Mitose erzeugt zwei identische Zellen (Wachstum), Meiose erzeugt vier genetisch unterschiedliche Keimzellen (Fortpflanzung)",
      },
      {
        question: "Was ist Photosynthese?",
        answer:
          "Prozess, bei dem Pflanzen mit Licht, Wasser und CO₂ Glukose und Sauerstoff produzieren",
      },
      {
        question: "Was ist die DNA?",
        answer:
          "Desoxyribonukleinsäure — Trägerin der Erbinformation in Form einer Doppelhelix",
      },
      {
        question: "Was ist ein Gen?",
        answer:
          "Ein Abschnitt der DNA, der die Bauanleitung für ein Protein enthält",
      },
      {
        question:
          "Was ist der Unterschied zwischen Prokaryoten und Eukaryoten?",
        answer:
          "Prokaryoten haben keinen Zellkern (z.B. Bakterien), Eukaryoten besitzen einen echten Zellkern (z.B. Tiere, Pflanzen)",
      },
      {
        question: "Was macht das Mitochondrium?",
        answer: "Es ist das 'Kraftwerk der Zelle' und produziert ATP (Energie)",
      },
      {
        question: "Was ist ein Enzym?",
        answer:
          "Ein Protein, das chemische Reaktionen im Körper beschleunigt (Biokatalysator)",
      },
      {
        question: "Was versteht man unter Evolution?",
        answer:
          "Die Veränderung von Arten über Generationen durch natürliche Selektion",
      },
      {
        question: "Was ist Homöostase?",
        answer:
          "Die Fähigkeit eines Organismus, ein stabiles inneres Gleichgewicht aufrechtzuerhalten",
      },
      {
        question: "Was sind die vier Grundbausteine der DNA?",
        answer: "Adenin, Thymin, Guanin, Cytosin",
      },
      {
        question: "Was ist ein Ökosystem?",
        answer:
          "Die Gesamtheit von Lebewesen und ihrer unbelebten Umwelt in einem Lebensraum",
      },
      {
        question: "Was ist der Unterschied zwischen Genotyp und Phänotyp?",
        answer:
          "Genotyp ist die genetische Ausstattung, Phänotyp das sichtbare Erscheinungsbild eines Organismus",
      },
      {
        question: "Was ist Osmose?",
        answer:
          "Die Diffusion von Wassermolekülen durch eine halbdurchlässige Membran von niedriger zu hoher Konzentration",
      },
      {
        question: "Was sind Antikörper?",
        answer:
          "Proteine des Immunsystems, die Krankheitserreger erkennen und bekämpfen",
      },
    ],
  },
  {
    deck: {
      title: "Chemie — Grundlagen",
      description: "Grundlegende chemische Konzepte und das Periodensystem",
      tags: ["Chemie", "Grundlagen", "Naturwissenschaft"],
    },
    cards: [
      {
        question: "Was ist ein Atom?",
        answer:
          "Die kleinste Einheit eines chemischen Elements, bestehend aus Protonen, Neutronen und Elektronen",
      },
      { question: "Was ist das chemische Symbol für Gold?", answer: "Au" },
      {
        question: "Was ist der pH-Wert?",
        answer:
          "Ein Mass für die Säure- oder Basenstärke einer Lösung (Skala 0–14)",
      },
      {
        question: "Was ist eine Säure?",
        answer:
          "Ein Stoff, der in Wasser H⁺-Ionen (Protonen) abgibt, pH-Wert unter 7",
      },
      {
        question: "Was ist eine Base?",
        answer:
          "Ein Stoff, der in Wasser OH⁻-Ionen aufnimmt oder abgibt, pH-Wert über 7",
      },
      {
        question: "Was ist eine Ionenbindung?",
        answer:
          "Eine Bindung durch elektrostatische Anziehung zwischen positiv und negativ geladenen Ionen",
      },
      {
        question: "Was ist eine kovalente Bindung?",
        answer:
          "Eine Bindung, bei der zwei Atome sich ein Elektronenpaar teilen",
      },
      {
        question: "Was besagt das Periodensystem?",
        answer:
          "Es ordnet alle chemischen Elemente nach steigender Ordnungszahl und wiederkehrenden Eigenschaften",
      },
      {
        question: "Was ist ein Mol?",
        answer:
          "Die Einheit der Stoffmenge — 1 Mol entspricht ca. 6,022 × 10²³ Teilchen (Avogadro-Konstante)",
      },
      {
        question: "Was ist eine exotherme Reaktion?",
        answer:
          "Eine chemische Reaktion, bei der Energie in Form von Wärme freigesetzt wird",
      },
      {
        question: "Was ist eine endotherme Reaktion?",
        answer: "Eine chemische Reaktion, die Energie (Wärme) aufnimmt",
      },
      {
        question: "Was ist ein Katalysator?",
        answer:
          "Ein Stoff, der eine Reaktion beschleunigt, ohne selbst verbraucht zu werden",
      },
      { question: "Was ist die chemische Formel von Wasser?", answer: "H₂O" },
      {
        question: "Was ist Oxidation?",
        answer: "Der Verlust von Elektronen durch ein Atom oder Molekül",
      },
      {
        question: "Was ist Reduktion?",
        answer: "Die Aufnahme von Elektronen durch ein Atom oder Molekül",
      },
    ],
  },
  {
    deck: {
      title: "Informatik — Programmiergrundlagen",
      description: "Grundbegriffe aus der Programmierung und Informatik",
      tags: ["Informatik", "Programmieren", "Grundlagen"],
    },
    cards: [
      {
        question: "Was ist eine Variable?",
        answer:
          "Ein benannter Speicherplatz, der einen Wert enthält, welcher sich verändern kann",
      },
      {
        question:
          "Was ist der Unterschied zwischen einem Array und einem Objekt?",
        answer:
          "Ein Array speichert Werte in einer geordneten Liste mit Indizes, ein Objekt speichert Werte in Schlüssel-Wert-Paaren",
      },
      {
        question: "Was ist eine Funktion?",
        answer:
          "Ein wiederverwendbarer Codeblock, der eine bestimmte Aufgabe ausführt und optional einen Wert zurückgibt",
      },
      {
        question: "Was ist eine Schleife (Loop)?",
        answer:
          "Eine Struktur, die einen Codeblock wiederholt ausführt, solange eine Bedingung erfüllt ist",
      },
      {
        question:
          "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
        answer:
          "'==' vergleicht nur den Wert (mit Typumwandlung), '===' vergleicht Wert UND Datentyp",
      },
      {
        question: "Was ist eine API?",
        answer:
          "Application Programming Interface — eine Schnittstelle, über die Programme miteinander kommunizieren",
      },
      {
        question: "Was ist der Unterschied zwischen Frontend und Backend?",
        answer:
          "Frontend ist der sichtbare Teil einer App (UI), Backend verarbeitet Logik und Daten im Hintergrund (Server, Datenbank)",
      },
      {
        question: "Was ist eine Datenbank?",
        answer:
          "Ein System zum strukturierten Speichern, Verwalten und Abrufen von Daten",
      },
      {
        question: "Was ist Git?",
        answer:
          "Ein Versionskontrollsystem, mit dem Änderungen am Code über die Zeit nachverfolgt werden können",
      },
      {
        question:
          "Was ist der Unterschied zwischen synchronem und asynchronem Code?",
        answer:
          "Synchroner Code läuft nacheinander ab (blockierend), asynchroner Code kann im Hintergrund laufen ohne den Programmablauf zu blockieren",
      },
      {
        question: "Was ist eine REST-API?",
        answer:
          "Eine API, die auf HTTP-Methoden (GET, POST, PUT, DELETE) basiert, um mit Ressourcen zu interagieren",
      },
      {
        question: "Was bedeutet 'CRUD'?",
        answer:
          "Create, Read, Update, Delete — die vier Grundoperationen beim Arbeiten mit Daten",
      },
      {
        question: "Was ist ein Algorithmus?",
        answer: "Eine schrittweise Anleitung zur Lösung eines Problems",
      },
      {
        question: "Was ist der Unterschied zwischen HTML, CSS und JavaScript?",
        answer:
          "HTML definiert die Struktur, CSS das Aussehen/Layout, JavaScript die Interaktivität/Logik einer Webseite",
      },
      {
        question: "Was ist ein Bug?",
        answer:
          "Ein Fehler im Programmcode, der zu unerwartetem Verhalten führt",
      },
    ],
  },
  {
    deck: {
      title: "Physik — Grundlagen",
      description: "Grundlegende physikalische Gesetze und Formeln",
      tags: ["Physik", "Grundlagen", "Naturwissenschaft"],
    },
    cards: [
      { question: "Was ist die Einheit der Kraft?", answer: "Newton (N)" },
      {
        question: "Was besagt das erste Newtonsche Gesetz (Trägheitsgesetz)?",
        answer:
          "Ein Körper bleibt in Ruhe oder gleichförmiger Bewegung, solange keine Kraft auf ihn wirkt",
      },
      {
        question: "Wie lautet die Formel für kinetische Energie?",
        answer: "E_kin = 1/2 × m × v²",
      },
      {
        question: "Was ist die Schallgeschwindigkeit in Luft (ca.)?",
        answer: "Ca. 343 m/s bei 20°C",
      },
      {
        question: "Was ist die Lichtgeschwindigkeit?",
        answer: "Ca. 299'792 km/s (im Vakuum)",
      },
      {
        question: "Was besagt das Gesetz der Energieerhaltung?",
        answer:
          "Energie kann nicht erzeugt oder vernichtet, nur umgewandelt werden",
      },
      { question: "Was ist die Formel für Dichte?", answer: "ρ = m / V" },
      {
        question: "Was ist ein elektrischer Widerstand?",
        answer:
          "Der Wert, der den Stromfluss in einem Leiter behindert, gemessen in Ohm (Ω)",
      },
      { question: "Wie lautet das Ohmsche Gesetz?", answer: "U = R × I" },
      {
        question: "Was ist die Einheit der elektrischen Spannung?",
        answer: "Volt (V)",
      },
      {
        question: "Was ist Gravitation?",
        answer: "Die Anziehungskraft zwischen Massen",
      },
      {
        question: "Was ist der Unterschied zwischen Masse und Gewicht?",
        answer:
          "Masse ist die Menge an Materie (kg), Gewicht ist die Kraft, die die Schwerkraft auf diese Masse ausübt (N)",
      },
    ],
  },
  {
    deck: {
      title: "Deutsch — Grammatik",
      description: "Grundlagen der deutschen Grammatik",
      tags: ["Deutsch", "Grammatik", "Sprache"],
    },
    cards: [
      {
        question: "Was ist ein Substantiv?",
        answer: "Ein Namenwort, das Personen, Dinge oder Begriffe bezeichnet",
      },
      {
        question: "Was ist der Unterschied zwischen Aktiv und Passiv?",
        answer:
          "Im Aktiv führt das Subjekt die Handlung aus, im Passiv wird das Subjekt von der Handlung betroffen",
      },
      {
        question: "Was ist ein Konjunktiv?",
        answer:
          "Eine Verbform, die Möglichkeit, Wunsch oder indirekte Rede ausdrückt",
      },
      {
        question: "Wie viele Fälle (Kasus) gibt es im Deutschen?",
        answer: "Vier: Nominativ, Genitiv, Dativ, Akkusativ",
      },
      {
        question: "Was ist ein Adjektiv?",
        answer: "Ein Eigenschaftswort, das ein Substantiv näher beschreibt",
      },
      {
        question: "Was ist der Unterschied zwischen 'das' und 'dass'?",
        answer:
          "'das' ist ein Artikel/Pronomen, 'dass' ist eine Konjunktion, die einen Nebensatz einleitet",
      },
      {
        question: "Was ist ein Hauptsatz?",
        answer:
          "Ein Satz, der alleine stehen kann und ein finites Verb an zweiter Stelle hat",
      },
      {
        question: "Was ist ein Nebensatz?",
        answer:
          "Ein Satz, der von einem Hauptsatz abhängig ist und das Verb meist am Ende hat",
      },
      {
        question:
          "Was sind die drei grammatikalischen Geschlechter im Deutschen?",
        answer: "Maskulin, feminin, neutrum (der, die, das)",
      },
      {
        question: "Was ist ein Synonym?",
        answer:
          "Ein Wort mit gleicher oder ähnlicher Bedeutung wie ein anderes Wort",
      },
      {
        question: "Was ist ein Antonym?",
        answer: "Ein Wort mit gegensätzlicher Bedeutung",
      },
    ],
  },
  {
    deck: {
      title: "Französisch — Vokabeln",
      description: "Grundlegende französische Vokabeln",
      tags: ["Französisch", "Vokabeln", "Sprache"],
    },
    cards: [
      { question: "Was bedeutet 'bonjour'?", answer: "Guten Tag / Hallo" },
      { question: "Was bedeutet 'merci beaucoup'?", answer: "Vielen Dank" },
      { question: "Was bedeutet 'au revoir'?", answer: "Auf Wiedersehen" },
      {
        question: "Was bedeutet 's'il vous plaît'?",
        answer: "Bitte (formell)",
      },
      { question: "Was bedeutet 'la maison'?", answer: "Das Haus" },
      { question: "Was bedeutet 'le travail'?", answer: "Die Arbeit" },
      { question: "Was bedeutet 'comprendre'?", answer: "Verstehen" },
      {
        question: "Was bedeutet 'la journée'?",
        answer: "Der Tag (Tagesverlauf)",
      },
      {
        question: "Was bedeutet 'malheureusement'?",
        answer: "Leider, unglücklicherweise",
      },
      {
        question: "Was bedeutet 'actuellement'?",
        answer: "Momentan, zurzeit (Achtung: falscher Freund, nicht 'aktuell')",
      },
      { question: "Was bedeutet 'le quartier'?", answer: "Das Stadtviertel" },
      { question: "Was bedeutet 'la voiture'?", answer: "Das Auto" },
    ],
  },
  {
    deck: {
      title: "Wirtschaft — Grundbegriffe",
      description: "Grundlegende wirtschaftliche Konzepte",
      tags: ["Wirtschaft", "Grundbegriffe"],
    },
    cards: [
      {
        question: "Was ist Inflation?",
        answer:
          "Ein allgemeiner und anhaltender Anstieg des Preisniveaus, wodurch die Kaufkraft des Geldes sinkt",
      },
      {
        question: "Was ist das Bruttoinlandprodukt (BIP)?",
        answer:
          "Der Gesamtwert aller Güter und Dienstleistungen, die in einem Land in einem Jahr produziert werden",
      },
      {
        question: "Was ist der Unterschied zwischen Angebot und Nachfrage?",
        answer:
          "Angebot ist die Menge, die Verkäufer bereit sind zu verkaufen; Nachfrage ist die Menge, die Käufer bereit sind zu kaufen",
      },
      {
        question: "Was ist eine Aktie?",
        answer:
          "Ein Wertpapier, das einen Anteil am Eigenkapital einer Aktiengesellschaft verbrieft",
      },
      {
        question: "Was ist eine Rezession?",
        answer:
          "Ein wirtschaftlicher Abschwung, meist definiert als zwei aufeinanderfolgende Quartale mit sinkendem BIP",
      },
      {
        question: "Was ist ein Monopol?",
        answer: "Ein Markt, auf dem nur ein einziger Anbieter existiert",
      },
      {
        question: "Was ist der Leitzins?",
        answer:
          "Der Zinssatz, zu dem sich Geschäftsbanken bei der Zentralbank Geld leihen können",
      },
      {
        question: "Was ist ein Budget?",
        answer:
          "Ein Plan über erwartete Einnahmen und Ausgaben über einen bestimmten Zeitraum",
      },
      {
        question: "Was ist der Unterschied zwischen Brutto und Netto?",
        answer:
          "Brutto ist der Betrag vor Abzügen, Netto ist der Betrag nach Abzügen (z.B. Steuern)",
      },
      {
        question: "Was ist Diversifikation (in der Geldanlage)?",
        answer:
          "Die Verteilung von Kapital auf verschiedene Anlagen, um das Risiko zu reduzieren",
      },
    ],
  },
  {
    deck: {
      title: "Musik — Theorie",
      description: "Grundlagen der Musiktheorie",
      tags: ["Musik", "Theorie"],
    },
    cards: [
      {
        question: "Wie viele Töne hat eine Oktave in der westlichen Musik?",
        answer: "12 Halbtöne (7 Stammtöne + 5 Alterationen)",
      },
      {
        question: "Was ist ein Dur-Akkord?",
        answer:
          "Ein Dreiklang aus Grundton, grosser Terz und reiner Quinte, klingt 'fröhlich'",
      },
      {
        question: "Was ist ein Moll-Akkord?",
        answer:
          "Ein Dreiklang aus Grundton, kleiner Terz und reiner Quinte, klingt 'traurig'",
      },
      {
        question: "Was bedeutet 'Forte' in der Musik?",
        answer: "Laut spielen",
      },
      {
        question: "Was bedeutet 'Piano' in der Musik?",
        answer: "Leise spielen",
      },
      {
        question: "Was ist ein Taktmass (z.B. 4/4)?",
        answer:
          "Es gibt an, wie viele Schläge pro Takt gezählt werden und welche Notenlänge einen Schlag bildet",
      },
      {
        question: "Was ist ein Halbton?",
        answer: "Der kleinste Tonabstand im westlichen Tonsystem",
      },
      {
        question: "Was ist eine Tonleiter?",
        answer: "Eine festgelegte Abfolge von Tönen innerhalb einer Oktave",
      },
      {
        question: "Was ist der Unterschied zwischen Rhythmus und Melodie?",
        answer:
          "Rhythmus ist die zeitliche Ordnung von Tönen, Melodie ist die Abfolge von Tonhöhen",
      },
      {
        question: "Was ist ein Metronom?",
        answer:
          "Ein Gerät, das ein gleichmässiges Tempo (Schläge pro Minute) vorgibt",
      },
    ],
  },
  {
    deck: {
      title: "Kunst — Kunstgeschichte",
      description: "Wichtige Künstler und Kunstrichtungen",
      tags: ["Kunst", "Kunstgeschichte"],
    },
    cards: [
      { question: "Wer malte die Mona Lisa?", answer: "Leonardo da Vinci" },
      {
        question: "Was ist der Impressionismus?",
        answer:
          "Eine Kunstrichtung des 19. Jh., die Licht- und Farbeindrücke statt exakter Details darstellt (z.B. Monet)",
      },
      { question: "Wer malte 'Die Sternennacht'?", answer: "Vincent van Gogh" },
      {
        question: "Was ist Kubismus?",
        answer:
          "Eine Kunstrichtung, die Objekte in geometrische Formen aus mehreren Perspektiven zerlegt (z.B. Picasso)",
      },
      { question: "Wer schuf die Skulptur 'David'?", answer: "Michelangelo" },
      {
        question: "Was ist die Renaissance?",
        answer:
          "Eine kulturelle Epoche (14.–17. Jh.), die eine Wiederbelebung antiker Ideale in Kunst und Wissenschaft brachte",
      },
      { question: "Wer malte 'Guernica'?", answer: "Pablo Picasso" },
      {
        question: "Was ist Surrealismus?",
        answer:
          "Eine Kunstrichtung, die Traum- und Unterbewusstseinswelten darstellt (z.B. Salvador Dalí)",
      },
      {
        question: "Was ist eine Fresko-Malerei?",
        answer: "Wandmalerei auf frischem, feuchtem Verputz",
      },
      {
        question: "Wer entwarf die Deckenmalerei der Sixtinischen Kapelle?",
        answer: "Michelangelo",
      },
    ],
  },
  {
    deck: {
      title: "Sport — Allgemeinwissen",
      description: "Allgemeinwissen rund um verschiedene Sportarten",
      tags: ["Sport", "Allgemeinwissen"],
    },
    cards: [
      {
        question: "Wie viele Spieler hat eine Fussballmannschaft auf dem Feld?",
        answer: "11",
      },
      {
        question: "Wie lange dauert ein Fussballspiel (regulär)?",
        answer: "90 Minuten (2 x 45 Minuten)",
      },
      {
        question:
          "Alle wie viele Jahre finden die Olympischen Sommerspiele statt?",
        answer: "Alle 4 Jahre",
      },
      { question: "Wie viele Ringe hat das Olympische Symbol?", answer: "5" },
      {
        question: "Was ist ein Ass im Tennis?",
        answer: "Ein direkter, nicht zurückspielbarer Aufschlagpunkt",
      },
      {
        question:
          "Wie viele Spieler hat eine Basketballmannschaft auf dem Feld?",
        answer: "5",
      },
      {
        question: "Was ist ein Hattrick?",
        answer: "Drei Tore eines Spielers in einem Spiel",
      },
      { question: "Wie lang ist ein Marathon?", answer: "42,195 km" },
      {
        question: "In welcher Sportart wird der Begriff 'K.O.' verwendet?",
        answer: "Boxen",
      },
      {
        question: "Was bedeutet 'Abseits' im Fussball?",
        answer:
          "Ein Angreifer ist im Abseits, wenn er sich beim Pass näher an der gegnerischen Torlinie befindet als der vorletzte Verteidiger",
      },
    ],
  },
  {
    deck: {
      title: "Astronomie — Grundlagen",
      description: "Grundwissen über unser Sonnensystem und das Universum",
      tags: ["Astronomie", "Naturwissenschaft", "Grundlagen"],
    },
    cards: [
      { question: "Wie viele Planeten hat unser Sonnensystem?", answer: "8" },
      {
        question: "Was ist der grösste Planet im Sonnensystem?",
        answer: "Jupiter",
      },
      {
        question: "Was ist der kleinste Planet im Sonnensystem?",
        answer: "Merkur",
      },
      {
        question: "Wie lange dauert eine Erdumdrehung um die Sonne?",
        answer: "Ca. 365,25 Tage",
      },
      {
        question: "Was ist ein Lichtjahr?",
        answer:
          "Die Strecke, die Licht in einem Jahr zurücklegt (ca. 9,46 Billionen km)",
      },
      {
        question: "Was ist ein schwarzes Loch?",
        answer:
          "Ein Bereich im Raum mit so starker Gravitation, dass nicht einmal Licht entkommen kann",
      },
      {
        question: "Was ist die Milchstrasse?",
        answer: "Die Galaxie, in der sich unser Sonnensystem befindet",
      },
      {
        question: "Was verursacht die Mondphasen?",
        answer: "Die wechselnde Position des Mondes relativ zu Erde und Sonne",
      },
      {
        question: "Was ist ein Komet?",
        answer:
          "Ein Himmelskörper aus Eis und Gestein, der beim Annähern an die Sonne einen Schweif bildet",
      },
      {
        question: "Was ist die nächste Nachbargalaxie der Milchstrasse?",
        answer: "Die Andromeda-Galaxie",
      },
    ],
  },
  {
    deck: {
      title: "Psychologie — Grundlagen",
      description: "Grundlegende Konzepte der Psychologie",
      tags: ["Psychologie", "Grundlagen"],
    },
    cards: [
      {
        question: "Was ist klassische Konditionierung?",
        answer:
          "Ein Lernprozess, bei dem ein neutraler Reiz mit einem natürlichen Reiz verknüpft wird (Pawlow)",
      },
      {
        question: "Was ist operante Konditionierung?",
        answer:
          "Lernen durch Belohnung oder Bestrafung von Verhalten (Skinner)",
      },
      {
        question: "Was ist kognitive Dissonanz?",
        answer:
          "Ein unangenehmes Gefühl, das entsteht, wenn Gedanken oder Handlungen im Widerspruch zueinander stehen",
      },
      {
        question: "Was ist die Maslowsche Bedürfnispyramide?",
        answer:
          "Ein Modell, das menschliche Bedürfnisse hierarchisch ordnet, von Grundbedürfnissen bis Selbstverwirklichung",
      },
      {
        question: "Was ist Extraversion (in der Persönlichkeitspsychologie)?",
        answer:
          "Eine Neigung, Energie aus sozialer Interaktion und äusseren Reizen zu ziehen",
      },
      {
        question: "Was ist das Kurzzeitgedächtnis?",
        answer:
          "Ein Gedächtnissystem, das Informationen für kurze Zeit (Sekunden bis Minuten) speichert",
      },
      {
        question: "Was ist Empathie?",
        answer:
          "Die Fähigkeit, sich in die Gefühle und Perspektive einer anderen Person hineinzuversetzen",
      },
      {
        question: "Was ist ein Placebo-Effekt?",
        answer:
          "Eine positive Wirkung, die durch die Erwartungshaltung entsteht, nicht durch den Wirkstoff selbst",
      },
      {
        question: "Was ist Resilienz?",
        answer:
          "Die psychische Widerstandsfähigkeit gegenüber Belastungen und Krisen",
      },
      {
        question: "Was ist der Bestätigungsfehler (Confirmation Bias)?",
        answer:
          "Die Tendenz, Informationen so zu suchen und zu interpretieren, dass sie die eigene Meinung bestätigen",
      },
    ],
  },
  {
    deck: {
      title: "Recht — Schweizer Grundlagen",
      description: "Grundlagen des Schweizer Staats- und Rechtssystems",
      tags: ["Recht", "Schweiz", "Grundbegriffe"],
    },
    cards: [
      { question: "Wie viele Kantone hat die Schweiz?", answer: "26" },
      {
        question: "Was ist die Bundesverfassung?",
        answer:
          "Das oberste Rechtsdokument der Schweiz, das die Grundrechte und die Staatsorganisation regelt",
      },
      {
        question: "Was ist der Bundesrat?",
        answer: "Die Schweizer Regierung, bestehend aus 7 Mitgliedern",
      },
      {
        question: "Was ist eine Volksinitiative?",
        answer:
          "Ein Instrument der direkten Demokratie, mit dem Bürger eine Verfassungsänderung vorschlagen können",
      },
      {
        question:
          "Was braucht es für ein fakultatives Referendum in der Schweiz?",
        answer: "50'000 Unterschriften innerhalb von 100 Tagen",
      },
      {
        question: "Was ist der Unterschied zwischen Zivilrecht und Strafrecht?",
        answer:
          "Zivilrecht regelt Beziehungen zwischen Privatpersonen, Strafrecht regelt die Bestrafung von Straftaten durch den Staat",
      },
      {
        question: "Was ist das Bundesgericht?",
        answer: "Das oberste Gericht der Schweiz",
      },
      {
        question: "Was regelt das Obligationenrecht (OR)?",
        answer:
          "Verträge, Schuldverhältnisse und Gesellschaftsrecht in der Schweiz",
      },
      {
        question: "Ab welchem Alter ist man in der Schweiz volljährig?",
        answer: "18 Jahre",
      },
      {
        question: "Was ist Föderalismus?",
        answer:
          "Ein Staatsprinzip, bei dem die Macht zwischen Bund, Kantonen und Gemeinden aufgeteilt ist",
      },
    ],
  },
  {
    deck: {
      title: "Ernährung — Grundlagen",
      description: "Grundwissen über Nährstoffe und gesunde Ernährung",
      tags: ["Ernährung", "Gesundheit", "Grundlagen"],
    },
    cards: [
      {
        question: "Was sind Makronährstoffe?",
        answer:
          "Kohlenhydrate, Proteine und Fette — Nährstoffe, die der Körper in grossen Mengen benötigt",
      },
      {
        question: "Was ist die Funktion von Proteinen im Körper?",
        answer: "Aufbau und Reparatur von Zellen und Gewebe, u.a. Muskeln",
      },
      {
        question: "Was sind Kohlenhydrate?",
        answer:
          "Ein Makronährstoff, der Hauptenergiequelle des Körpers (z.B. Zucker, Stärke)",
      },
      {
        question: "Was sind ungesättigte Fettsäuren?",
        answer:
          "Fette, die bei Raumtemperatur meist flüssig sind und als gesünder gelten (z.B. Olivenöl)",
      },
      {
        question: "Was sind Ballaststoffe?",
        answer: "Unverdauliche Pflanzenfasern, die die Verdauung fördern",
      },
      {
        question: "Wofür ist Vitamin C wichtig?",
        answer: "Immunsystem, Kollagenbildung, wirkt als Antioxidans",
      },
      {
        question: "Wie viele Kalorien hat ein Gramm Fett (ca.)?",
        answer: "Ca. 9 kcal",
      },
      {
        question:
          "Wie viele Kalorien haben ein Gramm Kohlenhydrate oder Protein (ca.)?",
        answer: "Ca. 4 kcal",
      },
      {
        question: "Was ist der glykämische Index?",
        answer:
          "Ein Mass dafür, wie schnell ein Lebensmittel den Blutzuckerspiegel ansteigen lässt",
      },
      {
        question: "Was ist Dehydration?",
        answer:
          "Ein Mangel an Wasser im Körper, der die Leistungsfähigkeit beeinträchtigt",
      },
    ],
  },
  {
    deck: {
      title: "Informatik — Netzwerke & Internet",
      description: "Grundbegriffe rund um Netzwerke und das Internet",
      tags: ["Informatik", "Netzwerke", "Internet"],
    },
    cards: [
      {
        question: "Was bedeutet 'IP-Adresse'?",
        answer:
          "Eine eindeutige Adresse, die ein Gerät in einem Netzwerk identifiziert",
      },
      {
        question: "Was ist der Unterschied zwischen HTTP und HTTPS?",
        answer:
          "HTTPS ist die verschlüsselte, sichere Version von HTTP (TLS/SSL-Verschlüsselung)",
      },
      {
        question: "Was macht ein DNS-Server?",
        answer: "Er übersetzt Domainnamen (z.B. google.com) in IP-Adressen",
      },
      {
        question: "Was ist ein Router?",
        answer: "Ein Gerät, das Datenpakete zwischen Netzwerken weiterleitet",
      },
      {
        question: "Was ist der Unterschied zwischen LAN und WAN?",
        answer:
          "LAN ist ein lokales Netzwerk (z.B. zuhause), WAN erstreckt sich über grosse Distanzen (z.B. Internet)",
      },
      {
        question: "Was ist eine Firewall?",
        answer:
          "Ein Sicherheitssystem, das den Netzwerkverkehr überwacht und unerwünschten Zugriff blockiert",
      },
      {
        question: "Wofür steht 'TCP/IP'?",
        answer:
          "Ein Protokollstapel, der die Grundlage für die Datenübertragung im Internet bildet",
      },
      {
        question: "Was ist ein Port (in der Netzwerktechnik)?",
        answer:
          "Eine logische Schnittstelle, über die Daten zu einem bestimmten Dienst auf einem Gerät geleitet werden",
      },
      {
        question: "Was ist ein VPN?",
        answer:
          "Virtual Private Network — ein verschlüsselter Tunnel, der eine sichere Verbindung über ein öffentliches Netzwerk herstellt",
      },
      {
        question: "Was ist der Unterschied zwischen Client und Server?",
        answer:
          "Der Client fordert Dienste/Daten an, der Server stellt sie bereit",
      },
    ],
  },
  {
    deck: {
      title: "Literatur — Klassiker",
      description: "Bekannte Werke und Begriffe aus der Literatur",
      tags: ["Literatur", "Klassiker"],
    },
    cards: [
      {
        question: "Wer schrieb 'Faust'?",
        answer: "Johann Wolfgang von Goethe",
      },
      { question: "Wer schrieb 'Wilhelm Tell'?", answer: "Friedrich Schiller" },
      {
        question: "Wer schrieb 'Romeo und Julia'?",
        answer: "William Shakespeare",
      },
      {
        question: "Was ist eine Metapher?",
        answer:
          "Eine bildliche Übertragung von Bedeutung, ohne Vergleichswort ('wie')",
      },
      {
        question: "Was ist ein Sonett?",
        answer:
          "Eine Gedichtform mit 14 Zeilen, meist in einem festen Reimschema",
      },
      { question: "Wer schrieb 'Die Verwandlung'?", answer: "Franz Kafka" },
      {
        question: "Was ist eine Parabel?",
        answer: "Eine kurze, lehrhafte Erzählung mit übertragener Bedeutung",
      },
      { question: "Wer schrieb 'Der Prozess'?", answer: "Franz Kafka" },
      {
        question: "Was ist der Unterschied zwischen Prosa und Lyrik?",
        answer:
          "Prosa ist Fliesstext (Sätze, Absätze), Lyrik ist in Versen und oft mit Reim/Rhythmus geschrieben",
      },
      { question: "Wer schrieb 'Effi Briest'?", answer: "Theodor Fontane" },
    ],
  },
];

export const seedDB = async () => {
  try {
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
  } catch (error) {
    console.error("Fehler beim Seeden:", error.message);
    throw error;
  }
};
