// makeAdmin.js
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const userEmail = 'aashishpar97@outlook.com' // your email
    const user = await User.findOne({ email: userEmail })

    if (user) {
      user.isAdmin = true
      await user.save()
      console.log(`✅ ${userEmail} is now an Admin`)
    } else {
      console.log(`❌ User with email ${userEmail} not found`)
    }

    mongoose.disconnect()
  })
  .catch((err) => {
    console.error('❌ Error connecting to DB:', err)
  })
