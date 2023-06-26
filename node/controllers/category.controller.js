
// import db from '..mysql.config/config.js/'
import categoryModel from "../model/catergory.model.js"



class categoryController{

    constructor(){}

    list = async (req, res) => {
        const result =  await categoryModel.findAll({
            limit:2,
            order:['name']
        })

        console.log(result)
        res.json(result) // Sender resultatet som JSON
    }

    create = async (req, res) => {
        const result = await categoryModel({
            where :{id: req.params.id}
        })9
        res.json(result)
        }

        

}






export default categoryController




