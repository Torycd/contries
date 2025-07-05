// import React from 'react'

import { FaArrowLeft } from "react-icons/fa";

const SelectedCountry = ({ selectCountry: country, handleBack }) => {
  console.log(country);
  return (
    <div className="py-8 px-20">
      <div className="mb-[100px]">
        <button
          className="flex justify-center items-center px-8 py-2 border-4 border-gray-300 rounded-sm"
          onClick={handleBack}
        >
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </button>
      </div>
      {/* selected country image and info */}
      <div className="grid grid-cols-2 space-x-20">
        <div>
          <img src={country.flag} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{country.name}</h2>
          <div className="grid grid-cols-2 gap-20 ">
            <ul>
              <li>
                Native Name: {country.nativeName}
                <span></span>
              </li>
              <li>
                population: {country.population.toLocaleString()}
                <span></span>
              </li>
              <li>
                Region: {country.region}
                <span></span>
              </li>
              <li>
                Sub Region: {country.subregion}
                <span></span>
              </li>
              <li>
                Capital: {country.capital}
                <span></span>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Top Level Domain:</strong>{" "}
                {country.topLevelDomain && country.topLevelDomain.join(", ")}
              </li>

              <li>
                <strong>Currencies:</strong>{" "}
                {country.currencies &&
                  country.currencies.map((cur, idx) => (
                    <span key={cur.code || idx}>
                      {cur.name} ({cur.symbol})
                      {idx !== country.currencies.length - 1 && ", "}
                    </span>
                  ))}
              </li>

              <li>
                <strong>Languages:</strong>{" "}
                {country.languages &&
                  country.languages.map((lg, idx) => (
                    <span key={lg.iso639_1 || idx}>
                      {lg.name}
                      {idx !== country.languages.length - 1 && ", "}
                    </span>
                  ))}
              </li>
            </ul>
          </div>
          <div>
            Border Countries: <span className="border-1 border-gray-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCountry;
