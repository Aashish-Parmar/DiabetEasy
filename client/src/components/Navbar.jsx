import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-3  fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🩺 DiabetEasy</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/diagnosis" className="hover:underline">
            Diagnosis
          </Link>
          {/* <Link to="/admin/users" className="hover:underline">
            Admin
          </Link> */}
          <Link to="/analytics" className="hover:underline">
            Analytics
          </Link>
          <Link to="/history" className="hover:underline">
            History
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
