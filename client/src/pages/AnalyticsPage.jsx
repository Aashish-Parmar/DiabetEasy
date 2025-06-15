import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const AnalyticsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await axios.get('http://localhost:5000/api/diagnosis/history', {
          headers: { Authorization: `Bearer ${token}` }
        })

        // Convert result strings to numerical values
        const formatted = res.data.map((item, index) => ({
          id: index + 1,
          date: new Date(item.createdAt).toLocaleDateString(),
          risk: item.result === 'High Risk' ? 100 : 30 // High = 100, Low = 30
        }))

        setData(formatted)
      } catch (err) {
        console.error('Error loading history:', err)
      }
    }

    fetchHistory()
  }, [])

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6 text-center">📈 Diagnosis Risk Chart</h2>

      {data.length === 0 ? (
        <p className="text-center">No history available</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} tickFormatter={(value) => value + '%'} />
            <Tooltip />
            <Line type="monotone" dataKey="risk" stroke="#f43f5e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default AnalyticsPage
