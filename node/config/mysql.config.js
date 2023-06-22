import mysql2 from "mysql2";
import dotevn from "dotenv";

dotevn.config();

const db = mysql2.createConnection({
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
});

db.connect();

export default db