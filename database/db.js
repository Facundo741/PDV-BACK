import { Sequelize } from "sequelize";

const db = new Sequelize('equipo', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})


export default db