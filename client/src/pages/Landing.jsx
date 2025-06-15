// import { Link } from 'react-router-dom';
// import { FaHeartbeat, FaUserShield, FaNotesMedical } from 'react-icons/fa';

// export default function Landing() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 font-poppins">
//       {/* Hero Section */}
//       <div className="text-center py-20 bg-blue-700 text-white px-4">
//         <h1 className="text-5xl font-bold mb-4">DiabetEasy</h1>
//         <p className="text-xl mb-6">Your smart assistant for early Diabetes detection and monitoring</p>
//         <div className="space-x-4">
//           <Link to="/login" className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-gray-200 transition">
//             Login
//           </Link>
//           <Link to="/register" className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-gray-200 transition">
//             Register
//           </Link>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 px-4 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
//         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <FaNotesMedical className="text-blue-600 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold text-center mb-2">Instant Diagnosis</h3>
//             <p className="text-center text-gray-600">Submit health data and receive AI-powered diagnosis instantly.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <FaHeartbeat className="text-blue-600 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold text-center mb-2">Health Analytics</h3>
//             <p className="text-center text-gray-600">View trends and insights from your past diagnosis history.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <FaUserShield className="text-blue-600 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold text-center mb-2">User Privacy</h3>
//             <p className="text-center text-gray-600">Your health data is encrypted and stored securely.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="bg-blue-800 text-white text-center py-6">
//         <p>&copy; 2025 DiabetEasy. Built with ❤️ by Aashish Parmar.</p>
//       </div>
//     </div>
//   );
// }


import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserShield, FaNotesMedical } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Img11 from '../assets/images/111.png';
import Img22 from '../assets/images/22.png';
import Img33 from '../assets/images/33.png';

export default function Landing() {
  const features = [
    {
      icon: <FaNotesMedical className="text-green-500 text-5xl mb-4" />,
      title: 'Instant Diagnosis',
      description:
        'Submit your health metrics like glucose level, BMI, blood pressure and receive accurate, AI-powered predictions within seconds.',
      image: Img33,
    },
    {
      icon: <FaHeartbeat className="text-red-500 text-5xl mb-4" />,
      title: 'Health Analytics',
      description:
        'Visualize your past reports, spot trends over time, and get actionable insights for better decision-making and lifestyle changes.',
      image: Img22,
    },
    {
      icon: <FaUserShield className="text-purple-500 text-5xl mb-4" />,
      title: 'User Privacy',
      description:
        'We ensure full encryption of your health data with strict privacy policies and compliance to international healthcare security standards.',
      image: Img11 ,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl font-bold text-blue-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DiabetEasy
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your AI-driven companion for early detection, monitoring, and managing diabetes with clarity and confidence.
          </motion.p>
          <motion.div className="space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <Link
              to="/login"
              className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
            >
              Register
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights - Alternating Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col-reverse md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
            >
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {feature.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-tr from-purple-100 to-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
          Begin Your Health Journey Today
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you want to prevent, manage, or understand diabetes better — DiabetEasy empowers you with fast diagnostics, smart analytics, and secure data handling.
        </p>
        <Link
          to="/register"
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Join the Community
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>&copy; 2025 DiabetEasy. Designed and developed with care by Aashish Parmar.</p>
      </footer>
    </div>
  );
}
