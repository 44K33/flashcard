import axios from "axios";

// Erstellt eine axios-Instanz mit fester Basis-URL, damit man nicht bei jedem Aufruf
// die komplette Adresse (http://localhost:5000/api/...) neu schreiben muss
// import.meta.env.VITE_API_URL = optionale Umgebungsvariable für die Produktion,
// falls keine gesetzt ist, wird lokal auf Port 5000 zurückgegriffen
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Bündelt alle API-Aufrufe rund um Decks an einem Ort
export const deckApi = {
  getAll: () => api.get("/decks"),
  getById: (id) => api.get(`/decks/${id}`),
  create: (payload) => api.post("/decks", payload),
  update: (id, payload) => api.put(`/decks/${id}`, payload),
  remove: (id) => api.delete(`/decks/${id}`),
};

// Bündelt alle API-Aufrufe rund um Karten an einem Ort
export const cardApi = {
  getAll: () => api.get("/cards"),
  getById: (id) => api.get(`/cards/${id}`),
  getByDeck: (deckId) => api.get(`/cards/deck/${deckId}`),
  create: (payload) => api.post("/cards", payload),
  update: (id, payload) => api.put(`/cards/${id}`, payload),
  remove: (id) => api.delete(`/cards/${id}`),
};

// Löst das Einfügen der Beispieldaten im Backend aus (löscht vorher alle bestehenden Daten!)
export const seedApi = {
  run: () => api.post("/seed"),
};

// Login-Aufruf, credentials = { username, password }
export const authApi = {
  login: (credentials) => api.post("/auth/login", credentials),
};
export default api;
