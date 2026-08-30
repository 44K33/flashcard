import jwt from "jsonwebtoken";

// @desc    User einloggen
// @route   POST /api/auth/login
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (
      process.env.APP_PASSWORD &&
      password === process.env.APP_PASSWORD &&
      process.env.APP_USERNAME &&
      username === process.env.APP_USERNAME
    ) {
      // Hier wird über prüft ob der wert "APP_PASSWORD" True/false ist
      // dan wird es überprüft ob "password" mit "process.env.APP_PASSWORD" übereinstimmt
      // dies wird zusätzlich für den username geprüft damit alle 4 bedienungen erfüllt werden

      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      // jwt.sign(payload, secret, options) erstellt ein signiertes Token.
      // Baut Header + Payload, kodiert beides (Base64Url) und berechnet mit JWT_SECRET
      // eine Signatur (HMAC-SHA256) daraus. Ergebnis: "header.payload.signatur" als String.
      // Nur wer JWT_SECRET kennt, kann gültige Tokens erzeugen oder später prüfen (jwt.verify).
      // expiresIn setzt automatisch ein "exp"-Feld im Payload, damit das Token abläuft.

      res.status(200).json({ token });
    } else {
      res.status(401).json({
        message: "Ungültige Anmeldedaten",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Fehler beim Login", error: error.message });
  }
};
