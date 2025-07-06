import { useEffect } from "react";

import { FaArrowLeft } from "react-icons/fa";

const SelectedCountry = ({ selectCountry: country, handleBack }) => {
  // For title effect and clean up of title
  useEffect(() => {
    if (!country) return;
    document.title = `${country.name}`;

    return () => {
      document.title = "Countries Info";
    };
  }, [country]);

  console.log(country);
  return (
    <div className="background h-dvh py-6 px-4 sm:px-20">
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
      <div className="grid sm:grid-cols-2 space-y-5 sm:space-x-20">
        <div>
          <img src={country.flag} alt="" />
        </div>
        <div>
          <h2 className=" text-xl sm:text-2xl font-bold mb-4">
            {country.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-20  mb-5">
            <ul className="space-y-3">
              <li>
                <strong>Native Name:</strong> {country.nativeName}
              </li>
              <li>
                <strong>population:</strong>{" "}
                {country.population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {country.region}
              </li>
              <li>
                <strong>Sub Region:</strong> {country.subregion}
              </li>
              <li>
                <strong>Capital:</strong> {country.capital}
              </li>
            </ul>
            <ul className="space-y-3">
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
          <div className="flex gap-2">
            <strong>Border Countries:</strong>{" "}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center">
              {country.borders?.map((bd) => (
                <span
                  key={bd}
                  className="border-2 px-3 text-[10px] py-[2px] rounded-sm border-gray-400 "
                >
                  {bd}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCountry;
