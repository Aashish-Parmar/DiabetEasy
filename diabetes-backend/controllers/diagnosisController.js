import Diagnosis from '../models/Diagnosis.js'

export const diagnose = async (req, res) => {
  const {
    pregnancies,
    glucose,
    bloodPressure,
    skinThickness,
    insulin,
    bmi,
    diabetesPedigreeFunction,
    age
  } = req.body

  const riskScore = glucose * 0.6 + bmi * 0.3 + age * 0.1
  const result = riskScore > 150 ? 'Positive' : 'Negative'

  const newReport = new Diagnosis({
    user: req.user.id,
    pregnancies,
    glucose,
    bloodPressure,
    skinThickness,
    insulin,
    bmi,
    diabetesPedigreeFunction,
    age,
    result
  })

  await newReport.save()

  res.json({ result })
}

export const getHistory = async (req, res) => {
  try {
    const history = await Diagnosis.find({ user: req.user.id }).sort({ createdAt: -1 })
    res.json(history)
  } catch (err) {
    console.error("❌ History Error:", err.message)
    res.status(500).json({ message: 'Server Error' })
  }
}