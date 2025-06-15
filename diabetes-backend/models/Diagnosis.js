import mongoose from 'mongoose'

const diagnosisSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pregnancies: Number,
  glucose: Number,
  bloodPressure: Number,
  skinThickness: Number,
  insulin: Number,
  bmi: Number,
  diabetesPedigreeFunction: Number,
  age: Number,
  result: {
    type: String,
    enum: ['Positive', 'Negative'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

export default mongoose.model('Diagnosis', diagnosisSchema)
