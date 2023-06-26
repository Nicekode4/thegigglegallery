import express from 'express'
import sequelize from '../config/sequelize.config.js'
import categoryModel from '../models/category.model.js'

const router = express.Router()

router.get('/init', (req, res) =>{
    try {
        sequelize.sync()
        res.sendStatus(200)
    } catch(err) {
        console.error(err);
    }
})

export { router }