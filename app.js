import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import articleRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/article', articleRoutes)
try {
    await db.authenticate()
    console.log('conectada')
} catch (error) {
    console.log(`error: ${error}`)
}

app.get('/',(req,res)=>{
    res.send("Hola mundo")
})

app.listen(8000, ()=>{
    console.log('conectado al puerto http://localhost:8000/')
})