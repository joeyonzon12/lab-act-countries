import { Link, useNavigate } from "react-router";
import COUNTRIES from "../data/countries";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSurpriseMe = () => {
    const random = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    navigate(`/countries/${random.code.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
        Countries of the World
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Browse the world's countries and build your travel bucket list.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/countries"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Browse Countries
        </Link>
        <button
          onClick={handleSurpriseMe}
          className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default HomePage;