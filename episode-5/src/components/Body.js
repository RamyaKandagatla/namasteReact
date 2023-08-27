import ResCards from './ResCards';
import ResList from '../utils/mockData';
import {useState} from 'react';

const Body = () => {
  const [listOfRestuarants,setListOfRestuarants] = useState(ResList);

  return(
    <div className="res-body">
      <div className="search">
        <button className="filterBtn" onClick={() => {
          setListOfRestuarants(listOfRestuarants.filter(x => x.data.avgRating > 4));
        }}>
          GoodRatedRestaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarants.map((ele,index) => (
          <ResCards ResData={ele} key={ele.data.id}/>
        ))}
      </div>
    </div>
  )
}

export default Body;