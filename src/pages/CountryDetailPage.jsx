import { useParams, useNavigate, Link } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  // Guard against undefined countryCode before running toUpperCase
  const country = countryCode
    ? COUNTRIES.find((c) => c.code === countryCode.toUpperCase())
    : null;

  if (!country) {
    return (
     <div className="text-center space-y-2">
  <img
    src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
    alt={`${country.name} flag`}
    className="w-32 mx-auto rounded shadow"
  />
  <h1 className="text-3xl font-bold">{country.name}</h1>
</div>
    );
  }

  const handleRandom = () => {
    const others = COUNTRIES.filter((c) => c.code !== country.code);
    const random = others[Math.floor(Math.random() * others.length)];
    navigate(`/countries/${random.code}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="text-center space-y-2">
        <span className="text-6xl block" role="img" aria-label={`${country.name} flag`}>
          {country.flag}
        </span>
        <h1 className="text-3xl font-bold">{country.name}</h1>
      </div>

      <div className="space-y-2 text-gray-700 border-t border-b py-4">
        <p><strong className="font-semibold">Capital:</strong> {country.capital}</p>
        <p><strong className="font-semibold">Region:</strong> {country.region}</p>
        <p>
          <strong className="font-semibold">Population:</strong>{" "}
          {country.population.toLocaleString()} people
        </p>
      </div>

      <div className="flex justify-between items-center pt-2">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleRandom}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Random Country
        </button>
      </div>
    </div>
  );
};

export default CountryDetailPage;