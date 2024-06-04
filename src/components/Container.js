import React, { useState } from "react";
import { resDatas } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Container = () => {
  const [filteredData, setFilteredData] = useState(resDatas);
  const [searchData, setSearchData] = useState("");

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <section className="container">
      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="search_box"
        />
        <button
          className="button"
          onClick={() => {
            console.log(searchData);
            const filteredRestaurant = resDatas.filter((res) =>
              res.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilteredData(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filter = filteredData.filter((res) => res.rating > 4.5);
            setFilteredData(filter);
          }}
          className="button"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res_content">
        {filteredData.map((resData) => (
          <ResCard resData={resData} key={resData.id} />
        ))}
      </div>
    </section>
  );
};

export default Container;
