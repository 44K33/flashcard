// Diese Datei stellt die Verbindung zu MongoDB her. Mongoose ist eine Bibliothek die es einfacher macht, mit MongoDB zu arbeiten.
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Verbindet sich mit der MongoDB-Datenbank. Die URL kommt aus der .env Datei 
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB verbunden: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Fehler bei der MongoDB-Verbindung: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;