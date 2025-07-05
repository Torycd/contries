import { useEffect, useState } from "react";
import DATA from "./assets/data.json";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CountryData from "./components/CountryData";

const App = () => {
  const [data, setData] = useState(DATA);
  const [searchInput, setSearchInput] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  console.log(data);
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
      <NavBar />
      <div className="bg-gray-50 h-screen ">
        {/* Search and region filter */}
        <Search
          setRegionSelect={setRegionSelect}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />

        {/* country data */}
        <CountryData data={data} />
      </div>
    </div>
  );
};

export default App;
