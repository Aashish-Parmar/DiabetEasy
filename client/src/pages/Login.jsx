// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       alert("✅ Login successful!");
//       localStorage.setItem("token", res.data.token); // for protected routes later
//     } catch (err) {
//       alert("❌ Login failed: " + err.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

//         <input type="email" name="email" placeholder="Email" onChange={handleChange}
//           className="w-full p-2 mb-3 border rounded" required />

//         <input type="password" name="password" placeholder="Password" onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded" required />

//         <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
//           Login
//         </button>

//         <p className="text-sm mt-4 text-center">
//           Don't have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// }


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // ⬅️ useNavigate hook

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert("✅ Login successful!");
      localStorage.setItem("token", res.data.token);
      navigate('/diagnosis'); // ⬅️ redirect to diagnosis page
    } catch (err) {
      alert("❌ Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
        </p>
      </form>
    </div>
  );
}
