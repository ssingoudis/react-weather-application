import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../API";

function Search({ onSearchChange }) {
 
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=200000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

//   2. handleOnChange get called with passed data (searchData) 
//   and sets new Value for setSearch  + call onSearchChange function
//   which has been passed from the App.js File
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city.."
      debounceTimeout={600}
      value={search}
    //   1. call onchange Method handleOnChange
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;