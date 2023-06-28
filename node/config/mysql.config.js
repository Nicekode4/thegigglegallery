
import mysql2 from "mysql2";
import dotevn from "dotenv";

// installere konfig env fil
dotevn.config();

// Opret forbindelse til MySQL-databasen med de angivne miljøvariabler
const db = mysql2.createConnection({
  host: process.env.DBHOST, // Værten for databasen fra miljøvariablen
  database: process.env.DBNAME,// Databasens navn fra miljøvariablen
  user: process.env.DBUSER,// Brugernavnet til databasen fra miljøvariablen
  password: process.env.DBPASSWORD, // Adgangskoden til databasen fra miljøvariablen
  port: process.env.DBPORT, // Portnummeret til databasen fra miljøvariablen
});

// Opret forbindelse til databasen
db.connect();


export default db