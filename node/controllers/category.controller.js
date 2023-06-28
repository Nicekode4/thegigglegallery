
// import db from '..mysql.config/config.js/'
import categoryModel from "../model/catergory.model.js"

class categoryController{

    constructor(){}

// Metode til at få en liste over kategorier
    list = async (req, res) => {
        const result =  await categoryModel.findAll({
            limit:5,
            order:['name']
        })
        console.log(result)
        res.json(result)
    }

// Metode til at oprette en ny kategori
    create = async (req, res) => {
        const name = req.body
            console.log(req.body);
            if (name){
                const model = await categoryModel.create(req.body)
                return res.json({newid: model.id})
            }}

// Metode til at opdatere en kategori
     update = async (req, res) => {
        const { id, name} = req.body
            console.log(req.body);
            if (name && id){
                const model = await categoryModel.update(req.body, {where: {id: id}})
                return res.json({newid: model.id})
                }
             else{
                res.send(418)
            }}

 // Metode til at slette en kategori
     delete = async (req, res) => {
                try {
                    await categoryModel.destroy( {where: {id: req.params.id }})
                    res.sendStatus(200)
                }

                catch(err){
                    res.send(err)
                }
                    }

        }
export default categoryController




