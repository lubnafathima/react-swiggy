import React, { useEffect, useState } from "react";
// import { resDatas } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Container = () => {
  // const [filteredData, setFilteredData] = useState(resDatas);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return !listOfRestaurants?.length ? (
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
            const listOfRestaurants = resDatas.filter((res) =>
              res?.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilteredData(listOfRestaurants);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filter = listOfRestaurants.filter((res) => res?.rating > 4.5);
            setListOfRestaurants(filter);
          }}
          className="button"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res_content">
        {listOfRestaurants.map((resData) => (
          <ResCard resData={resData} key={resData?.info?.id} />
        ))}
      </div>
    </section>
  );
};

export default Container;
