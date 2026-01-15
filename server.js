import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import todoRoute from './routes/todoRoute.js'




dotenv.config()
const PORT = process.env.PORT || 5000


const app = express()

// CORS configuration
app.use(cors({
  origin: '*', // Allow all origins (for development)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/todo', todoRoute)


mongoose.connect('mongodb://localhost:27017/LearningBackend')
    .then(() => console.log('Connecte1d to MongoDB'))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


