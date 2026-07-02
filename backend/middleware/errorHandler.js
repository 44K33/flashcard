// Middleware sind Funktionen die zwischen der Anfrage und der Antwort laufen. 
// Der errorHandler fängt Fehler ab die in den Controllern nicht abgefangen wurden.
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || "Interner Serverfehler";
// CastError tritt auf, wenn z.B. eine ungültige MongoDB-ID in der URL steht. Dann wird 400 (Bad Request) zurückgeschickt statt 500 (Internal Server Error).
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Ungültige ID";
  }

  res.status(statusCode).json({
    message,
  });
};

// notFound Middleware fängt alle Anfragen ab, die keine passende Route gefunden haben.
const notFound = (req, res, next) => {
  res.status(404).json({ message: `Route nicht gefunden: ${req.originalUrl}` });
};

export { errorHandler, notFound };