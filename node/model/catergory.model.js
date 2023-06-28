import  sequelize  from "../config/sequelize.config.js"
import { DataTypes, Model } from "sequelize";

class categoryModel extends Model {}
// Definition af attributterne for modellen
// Определение атрибутов для модели
categoryModel.init({
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        name: {
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue :'Untitled'
        }
    },{
            sequelize,
            modelName:'category',
            freezeTableName:true,
            underscored:true,
            createdAt:'created_at',
            updatedAt:'updated_at'
        })

export default categoryModel