import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert("✅ Registration successful!");
    } catch (err) {
      alert("❌ Registration failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input type="text" name="name" placeholder="Name" onChange={handleChange}
          className="w-full p-2 mb-3 border rounded" required />

        <input type="email" name="email" placeholder="Email" onChange={handleChange}
          className="w-full p-2 mb-3 border rounded" required />

        <input type="password" name="password" placeholder="Password" onChange={handleChange}
          className="w-full p-2 mb-4 border rounded" required />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link>
        </p>
      </form>
    </div>
  );
}
