# flashcard-app

Flashcard Lern App. Backend mit Express und MongoDB, Frontend mit React und Vite.

## Ordner

- `backend` – Express Server, REST API
- `frontend` – React App
- `docs` – Dokumentation

## Backend starten

```
cd backend
npm install
```

`.env` Datei im `backend` Ordner erstellen:

```
MONGO_URI=<deine MongoDB Verbindungs URL>
PORT=5000
```

Dann starten:

```
npm run dev
```

Läuft danach auf `http://localhost:5000`.

## Frontend starten

```
cd frontend
npm install
npm run dev
```

Läuft danach auf der von Vite angezeigten Adresse, meistens `http://localhost:5173`.

Optional `.env` im `frontend` Ordner, falls das Backend nicht auf Port 5000 läuft:

```
VITE_API_URL=http://localhost:5000/api
```

## API Endpunkte

```
GET    /api/decks
POST   /api/decks
DELETE /api/decks/:id

GET    /api/cards/deck/:deckId
POST   /api/cards
PUT    /api/cards/:id
DELETE /api/cards/:id

POST   /api/auth/login

POST   /api/seed
```

## Bekannte Einschränkungen

- Das beim Login erzeugte JWT wird aktuell von keiner Route geprüft und vom Frontend nicht mitgeschickt.
- Lernfortschritt (`known` Feld) wird während des Lernmodus nur lokal gehalten, nicht in der Datenbank gespeichert.