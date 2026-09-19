import { Link } from "react-router";
import COUNTRIES from "../data/countries";

const CountriesPage = () => {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold">Countries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {COUNTRIES.map((c) => (
          <Link
            key={c.code}
            to={`/countries/${c.code.toLowerCase()}`}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-2">
              {/* Lalabas ang totoong flag image gamit ang country code */}
              <img
                src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                alt={`${c.name} flag`}
                className="w-10 h-7 object-cover rounded border"
              />
              <h2 className="text-xl font-semibold text-gray-800">{c.name}</h2>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p><strong className="font-medium text-gray-700">Capital:</strong> {c.capital}</p>
              <p><strong className="font-medium text-gray-700">Region:</strong> {c.region}</p>
              <p><strong className="font-medium text-gray-700">Population:</strong> {c.population.toLocaleString()} people</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;