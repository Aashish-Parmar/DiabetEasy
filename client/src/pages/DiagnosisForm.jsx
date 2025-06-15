import React, { useState } from 'react'
import axios from 'axios'

const DiagnosisForm = () => {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  })

  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const token = localStorage.getItem('token')  // get JWT token
    const res = await axios.post('http://localhost:5000/api/diagnosis', formData, {
      headers: {
        Authorization: `Bearer ${token}`   // add token here
      }
    })
    setResult(res.data.result)
  } catch (err) {
    console.error(err)
  }
}


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-md bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Diabetes Diagnosis Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium capitalize">{key}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 text-center text-xl font-semibold text-green-700">
          {result === 'Positive'
            ? '⚠️ High risk of Diabetes detected!'
            : '✅ No Diabetes detected!'}
        </div>
      )}
    </div>
  )
}

export default DiagnosisForm
