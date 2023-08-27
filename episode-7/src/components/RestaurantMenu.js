import { useState, useEffect } from "react";

const RestaurantMenu = () => {

  useEffect(async ()=>{
    const resMenu = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.961861962562814&lng=77.64695025980471&restaurantId=538247&submitAction=ENTER');
    const json = await resMenu.json();
    console.log(json,"apidata");
  },[])

  return (
    <div>
      <h1>Meghana Foods</h1>
      <h2>Cost for two</h2>
      <h2>Recommened List</h2>
      <ul>
        <li>Biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

