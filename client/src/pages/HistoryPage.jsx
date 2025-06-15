import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HistoryPage = () => {
  const [history, setHistory] = useState([])

  const fetchHistory = async () => {
    const token = localStorage.getItem('token')
    const res = await axios.get('http://localhost:5000/api/diagnosis/history', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setHistory(res.data)
  }

  useEffect(() => {
    fetchHistory()
  }, [])

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Diagnosis History</h2>
      {history.length === 0 ? (
        <p>No history found.</p>
      ) : (
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Date</th>
              <th>Glucose</th>
              <th>BMI</th>
              <th>Age</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item._id} className="text-center border-t">
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.glucose}</td>
                <td>{item.bmi}</td>
                <td>{item.age}</td>
                <td className={`font-semibold ${item.result === 'Positive' ? 'text-red-500' : 'text-green-600'}`}>
                  {item.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default HistoryPage
