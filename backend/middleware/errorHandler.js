// zentrale Fehlerbehandlung
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || "Interner Serverfehler";

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Ungültige ID";
  }

  res.status(statusCode).json({
    message,
  });
};

const notFound = (req, res, next) => {
  res.status(404).json({ message: `Route nicht gefunden: ${req.originalUrl}` });
};

export { errorHandler, notFound };