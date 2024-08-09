import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ArticuloModel = db.define('articulo',{
    id_articulo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    codigo:{type : DataTypes.STRING},
    marca:{type : DataTypes.STRING},
    modelo:{type : DataTypes.STRING},
    precio:{type : DataTypes.DOUBLE},
    fecha:{type : DataTypes.DATE}
    
},{
    tableName:'articulo',
    timestamps: false
})

export default ArticuloModel

