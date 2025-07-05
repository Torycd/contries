import { useEffect, useState } from "react";
import DATA from "./assets/data.json";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CountryData from "./components/CountryData";
import SelectedCountry from "./components/SelectedCountry";

const App = () => {
  const [data, setData] = useState(DATA);
  const [searchInput, setSearchInput] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [selectCountry, setSelectCountry] = useState(null);
  const [view, setView] = useState(false);

  const handleBack = () => {
    setView(false);
  };
  const handleSelectCountry = (ct) => {
    setView(true);
    setSelectCountry(ct);
  };
  // For title effect and clean up of title
  useEffect(() => {
    if (!selectCountry) return;
    document.title = `${selectCountry.name}`;

    return () => {
      document.title = "Countries Info";
    };
  }, [selectCountry]);

  useEffect(() => {
    if (searchInput === "") {
      setData(DATA);
    } else {
      setData(
        DATA.filter((cty) =>
          cty.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput]);

  useEffect(() => {
    if (regionSelect === "") {
      setData(DATA);
    } else {
      setData(DATA.filter((dt) => dt.region === regionSelect));
    }
  }, [regionSelect]);

  return (
    <div className="">
      <NavBar handleBack={handleBack} />
      {view ? (
        <SelectedCountry
          handleBack={handleBack}
          selectCountry={selectCountry}
        />
      ) : (
        <>
          <div className="bg-gray-50 ">
            {/* Search and region filter */}
            <Search
              setRegionSelect={setRegionSelect}
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />

            {/* country data */}

            <CountryData
              data={data}
              handleSelectCountry={handleSelectCountry}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
