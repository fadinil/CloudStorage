import express from 'express'
import mongoose from 'mongoose'

const PORT = 5000;
const app = express()
const DB_URL = 'mongodb+srv://user:user@cluster0.lnouucd.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json('Сервер работает')
})


async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Server started on port " + PORT))
    } catch(e){
        console.log(e)
    }
}

startApp()

