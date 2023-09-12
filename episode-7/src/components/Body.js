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
    <div className="justify-center">
      <div className="flex justify-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-cyan-700 outline-none p-[0.42rem] rounded-md"
            value={searchName}
            onChange={(e) => setSerachName(e.target.value)}
          />
          <button
            className="m-2 px-4 py-2 bg-lime-200 rounded-md font-bold"
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
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-orange-200 rounded-md font-bold"
            onClick={() => {
              setListOfRestuarants(
                listOfRestuarants.filter((x) => x.info.avgRating > 4)
              );
            }}
          >
            GoodRatedRestaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
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
