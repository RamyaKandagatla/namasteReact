import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {RES_INFO} from '../utils/constants';
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(()=>{
    fetchResInfo();
  },[]);

  const fetchResInfo = async() => {
    const res = await fetch(RES_INFO + resId);
    const json = await res.json();
    setResInfo(json.data);
  }

  if (resInfo === null) {
    return <Shimmer/>
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((res,index) => (
        <li key={res.card.info.id}>{res.card.info.name} - {res.card.info.price || res.card.info.defaultPrice}</li>
      ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

