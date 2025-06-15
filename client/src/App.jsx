// import { Routes, Route, Navigate } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import DiagnosisForm from "./pages/DiagnosisForm";
// import HistoryPage from "./pages/HistoryPage";
// import ProfilePage from "./pages/ProfilePage";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import AdminUsers from './pages/AdminUsers';
// import Navbar from './components/Navbar'
// import Landing from './pages/Landing'
// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/diagnosis" element={<DiagnosisForm />} />
//       <Route path="/history" element={<HistoryPage />} />
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="/analytics" element={<AnalyticsPage />} />
//       <Route path="/admin/users" element={<AdminUsers />} />
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DiagnosisForm from "./pages/DiagnosisForm";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AdminUsers from "./pages/AdminUsers";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/diagnosis" element={<DiagnosisForm />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        
        {/* Redirect any unmatched routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
