import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CountryData from "./components/CountryData";
import SelectedCountry from "./components/SelectedCountry";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [selectCountry, setSelectCountry] = useState(null);
  const [view, setView] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  // Fetch Api
  useEffect(() => {
    const getData = async () => {
      try {
        setIsloading(true);
        setError("");
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,borders,population,region,cca3,languages,topLevelDomain"
        );
        if (!response.ok)
          throw new Error("Something wrong with fecthing Country Data");
        const data = await response.json();
        console.log(data);
        setOriginalData(data); // store full data
        setData(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    getData();
  }, []);

  // handle back button
  const handleBack = () => {
    setView(false);
  };
  const handleSelectCountry = (ct) => {
    setView(true);
    setSelectCountry(ct);
  };

  // Combined filter by name and region
  useEffect(() => {
    let filtered = originalData;

    if (regionSelect) {
      filtered = filtered.filter(
        (cty) => cty.region.toLowerCase() === regionSelect.toLowerCase()
      );
    }

    if (searchInput) {
      filtered = filtered.filter((cty) =>
        cty.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setData(filtered);
  }, [searchInput, regionSelect, originalData]);

  return (
    <div
      className="background min-h-screen"
      data-theme={isDark ? "dark" : "light"}
    >
      <NavBar isDark={isDark} setIsDark={setIsDark} handleBack={handleBack} />
      {view ? (
        <SelectedCountry
          handleBack={handleBack}
          selectCountry={selectCountry}
        />
      ) : (
        <>
          <div>
            {/* Search and region filter */}
            <Search
              setRegionSelect={setRegionSelect}
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />
            {/* country data */}
            {!isLoading && !error && (
              <CountryData
                data={data}
                handleSelectCountry={handleSelectCountry}
              />
            )}
            {isLoading && (
              <div className="flex flex-col items-center gap-10 h-dvh">
                <h2 className="text-xl font-bold">Loading Countries data</h2>
                <p>
                  What country are you currently in? 🗺, Search once the data
                  loads to see information about that country.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
