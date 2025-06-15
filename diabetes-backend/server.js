// server.js
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import diagnosisRoutes from './routes/diagnosisRoutes.js'
import adminRoutes from './routes/adminRoutes.js';

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/diagnosis', diagnosisRoutes)

app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  })
  .catch((err) => console.error('❌ DB Error:', err))
