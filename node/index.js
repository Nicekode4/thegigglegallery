import express from 'express'
import { router as initRouter } from './routes/init.sequelize.router.js'
import { productRouter } from './routes/product.router.js';
import { categoryRouter } from './routes/category.router.js';
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(productRouter)
app.use(categoryRouter)
app.use(initRouter)

app.listen(port, () => {
	console.log(`Server kører på http://localhost:${port}`)	
})



