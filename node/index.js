

//nmp pakker: nodemon, express,sequelize,dotenv,mysql2



import express from 'express'
import { router as initRouter } from './routes/init.sequelize.router.js'
import { categoryRouter } from './routes/category.router.js';
import dotenv from 'dotenv';
import { reviewsRouter } from './routes/reviews.router.js';

dotenv.config();




const port = process.env.PORT
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(categoryRouter)
app.use(initRouter)
app.use(reviewsRouter)
app.listen(port, () => {
	console.log(`Server kører på http://localhost:${port}`)	
})




