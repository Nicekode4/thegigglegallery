import express from 'express'
import sequelize from '../config/sequelize.config.js'
import categoryModel from '../model/catergory.model.js';
import reviewsModel from '../model/reviews.model.js';
const router = express.Router();

// Rute til at initialisere databaseforbindelsen
router.get('/init',(req,res) =>{
    try{
        sequelize.sync()
        // console.log('er det hul igennem?')
        res.sendStatus(200)
    }
    catch(err){
        console.error(err);
    }
})

export{router}