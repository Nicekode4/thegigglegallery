import  sequelize  from "../config/sequelize.config.js"
import { DataTypes, Model } from "sequelize";

class productModel extends Model {}

productModel.init({
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue : 'Untitled'
        },
        decs: {
            type:DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        img_link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categories: {
            type: DataTypes.INTEGER
        }
    },{
            sequelize,
            modelName:'books',
            freezeTableName:true,
            underscored:true,
            createdAt:'created_at',
            updatedAt:'updated_at'
        })

export default productModel