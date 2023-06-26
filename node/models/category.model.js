import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model} from 'sequelize'

class categoryModel extends Model {}

categoryModel.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'category', 
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

export default categoryModel