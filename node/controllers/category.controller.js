
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
        const name = req.body
            console.log(req.body);
            if (name){
                const model = await categoryModel.create(req.body)
                return res.json({newid: model.id})
            }
        }

        

}






export default categoryController




