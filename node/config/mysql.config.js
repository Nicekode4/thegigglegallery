import mysql from 'mysql2'
import dotenv from 'dotenv'


dotenv.config()


const db = mysql.createConnection({
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
})

db.connect()

export default db