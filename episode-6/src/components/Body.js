import ResCards from "./ResCards";
import ResList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(ResList);
  const [searchName, setSerachName] = useState("");

  // allow cors extension was added to chrome.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622129&lng=77.64537949999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setListOfRestuarants(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="search">
        <div className="search-cont">
          <input
            className="inp-search"
            type="text"
            value={searchName}
            onChange={(e) => setSerachName(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listOfRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(searchName.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filterBtn"
          onClick={() => {
            setListOfRestuarants(
              listOfRestuarants.filter((x) => x.info.avgRating > 4)
            );
          }}
        >
          GoodRatedRestaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((ele, index) => (
          <ResCards ResData={ele} key={ele.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
