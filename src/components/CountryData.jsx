import "../index.css";

const CountryData = ({ data, handleSelectCountry }) => {
  return (
    <div className="grid  md:grid-cols-4 py-8 px-4 sm:px-20 gap-10 sm:gap-20">
      {data.map((country) => (
        <div
          key={country.name.official}
          className="element shadow-xl h-full rounded-md transform transition duration-300 hover:scale-105"
          onClick={() => handleSelectCountry(country)}
        >
          <img
            className=" w-full h-40% rounded-t-md"
            src={country.flags.svg}
            alt={country.name}
          />
          <div className="p-3">
            <h2 className="font-bold mb-3 text-xl">{country.name.official}</h2>
            <div className="font-semibold space-y-2 text-[12px]">
              <h3>
                Population:
                <span className="ml-1 opacity-50">
                  {country.population.toLocaleString()}
                </span>
              </h3>
              <h3>
                Region:
                <span className="ml-1 opacity-50">{country.region}</span>
              </h3>
              <h3>
                Capital:
                <span className="ml-1 opacity-50">{country.capital}</span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryData;
