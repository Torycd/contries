// import React from 'react'

import { FaArrowLeft } from "react-icons/fa";

const SelectedCountry = () => {
  return (
    <div className="py-8 px-20">
      <div>
        <button>
          <span>
            <FaArrowLeft />
          </span>
          Back
        </button>
      </div>
      <div className="flex">
        <div><img src="" alt=""/></div>
        <div></div>
      </div>
    </div>
  );
};

export default SelectedCountry;
