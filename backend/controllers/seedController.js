import { seedDB } from "../seed.js";

export const seedDatabase = async (req, res) => {
  try {
    await seedDB();
    res.status(200).json({ message: "Datenbank erfolgreich neu befüllt" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Fehler beim Befüllen der Datenbank",
        error: error.message,
      });
  }
};
