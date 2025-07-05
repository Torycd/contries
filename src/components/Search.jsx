// import React from "react";

const Search = ({ setSearchInput, searchInput }) => {
  return (
    <div className="flex py-8 px-20 justify-between">
      <div className="flex bg-white rounded-sm shadow-xl gap-10 justify-between items-center px-8">
        <span>btn</span>
        <input
          type="text"
          placeholder="Search for a country"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>

      <div>
        <select
          id="options"
          name="options"
          className="bg-white shadow-xl py-3 px-8 font-semibold focus:outline-0"
          placeholder="filter by region"
        >
          <option value="option1">Africa</option>
          <option value="option2">America</option>
          <option value="option3">Asia</option>
          <option value="option3">Europe</option>
          <option value="option3">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
