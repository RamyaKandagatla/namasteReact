import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchName, setSerachName] = useState("");

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

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (<h1>
      You are offline!! please check your internet connection!!!
    </h1>)
  }

  return  ( listOfRestuarants.length === 0 ?
    <Shimmer />
   : (
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
          <Link to={"/restaurant/" + ele.info.id} key={ele.info.id}>
            <ResCards ResData={ele} />
          </Link>
        ))}
      </div>
    </div>
  )
  );
};

export default Body;
