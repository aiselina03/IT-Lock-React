import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose, { Schema } from 'mongoose'
const app = express()
app.use(express.json())
app.use(cors())

const appleSchema = new Schema({
    name: String,
    desc: String,
    price: Number,
    image: String
});
const AppleModel = mongoose.model('Blog', appleSchema);


app.get('/', async (req, res) => {
    try {
        const products = await AppleModel.find({})
        res.json(products)
    } catch (error) {
        res.send(error.message)
    }

})

app.get('/:id', async (req, res) => {
    try {
        let { id } = req.params
        const products = await AppleModel.findById(id)
        res.json(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        let { name, desc, price, image }= req.body
        const newProducts = new AppleModel({ name, desc, price, image })
        await newProducts.save()
            res.json(newProducts)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        let { name, desc, price, image }= req.body
        let { id } = req.params
        const products = await AppleModel.findByIdAndUpdate(id,{ name, desc, price, image })
        res.json(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        let { id } = req.params
        const products = await AppleModel.findByIdAndDelete(id)
        res.json(products)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect(process.env.DB_SECRET_KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})