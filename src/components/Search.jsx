// import React from "react";

import { FaSearch } from "react-icons/fa";

const Search = ({ setRegionSelect, setSearchInput, searchInput }) => {
  const handleChange = (e) => {
    setRegionSelect(e.target.value);
  };
  return (
    <div className="flex py-8 px-20 justify-between">
      <div className="flex bg-white rounded-sm shadow-xl gap-10 justify-between items-center px-8">
        <span>
          <FaSearch className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearchInput(e.target.value)}
          className="focus:outline-none w-[300px]"
          value={searchInput}
        />
      </div>

      <div>
        <select
          id="options"
          name="options"
          className="bg-white text-left shadow-xl py-3 px-8 rounded-sm font-semibold focus:outline-0 "
          onChange={handleChange}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
