import express from 'express'
import { router as initRouter} from './routes/init.sequelize.router.js'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true})) //læse form data
app.use(initRouter)

app.listen(port, () => {
    console.log(`serveren kører på http://localhost:${port}`)
})