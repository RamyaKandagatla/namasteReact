import ResCards from './ResCards';
import ResList from '../utils/mockData';
import {useEffect, useState} from 'react';

const Body = () => {
  const [listOfRestuarants,setListOfRestuarants] = useState(ResList);

  const [filteredRestaurants,setFilteredRestaurants] = useState(ResList);
  const [ searchName, setSerachName] = useState("");


  // do with actual swiggy api using this in ur laptop
  // useEffect( () => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.961861962562814&lng=77.64695025980471&page_type=DESKTOP_WEB_LISTING");
  //   const data = await response.json();
  //   console.log(data);
  //   setListOfRestuarants(data?.........)
  // use optional chaining for destructuring.
  // }


  return(
    <div className="res-body">
      <div className="search">
        <div className='search-cont'>
          <input className='inp-search' type='text' value={searchName} 
            onChange = {(e) => setSerachName(e.target.value)}
          />
          <button className='search-btn' 
            onClick = {() => {
              const filteredRes = 
              listOfRestuarants.filter((res) => res.data.name.toLowerCase().includes(searchName.toLowerCase()));
              setFilteredRestaurants(filteredRes);
            }}
          >
          search
          </button>
        </div>
        <button className="filterBtn" onClick={() => {
          setListOfRestuarants(listOfRestuarants.filter(x => x.data.avgRating > 4));
        }}>
          GoodRatedRestaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((ele,index) => (
          <ResCards ResData={ele} key={ele.data.id}/>
        ))}
      </div>
    </div>
  )
}

export default Body;