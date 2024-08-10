import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ArticuloModel = db.define('articulos',{
    codigo:{type : DataTypes.STRING},
    marca:{type : DataTypes.STRING},
    modelo:{type : DataTypes.STRING},
    precio:{type : DataTypes.DOUBLE}

})

export default ArticuloModel

