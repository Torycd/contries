import { useEffect, useState } from "react";
import DATA from "./assets/data.json";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState(DATA);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      setData(DATA); // reset when search is empty
    } else {
      setData(
        DATA.filter((cty) =>
          cty.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput]);

  return (
    <div className="">
      <NavBar />
      <div className="bg-gray-50 h-screen ">
        {/* Search and region filter */}
        <Search setSearchInput={setSearchInput} searchInput={searchInput} />

        {/* country data */}
        <div className="grid grid-cols-4 py-8 px-20 gap-20">
          {data.map((country) => (
            <div
              key={country.name}
              className="bg-white shadow-xl h-full rounded-sm"
            >
              <img
                className=" w-full h-40%"
                src={country.flag}
                alt={country.name}
              />
              <div className="p-3">
                <h2 className="font-bold mb-3 text-xl">{country.name}</h2>
                <div className="font-semibold">
                  <h3>Population: {country.population}</h3>
                  <h3>Region {country.region}</h3>
                  <h3>Capital: {country.capital}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
