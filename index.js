
//nmp pakker: nodemon, express,sequelize,dotenv,mysql2



import express from 'express'
import { router as initRouter } from './routes/init.sequelize.router.js';
import dotenv from 'dotenv';

dotenv.config();



const port = process.env.PORT
const app = express()

app.use(express.urlencoded({extended: true}))


app.listen(port, () => {
	console.log(`Server kører på http://localhost:${port}`)	
})


app.use(initRouter)

