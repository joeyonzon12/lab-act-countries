
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import COUNTRIES from "../data/countries";

const CountriesPage = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  // Save the warning before clearing navigation state
  const [notice] = useState(state?.missingCode ?? null);

  // Clear navigation state after saving the warning
  useEffect(() => {
    if (state?.missingCode) {
      navigate(pathname, {
        replace: true,
        state: null,
      });
    }
  }, [state, pathname, navigate]);

  return (
    <div className="max-w-4xl mx-auto">
      {notice && (
        <div className="alert alert-warning mb-4">
          <span>
            We don&apos;t have a country with code &quot;
            {notice}&quot;.
          </span>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4">
        Countries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {COUNTRIES.map((c) => (
          <Link
            key={c.code}
            to={`/countries/${c.code.toLowerCase()}`}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                alt={`${c.name} flag`}
                className="w-10 h-7 object-cover rounded border"
              />

              <h2 className="text-xl font-semibold text-gray-800">
                {c.name}
              </h2>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong className="font-medium text-gray-700">
                  Capital:
                </strong>{" "}
                {c.capital}
              </p>

              <p>
                <strong className="font-medium text-gray-700">
                  Region:
                </strong>{" "}
                {c.region}
              </p>

              <p>
                <strong className="font-medium text-gray-700">
                  Population:
                </strong>{" "}
                {c.population.toLocaleString()} people
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
