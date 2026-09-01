import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const deckApi = {
  getAll: () => api.get("/decks"),
  getById: (id) => api.get(`/decks/${id}`),
  create: (payload) => api.post("/decks", payload),
  update: (id, payload) => api.put(`/decks/${id}`, payload),
  remove: (id) => api.delete(`/decks/${id}`),
};

export const cardApi = {
  getAll: () => api.get("/cards"),
  getById: (id) => api.get(`/cards/${id}`),
  getByDeck: (deckId) => api.get(`/cards/deck/${deckId}`),
  create: (payload) => api.post("/cards", payload),
  update: (id, payload) => api.put(`/cards/${id}`, payload),
  remove: (id) => api.delete(`/cards/${id}`),
};

export const seedApi = {
  run: () => api.post("/seed"),
}

export default api;
