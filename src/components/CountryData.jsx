import React from "react";

const CountryData = ({ data, handleSelectCountry}) => {
  ;
  return (
    <div className="grid grid-cols-4 py-8 px-20 gap-20">
      {data.map((country) => (
        <div
          key={country.name}
          className="bg-white shadow-xl h-full rounded-sm"
          onClick={() => handleSelectCountry(country)}
        >
          <img
            className=" w-full h-40%"
            src={country.flag}
            alt={country.name}
          />
          <div className="p-3">
            <h2 className="font-bold mb-3 text-xl">{country.name}</h2>
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
